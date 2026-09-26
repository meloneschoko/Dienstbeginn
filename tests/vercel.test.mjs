import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { handle } from "../server/nato-leaderboard.mjs";

const post = (data, headers = {}) => new Request("https://example.com/api/nato-leaderboard", {
  method: "POST", headers: {"content-type": "application/json", "x-dienstbeginn-game": "nato-v1", ...headers},
  body: typeof data === "string" ? data : JSON.stringify(data)
});
const result = {name:"Rekrut", score:26, durationMs:6000, firstPassPerfect:true};
test("missing database explicitly selects local storage", async () => {
  const response = await handle(new Request("https://example.com/api/nato-leaderboard"), {env:{}});
  assert.deepEqual(await response.json(), {storage:"local",entries:[]});
  assert.equal(response.headers.get("cache-control"), "no-store");
});
test("invalid requests never write to the database", async () => {
  const options={env:{},fetchImpl:()=>{throw Error("must not call");}};
  assert.equal((await handle(post(result,{origin:"https://attacker.test"}),options)).status,403);
  assert.equal((await handle(post({...result,score:25}),options)).status,400);
  assert.equal((await handle(post("null"),options)).status,400);
  assert.equal((await handle(post("{"),options)).status,400);
  assert.equal((await handle(post("x".repeat(2049)),options)).status,413);
  assert.equal((await handle(new Request("https://example.com",{method:"DELETE"}),options)).status,405);
});
test("configured storage uses persistent Redis and atomic write", async () => {
  let command;
  const options={env:{UPSTASH_REDIS_REST_URL:"https://redis.example",UPSTASH_REDIS_REST_TOKEN:"test"},
    fetchImpl:async (url, init)=>{command=JSON.parse(init.body);return Response.json({result:JSON.stringify({accepted:true,rank:1,entries:[result]})});}};
  const response=await handle(post(result),options);
  assert.equal(response.status,201);
  assert.equal(command[0],"EVAL");
  assert.equal(JSON.parse(command[4]).displayName,"Rekrut");
  assert.equal((await response.json()).storage,"shared");
});
test("database outages do not silently become local records", async () => {
  const response=await handle(new Request("https://example.com"),{
    env:{UPSTASH_REDIS_REST_URL:"https://redis.example",UPSTASH_REDIS_REST_TOKEN:"test"},
    fetchImpl:async()=>new Response("unavailable",{status:500})});
  assert.equal(response.status,503);
  assert.equal((await response.json()).storage,undefined);
});
test("local records persist, retain fastest ten, and report rejection", async () => {
  const saved=new Map();
  const context=vm.createContext({window:{},Response,crypto:globalThis.crypto,
    localStorage:{getItem:k=>saved.get(k)??null,setItem:(k,v)=>saved.set(k,v)},
    fetch:async()=>Response.json({storage:"local",entries:[]})});
  vm.runInContext(await readFile(new URL("../public/leaderboard-storage.js",import.meta.url),"utf8"),context);
  const call=context.window.requestNatoLeaderboard;
  await call("/api/nato-leaderboard");
  for(let i=0;i<12;i++) await call("/api/nato-leaderboard",{method:"POST",body:JSON.stringify({...result,durationMs:6000-i*100})});
  const entries=(await (await call("/api/nato-leaderboard")).json()).entries;
  assert.equal(entries.length,10);
  assert.equal(entries[0].durationMs,4900);
  assert.equal(entries[9].durationMs,5800);
  const rejected=await call("/api/nato-leaderboard",{method:"POST",body:JSON.stringify({...result,durationMs:8000})});
  assert.equal(rejected.status,409);
  context.localStorage.setItem=()=>{throw Error("quota");};
  await assert.rejects(call("/api/nato-leaderboard",{method:"POST",body:JSON.stringify({...result,durationMs:3000})}));
});
test("build contains the homepage, all referenced local assets and isolated function",async()=>{
  const html=await readFile(new URL("../.vercel/output/static/index.html",import.meta.url),"utf8");
  assert.match(html,/leaderboard-storage.js/);
  for(const match of html.matchAll(/(?:src|href)="([^"#?]+)(?:[?#][^"]*)?"/g)){
    if(/^(https?:|mailto:|tel:|data:)/.test(match[1]))continue;
    await readFile(new URL("../.vercel/output/static/"+match[1],import.meta.url));
  }
  const config=JSON.parse(await readFile(new URL("../.vercel/output/functions/api/nato-leaderboard.func/.vc-config.json",import.meta.url),"utf8"));
  assert.equal(config.runtime,"nodejs22.x");
  const api=await import("../.vercel/output/functions/api/nato-leaderboard.func/index.mjs");
  assert.equal(typeof api.default,"function");
});
