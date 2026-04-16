import { Question, QuizSession, QuizAttempt } from "./types";

export function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
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

export function getQuestionsForMock(
  allQuestions: Question[],
  count: number = 20
): Question[] {
  const shuffled = shuffleArray(allQuestions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
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
