import test from "node:test";
import assert from "node:assert/strict";
import { handle } from "../server/nato-leaderboard.mjs";

const words = "Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu".split(" ");
function harness() {
  let time = 100000;
  const db = new Map(), commands = [];
  const options = {env:{UPSTASH_REDIS_REST_URL:"https://redis.example",UPSTASH_REDIS_REST_TOKEN:"test"},now:()=>time,fetchImpl:async (_,init)=>{
    const c=JSON.parse(init.body); commands.push(c); let result;
    if(c[0]==="GET") result=db.get(c[1])??null;
    else if(c[0]==="SET"){db.set(c[1],c[2]);result="OK";}
    else if(c[0]==="EVAL" && c[1].includes("INCR")){result=Number(db.get(c[3])||0)+1;db.set(c[3],result);}
    else if(c[0]==="EVAL" && c[1].includes("KEEPTTL")){result=db.get(c[3])===c[4]?1:0;if(result)db.set(c[3],c[5]);}
    else if(c[0]==="EVAL" && c[2]==="2"){
      if(db.get(c[4])!==c[6]) result=JSON.stringify({invalid:true});
      else {db.delete(c[4]);const entry=JSON.parse(c[5]);const entries=JSON.parse(db.get(c[3])||"[]");entries.push(entry);entries.sort((a,b)=>a.durationMs-b.durationMs);db.set(c[3],JSON.stringify(entries.slice(0,10)));result=JSON.stringify({accepted:true,rank:1,entries:entries.slice(0,10)});}
    } else throw Error("Unexpected Redis command");
    return Response.json({result});
  }};
  const call=data=>handle(new Request("https://example.com/api/nato-leaderboard",{method:"POST",headers:{"x-dienstbeginn-game":"nato-v1","content-type":"application/json"},body:JSON.stringify(data)}),options);
  return {call,db,commands,advance:ms=>{time+=ms;}};
}
async function start(h){const r=await h.call({action:"start"});assert.equal(r.status,201);return r.json();}
async function complete(h,s,wrong=false){for(let i=0;i<26;i++){h.advance(1000);const r=await h.call({action:"answer",sessionId:s.sessionId,index:i,word:wrong&&i===0?"wrong":words[s.letters[i].charCodeAt(0)-65]});assert.equal(r.status,200);} }

test("server-issued order, correct answers and server duration are required",async()=>{
  const h=harness(),s=await start(h);
  assert.equal(new Set(s.letters).size,26);
  assert.equal((await h.call({name:"Test",score:26,durationMs:3000,firstPassPerfect:true})).status,400);
  assert.equal((await h.call({name:"Test",sessionId:s.sessionId})).status,400);
  await complete(h,s);
  const r=await h.call({name:"Test",sessionId:s.sessionId,durationMs:3000,score:999});
  assert.equal(r.status,201);const body=await r.json();
  assert.equal(body.entries[0].durationMs,26000);assert.equal(body.entries[0].score,26);
  assert.equal((await h.call({name:"Test",sessionId:s.sessionId})).status,409);
});
test("wrong answers, skipped questions and replayed answers cannot qualify",async()=>{
  const h=harness(),s=await start(h);
  assert.equal((await h.call({action:"answer",sessionId:s.sessionId,index:2,word:"Alfa"})).status,409);
  await complete(h,s,true);
  assert.equal((await h.call({action:"answer",sessionId:s.sessionId,index:25,word:"Alfa"})).status,409);
  assert.equal((await h.call({name:"Test",sessionId:s.sessionId})).status,400);
});
test("expired sessions fail closed",async()=>{
  const h=harness(),s=await start(h);h.advance(3600001);
  assert.equal((await h.call({action:"answer",sessionId:s.sessionId,index:0,word:"Alfa"})).status,409);
});
test("start requests are rate limited",async()=>{
  const h=harness();for(let i=0;i<30;i++)await start(h);
  const r=await h.call({action:"start"});assert.equal(r.status,429);assert.equal(r.headers.get("retry-after"),"600");
});
test("concurrent state changes reject an answer instead of overwriting",async()=>{
  const h=harness(),s=await start(h);
  const request={action:"answer",sessionId:s.sessionId,index:0,word:words[s.letters[0].charCodeAt(0)-65]};
  const rs=await Promise.all([h.call(request),h.call(request)]);
  assert.deepEqual(rs.map(r=>r.status).sort(),[200,409]);
});
test("concurrent saves only consume a session once",async()=>{
  const h=harness(),s=await start(h);await complete(h,s);
  const rs=await Promise.all([h.call({name:"Test",sessionId:s.sessionId}),h.call({name:"Test",sessionId:s.sessionId})]);
  assert.deepEqual(rs.map(r=>r.status).sort(),[201,409]);
});
