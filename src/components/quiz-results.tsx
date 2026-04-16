"use client";

import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  Home,
  ArrowRight,
} from "lucide-react";
import type { QuizSession, Question } from "@/lib/types";

interface QuizResultsProps {
  session: QuizSession;
  questions: Question[];
  onRetryMissed?: () => void;
  onRetryAll?: () => void;
}

export function QuizResults({
  session,
  questions,
  onRetryMissed,
  onRetryAll,
}: QuizResultsProps) {
  const pct = session.total > 0 ? Math.round((session.score / session.total) * 100) : 0;

  const getGrade = () => {
    if (pct >= 90) return { label: "Excellent!", color: "text-success" };
    if (pct >= 70) return { label: "Good job!", color: "text-primary" };
    if (pct >= 50) return { label: "Keep practicing", color: "text-warning" };
    return { label: "Needs more study", color: "text-error" };
  };

  const grade = getGrade();
  const missed = session.attempts.filter((a) => !a.isCorrect);
  const topicBreakdown = new Map<string, { correct: number; total: number }>();

  for (const attempt of session.attempts) {
    const q = questions.find((q) => q.id === attempt.questionId);
    if (!q) continue;
    const entry = topicBreakdown.get(q.topic) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (attempt.isCorrect) entry.correct += 1;
    topicBreakdown.set(q.topic, entry);
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Score card */}
      <div className="mb-8 rounded-2xl border border-border bg-card p-8 text-center">
        <Trophy className="mx-auto mb-3 h-10 w-10 text-warning" />
        <p className={`text-lg font-semibold ${grade.color}`}>{grade.label}</p>
        <p className="mt-2 text-5xl font-bold text-card-foreground">{pct}%</p>
        <p className="mt-1 text-muted-foreground">
          {session.score} correct out of {session.total} questions
        </p>
        <p className="mt-1 text-xs text-muted-foreground capitalize">
          {session.mode} mode
          {session.week !== null && ` — Week ${session.week}`}
        </p>
      </div>

      {/* Topic breakdown */}
      {topicBreakdown.size > 0 && (
        <div className="mb-8 rounded-xl border border-border bg-card p-5">
          <h3 className="mb-3 font-semibold">Topic Breakdown</h3>
          <div className="space-y-2">
            {Array.from(topicBreakdown.entries()).map(([topic, { correct, total }]) => {
              const topicPct = Math.round((correct / total) * 100);
              return (
                <div key={topic}>
                  <div className="flex items-center justify-between text-sm">
                    <span>{topic}</span>
                    <span className="font-medium">
                      {correct}/{total} ({topicPct}%)
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full rounded-full transition-all ${
                        topicPct >= 70 ? "bg-success" : topicPct >= 50 ? "bg-warning" : "bg-error"
                      }`}
                      style={{ width: `${topicPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Missed questions review */}
      {missed.length > 0 && (
        <div className="mb-8 rounded-xl border border-border bg-card p-5">
          <h3 className="mb-3 font-semibold text-error">
            Missed Questions ({missed.length})
          </h3>
          <div className="space-y-4">
            {missed.map((attempt) => {
              const q = questions.find((q) => q.id === attempt.questionId);
              if (!q) return null;
              const selectedOpt = q.options.find((o) => o.id === attempt.selectedAnswer);
              const correctOpt = q.options.find((o) => o.id === q.correctAnswer);
              return (
                <div key={attempt.questionId} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                  <p className="text-sm font-medium">{q.questionText}</p>
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="flex items-center gap-1 text-error">
                      <XCircle className="h-3.5 w-3.5" />
                      Your answer: {selectedOpt?.text ?? "Not answered"}
                    </p>
                    <p className="flex items-center gap-1 text-success">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Correct: {correctOpt?.text}
                    </p>
                  </div>
                  <p className="mt-2 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
                    {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        {missed.length > 0 && onRetryMissed && (
          <button
            onClick={onRetryMissed}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-error/10 px-5 py-3 font-semibold text-error transition-colors hover:bg-error/20"
          >
            <RotateCcw className="h-4 w-4" />
            Retry Missed ({missed.length})
          </button>
        )}
        {onRetryAll && (
          <button
            onClick={onRetryAll}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-semibold text-card-foreground transition-colors hover:border-primary/40"
          >
            <RotateCcw className="h-4 w-4" />
            Retry All
          </button>
        )}
        <Link
          href="/"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
      </div>
    </div>
  );
}
