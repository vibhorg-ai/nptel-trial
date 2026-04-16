export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  week: number;
  topic: string;
  sourceType: "assignment" | "mock" | "revision" | "past-question";
  questionText: string;
  options: QuestionOption[];
  correctAnswer: string; // option id
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
}

export interface WeekStudyContent {
  week: number;
  title: string;
  summary: string;
  keyConcepts: string[];
  importantTerms: Record<string, string>;
  commonConfusions: string[];
  linkedQuestionIds: string[];
}

export interface QuizAttempt {
  questionId: string;
  selectedAnswer: string | null;
  isCorrect: boolean;
  timeSpentMs: number;
}

export interface QuizSession {
  id: string;
  mode: "practice" | "review" | "mock";
  week: number | null; // null for mixed/mock
  startedAt: string;
  completedAt: string | null;
  attempts: QuizAttempt[];
  score: number;
  total: number;
}

export interface WeekProgress {
  week: number;
  totalQuestions: number;
  correctAnswers: number;
  attempts: number;
  lastAttemptAt: string | null;
  weakTopics: string[];
}

export interface UserProgress {
  sessions: QuizSession[];
  weekProgress: Record<number, WeekProgress>;
  bookmarkedQuestions: string[];
  lastActiveWeek: number | null;
}
