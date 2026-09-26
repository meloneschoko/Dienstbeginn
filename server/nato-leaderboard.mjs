import { randomUUID } from "node:crypto";

const KEY = "dienstbeginn:nato-leaderboard:v1";
const LIMIT = 2048;
const SAVE = `
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

function json(value, status = 200, extra = {}) {
  return Response.json(value, { status, headers: { "cache-control": "no-store", "x-content-type-options": "nosniff", ...extra } });
}
export async function handle(request, { env = process.env, fetchImpl = fetch } = {}) {
  if (!["GET", "POST"].includes(request.method)) return json({error: "Methode nicht erlaubt."}, 405, {allow: "GET, POST"});
  const url = env.UPSTASH_REDIS_REST_URL || env.KV_REST_API_URL;
  const token = env.UPSTASH_REDIS_REST_TOKEN || env.KV_REST_API_TOKEN;
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
    const name = typeof data.name === "string" ? data.name.normalize("NFKC").trim().replace(/\s+/g, " ") : "";
    if (name.length < 2 || name.length > 18 || !/^[\p{L}\p{N}][\p{L}\p{N} ._-]*$/u.test(name)) return json({error: "Bitte nutze einen gültigen Namen mit 2 bis 18 Zeichen."}, 400);
    if (data.score !== 26 || data.firstPassPerfect !== true || !Number.isInteger(data.durationMs) || data.durationMs < 3000 || data.durationMs > 3600000) {
      return json({error: "Dieses Ergebnis kann nicht eingetragen werden."}, 400);
    }
    if (!url && !token) return json({error: "Die gemeinsame Bestenliste ist noch nicht eingerichtet.", storage: "local"}, 503);
    const entry = {id: randomUUID(), displayName: name, score: 26, durationMs: data.durationMs, createdAt: new Date().toISOString()};
    const result = JSON.parse(await redis(["EVAL", SAVE, "1", KEY, JSON.stringify(entry)]));
    // Redis Lua encodes an empty table as {}, whereas the browser requires an array.
    if (!Array.isArray(result.entries)) result.entries = [];
    return json({...result, storage: "shared"}, result.accepted ? 201 : 409);
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
