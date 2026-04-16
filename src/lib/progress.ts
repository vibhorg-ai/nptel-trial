import { UserProgress, Question, QuizSession } from "./types";

const STORAGE_KEY = "nptel-ac-progress";

function getDefaultProgress(): UserProgress {
  return {
    sessions: [],
    weekProgress: {},
    bookmarkedQuestions: [],
    lastActiveWeek: null,
  };
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return getDefaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    return JSON.parse(raw) as UserProgress;
  } catch {
    return getDefaultProgress();
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function saveSession(
  session: QuizSession,
  questionLookup?: Map<string, Question>
): UserProgress {
  const progress = loadProgress();
  progress.sessions.push(session);

  if (session.week !== null) {
    progress.lastActiveWeek = session.week;
    const wp = progress.weekProgress[session.week] ?? {
      week: session.week,
      totalQuestions: 0,
      correctAnswers: 0,
      attempts: 0,
      lastAttemptAt: null,
      weakTopics: [],
    };

    wp.attempts += 1;
    wp.totalQuestions += session.total;
    wp.correctAnswers += session.score;
    wp.lastAttemptAt = session.completedAt;
    progress.weekProgress[session.week] = wp;
  } else if (questionLookup) {
    const byWeek = new Map<number, { correct: number; total: number }>();
    for (const att of session.attempts) {
      const q = questionLookup.get(att.questionId);
      if (!q) continue;
      const cur = byWeek.get(q.week) ?? { correct: 0, total: 0 };
      cur.total += 1;
      if (att.isCorrect) cur.correct += 1;
      byWeek.set(q.week, cur);
    }
    for (const [week, counts] of byWeek) {
      const wp = progress.weekProgress[week] ?? {
        week,
        totalQuestions: 0,
        correctAnswers: 0,
        attempts: 0,
        lastAttemptAt: null,
        weakTopics: [],
      };
      wp.attempts += 1;
      wp.totalQuestions += counts.total;
      wp.correctAnswers += counts.correct;
      wp.lastAttemptAt = session.completedAt;
      progress.weekProgress[week] = wp;
    }
  }

  saveProgress(progress);
  return progress;
}

function chronologicalAttemptsByQuestion(
  progress: UserProgress
): Map<string, boolean[]> {
  const byQ = new Map<string, boolean[]>();
  for (const session of progress.sessions) {
    for (const attempt of session.attempts) {
      const arr = byQ.get(attempt.questionId) ?? [];
      arr.push(attempt.isCorrect);
      byQ.set(attempt.questionId, arr);
    }
  }
  return byQ;
}

function lastN<T>(arr: T[], n: number): T[] {
  if (arr.length <= n) return arr;
  return arr.slice(-n);
}

export function getMissedQuestionIds(): string[] {
  const progress = loadProgress();
  const byQ = chronologicalAttemptsByQuestion(progress);
  const missed: string[] = [];

  for (const [id, history] of byQ) {
    const recent = lastN(history, 3);
    if (recent.length === 0) continue;
    const wrong = recent.filter((c) => !c).length;
    if (wrong > recent.length / 2) missed.push(id);
  }

  return missed;
}

export function getRecentWeakQuestionIds(allQuestions: Question[]): string[] {
  const idSet = new Set(allQuestions.map((q) => q.id));
  const progress = loadProgress();
  const byQ = chronologicalAttemptsByQuestion(progress);
  const rows: { id: string; acc: number }[] = [];

  for (const [id, history] of byQ) {
    if (!idSet.has(id)) continue;
    const recent = lastN(history, 3);
    if (recent.length === 0) continue;
    const correct = recent.filter(Boolean).length;
    const acc = correct / recent.length;
    if (acc < 0.5) rows.push({ id, acc });
  }

  rows.sort((a, b) => a.acc - b.acc);
  return rows.map((r) => r.id);
}

export function getWeekCoverage(
  allQuestions: Question[]
): { week: number; attempted: number; total: number; pct: number }[] {
  const progress = loadProgress();
  const byId = new Map(allQuestions.map((q) => [q.id, q]));
  const touchedByWeek = new Map<number, Set<string>>();

  for (const session of progress.sessions) {
    for (const attempt of session.attempts) {
      const q = byId.get(attempt.questionId);
      if (!q) continue;
      let set = touchedByWeek.get(q.week);
      if (!set) {
        set = new Set();
        touchedByWeek.set(q.week, set);
      }
      set.add(attempt.questionId);
    }
  }

  const rows: { week: number; attempted: number; total: number; pct: number }[] = [];
  for (let week = 1; week <= 12; week++) {
    const total = allQuestions.filter((q) => q.week === week).length;
    const attempted = touchedByWeek.get(week)?.size ?? 0;
    const pct = total > 0 ? Math.round((attempted / total) * 100) : 0;
    rows.push({ week, attempted, total, pct });
  }
  return rows;
}

export type CramAction =
  | { type: "study"; week: number; title: string; reason: string }
  | { type: "practice"; week: number; title: string; reason: string }
  | { type: "fix-weak"; count: number; reason: string }
  | { type: "mock"; reason: string }
  | { type: "done"; reason: string };

export function getCramPlan(
  allQuestions: Question[],
  weekTitles: { week: number; title: string }[]
): CramAction[] {
  const titleForWeek = (week: number) =>
    weekTitles.find((w) => w.week === week)?.title ?? `Week ${week}`;

  const coverage = getWeekCoverage(allQuestions);
  const weakIds = getRecentWeakQuestionIds(allQuestions);
  const progress = loadProgress();
  const plan: CramAction[] = [];

  for (const row of coverage) {
    if (row.total === 0) continue;
    if (row.attempted === 0) {
      plan.push({
        type: "study",
        week: row.week,
        title: titleForWeek(row.week),
        reason: `Week ${row.week} has zero quiz attempts — skim the notes first so practice sticks.`,
      });
    }
  }

  for (const row of coverage) {
    if (row.total === 0) continue;
    if (row.pct < 50) {
      plan.push({
        type: "practice",
        week: row.week,
        title: titleForWeek(row.week),
        reason: `Week ${row.week} is under 50% question coverage (${row.pct}%) — drill more questions.`,
      });
    }
  }

  if (weakIds.length > 0) {
    plan.push({
      type: "fix-weak",
      count: weakIds.length,
      reason: `Recent attempts show ${weakIds.length} question${
        weakIds.length === 1 ? "" : "s"
      } you often miss — break the pattern before the mock.`,
    });
  }

  if (progress.sessions.length >= 1) {
    plan.push({
      type: "mock",
      reason: "Lock in retention with a timed mock that mixes every week.",
    });
  }

  const allCovered =
    coverage.filter((r) => r.total > 0).every((r) => r.pct >= 50) &&
    weakIds.length === 0;

  if (allCovered) {
    plan.push({
      type: "done",
      reason: "Coverage looks solid and weak spots are quiet — you are in good shape.",
    });
  }

  return plan;
}

export function getWeakTopics(
  allQuestions: Question[]
): { topic: string; week: number; correct: number; total: number; pct: number }[] {
  const byId = new Map(allQuestions.map((q) => [q.id, q]));
  const aggregates = new Map<
    string,
    { topic: string; week: number; correct: number; total: number }
  >();

  const progress = loadProgress();
  for (const session of progress.sessions) {
    for (const attempt of session.attempts) {
      const q = byId.get(attempt.questionId);
      if (!q) continue;
      const key = `${q.week}::${q.topic}`;
      const cur = aggregates.get(key) ?? {
        topic: q.topic,
        week: q.week,
        correct: 0,
        total: 0,
      };
      cur.total += 1;
      if (attempt.isCorrect) cur.correct += 1;
      aggregates.set(key, cur);
    }
  }

  const rows: {
    topic: string;
    week: number;
    correct: number;
    total: number;
    pct: number;
  }[] = [];

  for (const a of aggregates.values()) {
    if (a.total === 0) continue;
    const ratio = a.correct / a.total;
    if (ratio >= 0.5) continue;
    rows.push({
      ...a,
      pct: Math.round(ratio * 100),
    });
  }

  rows.sort((a, b) => a.pct - b.pct);
  return rows;
}

export function getOverallStats(progress: UserProgress) {
  let totalCorrect = 0;
  let totalQuestions = 0;
  const totalSessions = progress.sessions.length;

  for (const session of progress.sessions) {
    totalCorrect += session.score;
    totalQuestions += session.total;
  }

  return {
    totalCorrect,
    totalQuestions,
    totalSessions,
    accuracy: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0,
  };
}

export function estimatePassProbability(allQuestions: Question[]): {
  probability: number;
  breakdown: { week: number; accuracy: number; weight: number }[];
  recommendation: string;
} {
  const byId = new Map(allQuestions.map((q) => [q.id, q]));
  const progress = loadProgress();
  const perWeek = new Map<number, { correct: number; total: number }>();

  for (let week = 1; week <= 12; week++) {
    perWeek.set(week, { correct: 0, total: 0 });
  }

  for (const session of progress.sessions) {
    for (const attempt of session.attempts) {
      const q = byId.get(attempt.questionId);
      if (!q || q.week < 1 || q.week > 12) continue;
      const row = perWeek.get(q.week)!;
      row.total += 1;
      if (attempt.isCorrect) row.correct += 1;
    }
  }

  const weight = 1 / 12;
  let weightedSum = 0;
  const breakdown: { week: number; accuracy: number; weight: number }[] = [];

  for (let week = 1; week <= 12; week++) {
    const { correct, total } = perWeek.get(week)!;
    const accuracy = total === 0 ? 25 : Math.round((correct / total) * 100);
    weightedSum += accuracy * weight;
    breakdown.push({ week, accuracy, weight });
  }

  const probability = Math.min(100, Math.max(0, Math.round(weightedSum)));

  let recommendation: string;
  if (probability < 40) {
    recommendation = "Focus on untouched weeks first";
  } else if (probability < 60) {
    recommendation = "Keep practicing weak areas";
  } else if (probability < 80) {
    recommendation = "Looking good, take a mock to confirm";
  } else {
    recommendation = "You're well prepared";
  }

  return { probability, breakdown, recommendation };
}

export function toggleBookmark(questionId: string): UserProgress {
  const progress = loadProgress();
  const idx = progress.bookmarkedQuestions.indexOf(questionId);
  if (idx >= 0) {
    progress.bookmarkedQuestions.splice(idx, 1);
  } else {
    progress.bookmarkedQuestions.push(questionId);
  }
  saveProgress(progress);
  return progress;
}

export function exportProgress(): string {
  return JSON.stringify(loadProgress(), null, 2);
}

export function importProgress(json: string): boolean {
  try {
    const data = JSON.parse(json) as UserProgress;
    if (!data.sessions || !Array.isArray(data.sessions)) return false;
    saveProgress(data);
    return true;
  } catch {
    return false;
  }
}
