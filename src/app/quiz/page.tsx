"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { questions as allQuestions } from "@/data/questions";
import { questions2025 } from "@/data/questions-2025";
import { weeks } from "@/data/weeks";
import {
  getQuestionsForWeek,
  getQuestionsById,
  shuffleArray,
  shuffleQuestionOptions,
} from "@/lib/quiz";
import { getMissedQuestionIds, getRecentWeakQuestionIds } from "@/lib/progress";
import { QuizEngine } from "@/components/quiz-engine";
import { QuizResults } from "@/components/quiz-results";
import type { Question, QuizSession } from "@/lib/types";

function QuizContent() {
  const searchParams = useSearchParams();
  const weekParam = searchParams.get("week");
  const yearParam = searchParams.get("year");
  const modeParam = searchParams.get("mode") ?? "practice";
  const questionBank = yearParam === "2025" ? questions2025 : allQuestions;

  const autoStart = weekParam || modeParam === "review";
  const [phase, setPhase] = useState<"select" | "playing" | "results">(
    autoStart ? "playing" : "select"
  );
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(() => {
    if (modeParam === "review" && !weekParam) {
      const weakIds = getRecentWeakQuestionIds(questionBank);
      const missedIds = getMissedQuestionIds().filter((id) =>
        questionBank.some((q) => q.id === id)
      );
      const idSet = new Set([...weakIds, ...missedIds]);
      const qs = questionBank.filter((q) => idSet.has(q.id));
      return shuffleArray(qs).map((q) => shuffleQuestionOptions(q, Date.now()));
    }
    if (weekParam) {
      const weekNum = parseInt(weekParam, 10);
      const bank =
        typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).get("year") === "2025"
          ? questions2025
          : allQuestions;
      return shuffleArray(getQuestionsForWeek(bank, weekNum)).map((q) =>
        shuffleQuestionOptions(q, Date.now())
      );
    }
    return [];
  });
  const [activeWeek, setActiveWeek] = useState<number | null>(
    weekParam ? parseInt(weekParam, 10) : null
  );
  const [activeMode, setActiveMode] = useState<"practice" | "review">(
    modeParam === "review" ? "review" : "practice"
  );
  const [session, setSession] = useState<QuizSession | null>(null);

  const startQuiz = useCallback(
    (weekNum: number | null, mode: "practice" | "review") => {
      let qs: Question[];
      if (mode === "review") {
        const weakIds = getRecentWeakQuestionIds(questionBank);
        const missedIds = getMissedQuestionIds().filter((id) =>
          questionBank.some((q) => q.id === id)
        );
        const idSet = new Set([...weakIds, ...missedIds]);
        qs = questionBank.filter((q) => idSet.has(q.id));
        if (weekNum !== null) qs = qs.filter((q) => q.week === weekNum);
      } else if (weekNum !== null) {
        qs = getQuestionsForWeek(questionBank, weekNum);
      } else {
        qs = [...questionBank];
      }
      const salt = Date.now();
      qs = shuffleArray(qs).map((q) => shuffleQuestionOptions(q, salt));
      setActiveQuestions(qs);
      setActiveWeek(weekNum);
      setActiveMode(mode);
      setPhase("playing");
      setSession(null);
    },
    [questionBank]
  );

  const handleComplete = useCallback((s: QuizSession) => {
    setSession(s);
    setPhase("results");
  }, []);

  const handleRetryMissed = useCallback(() => {
    if (!session) return;
    const missedIds = session.attempts
      .filter((a) => !a.isCorrect)
      .map((a) => a.questionId);
    const salt = Date.now();
    const qs = shuffleArray(getQuestionsById(questionBank, missedIds)).map(
      (q) => shuffleQuestionOptions(q, salt)
    );
    setActiveQuestions(qs);
    setPhase("playing");
    setSession(null);
  }, [session, questionBank]);

  const handleRetryAll = useCallback(() => {
    startQuiz(activeWeek, activeMode);
  }, [startQuiz, activeWeek, activeMode]);

  if (phase === "select") {
    return (
      <QuizSelector questionBank={questionBank} yearParam={yearParam} onStart={startQuiz} />
    );
  }

  if (phase === "results" && session) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <QuizResults
          session={session}
          questions={activeQuestions}
          onRetryMissed={handleRetryMissed}
          onRetryAll={handleRetryAll}
        />
      </div>
    );
  }

  if (activeQuestions.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="mb-4 text-lg font-medium">No questions available</p>
        <p className="mb-6 text-muted-foreground">
          {activeMode === "review"
            ? "You haven't missed any questions yet. Try practice mode first!"
            : "No questions found for this selection."}
        </p>
        <button
          onClick={() => setPhase("select")}
          className="rounded-xl bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
        >
          Back to selection
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <button
        onClick={() => setPhase("select")}
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>
      <QuizEngine
        questions={activeQuestions}
        mode={activeMode}
        week={activeWeek}
        onComplete={handleComplete}
      />
    </div>
  );
}

function QuizSelector({
  questionBank,
  yearParam,
  onStart,
}: {
  questionBank: Question[];
  yearParam: string | null;
  onStart: (week: number | null, mode: "practice" | "review") => void;
}) {
  const [missedCount, setMissedCount] = useState(0);

  useEffect(() => {
    const missed = getMissedQuestionIds().filter((id) =>
      questionBank.some((q) => q.id === id)
    );
    setMissedCount(missed.length);
  }, [questionBank]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Home
      </Link>
      <h1 className="mb-2 text-2xl font-bold">Practice Quiz</h1>
      <p className="mb-8 text-muted-foreground">
        {yearParam === "2025"
          ? "2025 NPTEL session assignment bank (Jan 2025 export)."
          : "Choose a week to practice or review your missed questions."}
      </p>

      {missedCount > 0 && (
        <button
          onClick={() => onStart(null, "review")}
          className="mb-6 w-full rounded-xl border border-error/30 bg-error/5 p-5 text-left transition-colors hover:border-error"
        >
          <p className="font-semibold text-error">Review Missed Questions</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {missedCount} questions you got wrong in this question bank
          </p>
        </button>
      )}

      <button
        onClick={() => onStart(null, "practice")}
        className="mb-6 w-full rounded-xl border border-accent/30 bg-accent/5 p-5 text-left transition-colors hover:border-accent"
      >
        <p className="font-semibold text-accent">All Questions</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Practice all {questionBank.length} questions in this bank
        </p>
      </button>

      <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        By Week
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {weeks
          .filter((w) => questionBank.some((q) => q.week === w.week))
          .map((w) => {
            const count = questionBank.filter((q) => q.week === w.week).length;
            return (
              <button
                key={w.week}
                onClick={() => onStart(w.week, "practice")}
                className="rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {w.week}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{w.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {count} questions
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-64 items-center justify-center text-muted-foreground">
          Loading quiz...
        </div>
      }
    >
      <QuizContent />
    </Suspense>
  );
}
