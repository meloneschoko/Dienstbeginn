import { env } from "cloudflare:workers";

export type NatoLeaderboardEntry = {
  id: number;
  displayName: string;
  score: number;
  durationMs: number;
  createdAt: string;
};

const TOP_LIMIT = 10;

function getBinding() {
  if (!env.DB) {
    throw new Error("Die Bestenlisten-Datenbank ist nicht verfügbar.");
  }
  return env.DB;
}

export async function listNatoLeaderboard(): Promise<NatoLeaderboardEntry[]> {
  const result = await getBinding()
    .prepare(
      `SELECT
        id,
        display_name AS displayName,
        score,
        duration_ms AS durationMs,
        created_at AS createdAt
      FROM nato_leaderboard
      WHERE score = 26
      ORDER BY score DESC, duration_ms ASC, created_at ASC, id ASC
      LIMIT ?1`,
    )
    .bind(TOP_LIMIT)
    .all<NatoLeaderboardEntry>();

  return result.results;
}

export function wouldReachLeaderboard(
  entries: NatoLeaderboardEntry[],
  score: number,
  durationMs: number,
) {
  if (entries.length < TOP_LIMIT) return true;
  const last = entries[entries.length - 1];
  return score > last.score || (score === last.score && durationMs < last.durationMs);
}

export async function addNatoLeaderboardEntry(
  displayName: string,
  score: number,
  durationMs: number,
) {
  const db = getBinding();
  const before = await listNatoLeaderboard();
  if (!wouldReachLeaderboard(before, score, durationMs)) {
    return { accepted: false, rank: null, entries: before };
  }

  const inserted = await db
    .prepare(
      `INSERT INTO nato_leaderboard (display_name, score, duration_ms)
      VALUES (?1, ?2, ?3)`,
    )
    .bind(displayName, score, durationMs)
    .run();
  const insertedId = Number(inserted.meta.last_row_id);

  await db
    .prepare(
      `DELETE FROM nato_leaderboard
      WHERE id NOT IN (
        SELECT id
        FROM nato_leaderboard
        ORDER BY score DESC, duration_ms ASC, created_at ASC, id ASC
        LIMIT ?1
      )`,
    )
    .bind(TOP_LIMIT)
    .run();

  const entries = await listNatoLeaderboard();
  const index = entries.findIndex((entry) => entry.id === insertedId);
  return {
    accepted: index >= 0,
    rank: index >= 0 ? index + 1 : null,
    entries,
  };
}
