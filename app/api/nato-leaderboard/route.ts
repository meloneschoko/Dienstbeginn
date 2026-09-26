import {
  addNatoLeaderboardEntry,
  listNatoLeaderboard,
} from "../../../db/nato-leaderboard";

export const dynamic = "force-dynamic";

const MAX_NAME_LENGTH = 18;
const MAX_BODY_LENGTH = 2_048;
const MIN_DURATION_MS = 3_000;
const MAX_DURATION_MS = 3_600_000;
const SAFE_NAME = /^[\p{L}\p{N}][\p{L}\p{N} ._-]*$/u;

function json(payload: unknown, status = 200) {
  return Response.json(payload, {
    status,
    headers: {
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });
}

function normalizeName(value: unknown) {
  if (typeof value !== "string") return null;
  const name = value.normalize("NFKC").trim().replace(/\s+/g, " ");
  if (name.length < 2 || name.length > MAX_NAME_LENGTH || !SAFE_NAME.test(name)) {
    return null;
  }
  return name;
}

export async function GET() {
  try {
    return json({ entries: await listNatoLeaderboard() });
  } catch (error) {
    console.error("NATO leaderboard GET failed", error);
    return json({ error: "Die Bestenliste ist gerade nicht erreichbar." }, 503);
  }
}

export async function POST(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const origin = request.headers.get("origin");
    const fetchSite = request.headers.get("sec-fetch-site");
    if ((origin && origin !== requestUrl.origin) || fetchSite === "cross-site") {
      return json({ error: "Diese Eintragung ist nicht erlaubt." }, 403);
    }
    if (request.headers.get("x-dienstbeginn-game") !== "nato-v1") {
      return json({ error: "Ungültige Spielanfrage." }, 400);
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_LENGTH) {
      return json({ error: "Die Eingabe ist zu groß." }, 413);
    }
    const body = await request.text();
    if (body.length > MAX_BODY_LENGTH) {
      return json({ error: "Die Eingabe ist zu groß." }, 413);
    }

    const payload = JSON.parse(body) as {
      name?: unknown;
      score?: unknown;
      durationMs?: unknown;
      firstPassPerfect?: unknown;
    };
    const displayName = normalizeName(payload.name);
    const score = Number(payload.score);
    const durationMs = Number(payload.durationMs);
    if (!displayName) {
      return json(
        { error: "Bitte nutze 2 bis 18 Buchstaben, Zahlen, Leerzeichen, Punkt, Unterstrich oder Bindestrich." },
        400,
      );
    }
    if (score !== 26 || payload.firstPassPerfect !== true) {
      return json({ error: "Dieses Ergebnis kann nicht eingetragen werden." }, 400);
    }
    if (
      !Number.isInteger(durationMs) ||
      durationMs < MIN_DURATION_MS ||
      durationMs > MAX_DURATION_MS
    ) {
      return json({ error: "Ungültige Spielzeit." }, 400);
    }

    const result = await addNatoLeaderboardEntry(displayName, score, durationMs);
    return json(result, result.accepted ? 201 : 409);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return json({ error: "Ungültige Eingabe." }, 400);
    }
    console.error("NATO leaderboard POST failed", error);
    return json({ error: "Der Eintrag konnte gerade nicht gespeichert werden." }, 503);
  }
}
