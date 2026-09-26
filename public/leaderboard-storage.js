// Local records are used only when the server explicitly reports no shared database.
window.natoLeaderboardStorage = "shared";
window.requestNatoLeaderboard = async function(url, options = {}) {
  const key = "dienstbeginn:nato-leaderboard:local:v1";
  if (window.natoLeaderboardStorage !== "local" || !options.method || options.method === "GET") {
    const response = await fetch(url, options);
    const payload = await response.clone().json();
    if (response.ok && payload.storage === "local") window.natoLeaderboardStorage = "local";
    else if (response.ok && payload.storage === "shared") window.natoLeaderboardStorage = "shared";
    if (window.natoLeaderboardStorage !== "local" || !response.ok) return response;
  }
  let entries;
  try {
    entries = JSON.parse(localStorage.getItem(key) || "[]");
    if (!Array.isArray(entries)) entries = [];
    entries = entries.filter(e => e && typeof e.displayName === "string" && e.score === 26 && Number.isInteger(e.durationMs) && e.durationMs >= 3000 && e.durationMs <= 3600000);
  } catch (_) {
    throw new Error("Die lokale Bestenliste kann nicht gelesen werden. Bitte erlaube den Browserspeicher.");
  }
  entries.sort((a, b) => a.durationMs - b.durationMs || String(a.createdAt).localeCompare(String(b.createdAt)));
  entries = entries.slice(0, 10);
  if (options.method !== "POST") return Response.json({entries, storage: "local"});
  const data = JSON.parse(options.body);
  const displayName = typeof data.name === "string" ? data.name.normalize("NFKC").trim().replace(/\s+/g, " ") : "";
  if (!/^[\p{L}\p{N}][\p{L}\p{N} ._-]{1,17}$/u.test(displayName) || data.score !== 26 || data.firstPassPerfect !== true || !Number.isInteger(data.durationMs) || data.durationMs < 3000 || data.durationMs > 3600000) {
    return Response.json({error: "Bitte prüfe den Namen und das Spielergebnis."}, {status: 400});
  }
  if (entries.length === 10 && data.durationMs >= entries[9].durationMs) {
    return Response.json({accepted: false, entries}, {status: 409});
  }
  const entry = {id: crypto.randomUUID(), displayName, score: 26, durationMs: data.durationMs, createdAt: new Date().toISOString()};
  entries.push(entry);
  entries.sort((a, b) => a.durationMs - b.durationMs || String(a.createdAt).localeCompare(String(b.createdAt)));
  entries = entries.slice(0, 10);
  try { localStorage.setItem(key, JSON.stringify(entries)); }
  catch (_) { throw new Error("Das Ergebnis konnte auf diesem Gerät nicht gespeichert werden."); }
  return Response.json({accepted: true, rank: entries.findIndex(e => e.id === entry.id) + 1, entries, storage: "local"}, {status: 201});
};
