// Remember only a server-confirmed storage mode; shared outages never become local.
const NATO_LOCAL_KEY = "dienstbeginn:nato-leaderboard:local:v1";
const NATO_MODE_KEY = "dienstbeginn:nato-leaderboard:storage:v1";
window.natoLeaderboardStorage = "shared";
try {
  const mode = localStorage.getItem(NATO_MODE_KEY);
  // Adopt local records created before storage-mode persistence was introduced.
  const legacy = mode === null && localStorage.getItem(NATO_LOCAL_KEY);
  if (mode === "local" || (legacy && Array.isArray(JSON.parse(legacy)))) {
    window.natoLeaderboardStorage = "local";
  }
} catch (_) {
  // The normal read/write path reports unavailable browser storage to the user.
}
window.requestNatoLeaderboard = async function(url, options = {}) {
  const key = NATO_LOCAL_KEY;
  const method = options.method || "GET";
  if (window.natoLeaderboardStorage !== "local" || method === "GET") {
    let response;
    try {
      response = await fetch(url, options);
    } catch (error) {
      if (window.natoLeaderboardStorage !== "local") throw error;
      // A confirmed local leaderboard remains readable after an offline reload.
    }
    if (response) {
      const payload = await response.clone().json();
      if (response.ok && ["local", "shared"].includes(payload.storage)) {
        window.natoLeaderboardStorage = payload.storage;
        try { localStorage.setItem(NATO_MODE_KEY, payload.storage); } catch (_) {}
      }
      if (window.natoLeaderboardStorage !== "local" || !response.ok) return response;
    }
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
