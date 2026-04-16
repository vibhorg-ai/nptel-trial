import { Question, QuestionOption, QuizSession, QuizAttempt } from "./types";

export function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Returns a copy of the question with options shuffled and IDs reassigned.
 * Uses a deterministic seed so the same question always gets the same
 * shuffle within a session, but different from the original "always a" order.
 * Pass a sessionSalt (e.g. Date.now()) for per-session variation.
 */
export function shuffleQuestionOptions(
  q: Question,
  sessionSalt: number = 0
): Question {
  const seed = hashCode(q.id) + sessionSalt;
  const shuffled = seededShuffle(q.options, seed);
  const n = shuffled.length;
  const ids = ["a", "b", "c", "d", "e", "f"].slice(0, n);

  const correctIdx = shuffled.findIndex((o) => o.id === q.correctAnswer);
  const newCorrectAnswer =
    correctIdx >= 0 && correctIdx < ids.length
      ? ids[correctIdx]
      : q.correctAnswer;

  const newOptions: QuestionOption[] = shuffled.map((opt, i) => ({
    id: ids[i],
    text: opt.text,
  }));

  return { ...q, options: newOptions, correctAnswer: newCorrectAnswer };
}

export function createSession(
  mode: "practice" | "review" | "mock",
  week: number | null
): QuizSession {
  return {
    id: `${mode}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    mode,
    week,
    startedAt: new Date().toISOString(),
    completedAt: null,
    attempts: [],
    score: 0,
    total: 0,
  };
}

export function getQuestionsForWeek(
  allQuestions: Question[],
  week: number
): Question[] {
  return allQuestions.filter((q) => q.week === week);
}

type DifficultyBucket = Question["difficulty"];

function countByDifficulty(qs: Question[]): Record<DifficultyBucket, number> {
  const c: Record<DifficultyBucket, number> = { easy: 0, medium: 0, hard: 0 };
  for (const q of qs) c[q.difficulty] += 1;
  return c;
}

function mockDifficultyTargets(n: number): Record<DifficultyBucket, number> {
  if (n <= 0) return { easy: 0, medium: 0, hard: 0 };
  let easy = Math.round(0.3 * n);
  let medium = Math.round(0.5 * n);
  let hard = n - easy - medium;
  while (hard < 0) {
    medium -= 1;
    hard += 1;
  }
  while (medium < 0) {
    easy -= 1;
    medium += 1;
  }
  return { easy, medium, hard };
}

export function getStratifiedMock(
  allQuestions: Question[],
  count: number = 30,
  weakQuestionIds: string[] = []
): Question[] {
  const byId = new Map(allQuestions.map((q) => [q.id, q]));
  const selected = new Map<string, Question>();

  const byWeek = new Map<number, Question[]>();
  for (const q of allQuestions) {
    const arr = byWeek.get(q.week) ?? [];
    arr.push(q);
    byWeek.set(q.week, arr);
  }

  function addFromPool(pool: Question[], n: number): void {
    const sh = shuffleArray(pool.filter((q) => !selected.has(q.id)));
    for (let i = 0; i < Math.min(n, sh.length, count - selected.size); i++) {
      const q = sh[i];
      selected.set(q.id, q);
    }
  }

  const weekOrder = shuffleArray(
    Array.from({ length: 12 }, (_, i) => i + 1)
  );

  for (let pass = 0; pass < 2; pass++) {
    if (selected.size >= count) break;
    for (const week of weekOrder) {
      if (selected.size >= count) break;
      const pool = byWeek.get(week) ?? [];
      const fromWeek = [...selected.values()].filter((q) => q.week === week).length;
      if (fromWeek >= 2) continue;
      const cap = 2 - fromWeek;
      addFromPool(pool, cap);
    }
  }

  const seenWeak = new Set<string>();
  for (const id of weakQuestionIds) {
    if (selected.size >= count) break;
    if (seenWeak.has(id)) continue;
    seenWeak.add(id);
    const q = byId.get(id);
    if (!q || selected.has(id)) continue;
    selected.set(id, q);
  }

  const targets = mockDifficultyTargets(count);
  const cur = countByDifficulty([...selected.values()]);
  let needEasy = Math.max(0, targets.easy - cur.easy);
  let needMed = Math.max(0, targets.medium - cur.medium);
  let needHard = Math.max(0, targets.hard - cur.hard);

  const pool = shuffleArray(
    allQuestions.filter((q) => !selected.has(q.id))
  );

  while (selected.size < count && pool.length > 0) {
    let progressed = false;
    if (needEasy > 0) {
      const idx = pool.findIndex((q) => q.difficulty === "easy");
      if (idx >= 0) {
        const [q] = pool.splice(idx, 1);
        selected.set(q.id, q);
        needEasy -= 1;
        progressed = true;
      }
    }
    if (!progressed && needMed > 0) {
      const idx = pool.findIndex((q) => q.difficulty === "medium");
      if (idx >= 0) {
        const [q] = pool.splice(idx, 1);
        selected.set(q.id, q);
        needMed -= 1;
        progressed = true;
      }
    }
    if (!progressed && needHard > 0) {
      const idx = pool.findIndex((q) => q.difficulty === "hard");
      if (idx >= 0) {
        const [q] = pool.splice(idx, 1);
        selected.set(q.id, q);
        needHard -= 1;
        progressed = true;
      }
    }
    if (!progressed) {
      const q = pool.pop()!;
      selected.set(q.id, q);
    }
  }

  const out = shuffleArray([...selected.values()]);
  return out.slice(0, Math.min(count, out.length));
}

export function getQuestionsById(
  allQuestions: Question[],
  ids: string[]
): Question[] {
  const idSet = new Set(ids);
  return allQuestions.filter((q) => idSet.has(q.id));
}

export function calculateScore(attempts: QuizAttempt[]): number {
  return attempts.filter((a) => a.isCorrect).length;
}

export function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
