"use client";

import Link from "next/link";
import { weeks } from "@/data/weeks";
import { questions } from "@/data/questions";
import { loadProgress } from "@/lib/progress";
import { useEffect, useState } from "react";
import type { UserProgress } from "@/lib/types";
import { BookOpen, ChevronRight } from "lucide-react";

export default function WeeksPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold">Study by Week</h1>
      <p className="mb-8 text-muted-foreground">
        Choose a week to study its concepts and practice questions.
      </p>

      <div className="flex flex-col gap-4">
        {weeks.map((w) => {
          const weekQs = questions.filter((q) => q.week === w.week);
          const wp = progress?.weekProgress[w.week];
          const pct =
            wp && wp.totalQuestions > 0
              ? Math.round((wp.correctAnswers / wp.totalQuestions) * 100)
              : 0;

          return (
            <Link
              key={w.week}
              href={`/weeks/${w.week}`}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                {w.week}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-card-foreground group-hover:text-primary">
                    {w.title}
                  </h2>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {w.summary}
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    {w.keyConcepts.length} concepts
                  </span>
                  <span>{weekQs.length} questions</span>
                  {wp && wp.attempts > 0 && (
                    <>
                      <span>&middot;</span>
                      <span className="text-primary font-medium">{pct}% mastery</span>
                    </>
                  )}
                </div>
                {wp && wp.totalQuestions > 0 && (
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
