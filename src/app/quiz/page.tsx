"use client";

import { useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { questions as allQuestions } from "@/data/questions";
import { weeks } from "@/data/weeks";
import {
  getQuestionsForWeek,
  getQuestionsById,
  shuffleArray,
} from "@/lib/quiz";
import { getMissedQuestionIds } from "@/lib/progress";
import { QuizEngine } from "@/components/quiz-engine";
import { QuizResults } from "@/components/quiz-results";
import type { Question, QuizSession } from "@/lib/types";

function QuizContent() {
  const searchParams = useSearchParams();
  const weekParam = searchParams.get("week");
  const modeParam = searchParams.get("mode") ?? "practice";

  const [phase, setPhase] = useState<"select" | "playing" | "results">(
    weekParam ? "playing" : "select"
  );
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(() => {
    if (weekParam) {
      const weekNum = parseInt(weekParam, 10);
      return shuffleArray(getQuestionsForWeek(allQuestions, weekNum));
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
        const missed = getMissedQuestionIds();
        qs = getQuestionsById(allQuestions, missed);
        if (weekNum !== null) qs = qs.filter((q) => q.week === weekNum);
      } else if (weekNum !== null) {
        qs = getQuestionsForWeek(allQuestions, weekNum);
      } else {
        qs = [...allQuestions];
      }
      qs = shuffleArray(qs);
      setActiveQuestions(qs);
      setActiveWeek(weekNum);
      setActiveMode(mode);
      setPhase("playing");
      setSession(null);
    },
    []
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
    const qs = shuffleArray(getQuestionsById(allQuestions, missedIds));
    setActiveQuestions(qs);
    setPhase("playing");
    setSession(null);
  }, [session]);

  const handleRetryAll = useCallback(() => {
    startQuiz(activeWeek, activeMode);
  }, [startQuiz, activeWeek, activeMode]);

  if (phase === "select") {
    return <QuizSelector onStart={startQuiz} />;
  }

  if (phase === "results" && session) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <QuizResults
          session={session}
          questions={allQuestions}
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
  onStart,
}: {
  onStart: (week: number | null, mode: "practice" | "review") => void;
}) {
  const missedCount = getMissedQuestionIds().length;

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
        Choose a week to practice or review your missed questions.
      </p>

      {missedCount > 0 && (
        <button
          onClick={() => onStart(null, "review")}
          className="mb-6 w-full rounded-xl border border-error/30 bg-error/5 p-5 text-left transition-colors hover:border-error"
        >
          <p className="font-semibold text-error">Review Missed Questions</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {missedCount} questions you got wrong across all weeks
          </p>
        </button>
      )}

      <button
        onClick={() => onStart(null, "practice")}
        className="mb-6 w-full rounded-xl border border-accent/30 bg-accent/5 p-5 text-left transition-colors hover:border-accent"
      >
        <p className="font-semibold text-accent">All Questions</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Practice all {allQuestions.length} questions across all weeks
        </p>
      </button>

      <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        By Week
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {weeks.map((w) => {
          const count = allQuestions.filter((q) => q.week === w.week).length;
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
                  <p className="text-xs text-muted-foreground">{count} questions</p>
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
