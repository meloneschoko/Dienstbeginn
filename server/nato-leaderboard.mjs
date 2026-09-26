import { randomUUID, randomInt, createHmac } from "node:crypto";

const KEY = "dienstbeginn:nato-leaderboard:v1";
const LIMIT = 2048;
const SAVE = `
if redis.call("GET", KEYS[2]) ~= ARGV[2] then return cjson.encode({invalid=true}) end
redis.call("DEL", KEYS[2])
local entries = cjson.decode(redis.call('GET', KEYS[1]) or '[]')
local entry = cjson.decode(ARGV[1])
if #entries >= 10 and entry.durationMs >= entries[#entries].durationMs then
  return cjson.encode({accepted=false, entries=entries})
end
table.insert(entries, entry)
table.sort(entries, function(a,b)
  if a.durationMs ~= b.durationMs then return a.durationMs < b.durationMs end
  if a.createdAt ~= b.createdAt then return a.createdAt < b.createdAt end
  return a.id < b.id
end)
while #entries > 10 do table.remove(entries) end
local rank = 0
for i,v in ipairs(entries) do if v.id == entry.id then rank = i end end
redis.call('SET', KEYS[1], cjson.encode(entries))
return cjson.encode({accepted=rank > 0, rank=rank, entries=entries})
`;

const WORDS = "Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu".split(" ");
const SESSION_PREFIX = "dienstbeginn:nato-session:v2:";
const RATE = `
local n = redis.call('INCR', KEYS[1])
if n == 1 then redis.call('EXPIRE', KEYS[1], 600) end
return n
`;
const UPDATE = `
if redis.call('GET', KEYS[1]) ~= ARGV[1] then return 0 end
redis.call('SET', KEYS[1], ARGV[2], 'KEEPTTL')
return 1
`;
function json(value, status = 200, extra = {}) {
  return Response.json(value, { status, headers: { "cache-control": "no-store", "x-content-type-options": "nosniff", ...extra } });
}
export async function handle(request, { env = process.env, fetchImpl = fetch, now = Date.now } = {}) {
  if (!["GET", "POST"].includes(request.method)) return json({error: "Methode nicht erlaubt."}, 405, {allow: "GET, POST"});
  const url = env.UPSTASH_REDIS_REST_URL || env.KV_REST_API_URL || env.dienstbeginn_database_KV_REST_API_URL;
  const token = env.UPSTASH_REDIS_REST_TOKEN || env.KV_REST_API_TOKEN || env.dienstbeginn_database_KV_REST_API_TOKEN;
  async function redis(command) {
    if (!url || !token || new URL(url).protocol !== "https:") throw new Error("Invalid Redis configuration");
    const response = await fetchImpl(url, {
      method: "POST", headers: {authorization: "Bearer " + token, "content-type": "application/json"},
      body: JSON.stringify(command), signal: AbortSignal.timeout(5000)
    });
    if (!response.ok) throw new Error("Redis request failed");
    const payload = await response.json();
    if (payload.error) throw new Error("Redis command failed");
    return payload.result;
  }
  try {
    if (request.method === "GET") {
      if (!url && !token) return json({storage: "local", entries: []});
      const saved = await redis(["GET", KEY]);
      const entries = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(entries)) throw new Error("Invalid leaderboard");
      return json({storage: "shared", entries});
    }
    const origin = request.headers.get("origin");
    if ((origin && origin !== new URL(request.url).origin) || request.headers.get("sec-fetch-site") === "cross-site") {
      return json({error: "Diese Eintragung ist nicht erlaubt."}, 403);
    }
    if (request.headers.get("x-dienstbeginn-game") !== "nato-v1") return json({error: "Ungültige Spielanfrage."}, 400);
    if (Number(request.headers.get("content-length")) > LIMIT) return json({error: "Die Eingabe ist zu groß."}, 413);
    const body = await request.text();
    if (Buffer.byteLength(body) > LIMIT) return json({error: "Die Eingabe ist zu groß."}, 413);
    const data = JSON.parse(body);
    if (!data || typeof data !== "object" || Array.isArray(data)) return json({error: "Ungültige Eingabe."}, 400);
    const action = data.action || "save";
    if (!["start", "answer", "save"].includes(action)) return json({error:"Ungültige Spielanfrage."},400);
    if (action !== "start" && (typeof data.sessionId !== "string" || !/^[a-f0-9-]{36}$/.test(data.sessionId))) {
      return json({error:"Bitte starte eine neue Runde, um dein Ergebnis einzutragen."},400);
    }
    const name = typeof data.name === "string" ? data.name.normalize("NFKC").trim().replace(/\s+/g," ") : "";
    if (action === "save" && (name.length < 2 || name.length > 18 || !/^[\p{L}\p{N}][\p{L}\p{N} ._-]*$/u.test(name))) {
      return json({error:"Bitte nutze einen gültigen Namen mit 2 bis 18 Zeichen."},400);
    }
    if (action === "answer" && (!Number.isInteger(data.index) || data.index < 0 || data.index > 25 || typeof data.word !== "string" || data.word.length > 30)) {
      return json({error:"Ungültige Antwort."},400);
    }
    if (!url && !token) return json({error:"Die gemeinsame Bestenliste ist noch nicht eingerichtet.",storage:"local"},503);
    // Vercel supplies this header. Never use a client-supplied identifier for the rate limit.
    const ip = request.headers.get("x-vercel-forwarded-for") || "unknown";
    const bucket = createHmac("sha256",token).update(ip).digest("hex").slice(0,32);
    const requests = Number(await redis(["EVAL",RATE,"1","dienstbeginn:nato-rate:v2:"+bucket+":"+(action === "start" ? "start" : "write")]));
    if (requests > (action === "start" ? 30 : 900)) return json({error:"Zu viele Spielanfragen. Bitte versuche es in einigen Minuten erneut."},429,{"retry-after":"600"});
    const timestamp = now();
    if (action === "start") {
      const order = WORDS.map((word,index)=>[String.fromCharCode(65+index),word]);
      for(let i=order.length-1;i>0;i--){const j=randomInt(i+1);[order[i],order[j]]=[order[j],order[i]];}
      const sessionId = randomUUID();
      await redis(["SET",SESSION_PREFIX+sessionId,JSON.stringify({order,index:0,perfect:true,startedAt:timestamp}),"EX",3600,"NX"]);
      return json({sessionId,letters:order.map(x=>x[0]),storage:"shared"},201);
    }
    const key = SESSION_PREFIX+data.sessionId;
    const raw = await redis(["GET",key]);
    if (!raw) return json({error:"Diese Runde ist abgelaufen oder wurde bereits eingetragen. Bitte starte neu."},409);
    const session = JSON.parse(raw);
    if (timestamp-session.startedAt > 3600000) return json({error:"Diese Runde ist abgelaufen. Bitte starte neu."},409);
    if (action === "answer") {
      if (session.index !== data.index || session.index >= 26) return json({error:"Die Antwort gehört nicht zur aktuellen Frage. Bitte starte neu."},409);
      const correct = data.word === session.order[session.index][1];
      session.perfect = session.perfect && correct;
      session.index++;
      if (session.index === 26) session.durationMs = timestamp-session.startedAt;
      const updated = await redis(["EVAL",UPDATE,"1",key,raw,JSON.stringify(session)]);
      if (Number(updated) !== 1) return json({error:"Die Runde wurde inzwischen geändert. Bitte starte neu."},409);
      return json({correct,complete:session.index===26,verified:session.index===26 && session.perfect && session.durationMs>=3000,durationMs:session.durationMs,storage:"shared"});
    }
    if (session.index !== 26 || !session.perfect || !Number.isInteger(session.durationMs) || session.durationMs<3000 || session.durationMs>3600000) {
      return json({error:"Nur eine vollständig und fehlerfrei gespielte Runde kann eingetragen werden."},400);
    }
    const entry = {id:randomUUID(),displayName:name,score:26,durationMs:session.durationMs,createdAt:new Date(timestamp).toISOString()};
    const result = JSON.parse(await redis(["EVAL",SAVE,"2",KEY,key,JSON.stringify(entry),raw]));
    if (result.invalid) return json({error:"Diese Runde wurde bereits eingetragen. Bitte starte neu."},409);
    if (!Array.isArray(result.entries)) result.entries=[];
    return json({...result,storage:"shared"},result.accepted?201:409);
  } catch (error) {
    if (error instanceof SyntaxError) return json({error: "Ungültige Eingabe."}, 400);
    return json({error: "Die gemeinsame Bestenliste ist gerade nicht erreichbar."}, 503);
  }
}
export default async function handler(req, res) {
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += bytes.length;
    if (size > LIMIT) {
      res.writeHead(413, {"content-type": "application/json", "cache-control": "no-store"});
      res.end(JSON.stringify({error: "Die Eingabe ist zu groß."}));
      return;
    }
    chunks.push(bytes);
  }
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
  }
  const protocol = req.headers["x-forwarded-proto"] === "http" ? "http" : "https";
  const request = new Request(protocol + "://" + req.headers.host + req.url, {
    method: req.method, headers,
    ...(!["GET", "HEAD"].includes(req.method) ? {body: Buffer.concat(chunks)} : {})
  });
  const response = await handle(request);
  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(await response.text());
}
