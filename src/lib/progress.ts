import { UserProgress, QuizSession, QuizAttempt } from "./types";

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

export function saveSession(session: QuizSession): UserProgress {
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
  }

  saveProgress(progress);
  return progress;
}

export function getMissedQuestionIds(): string[] {
  const progress = loadProgress();
  const correctSet = new Set<string>();
  const attemptedSet = new Set<string>();

  for (const session of progress.sessions) {
    for (const attempt of session.attempts) {
      attemptedSet.add(attempt.questionId);
      if (attempt.isCorrect) {
        correctSet.add(attempt.questionId);
      }
    }
  }

  return Array.from(attemptedSet).filter((id) => !correctSet.has(id));
}

export function getOverallStats(progress: UserProgress) {
  let totalCorrect = 0;
  let totalQuestions = 0;
  let totalSessions = progress.sessions.length;

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
