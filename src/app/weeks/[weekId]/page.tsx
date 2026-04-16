"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { weeks } from "@/data/weeks";
import { questions } from "@/data/questions";
import { BookOpen, ClipboardList, ArrowLeft, Lightbulb, AlertTriangle } from "lucide-react";

export default function WeekDetailPage({
  params,
}: {
  params: Promise<{ weekId: string }>;
}) {
  const { weekId } = use(params);
  const weekNum = parseInt(weekId, 10);
  const week = weeks.find((w) => w.week === weekNum);

  if (!week) return notFound();

  const weekQuestions = questions.filter((q) => q.week === weekNum);
  const topics = [...new Set(weekQuestions.map((q) => q.topic))];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/weeks"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> All weeks
      </Link>

      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
          {week.week}
        </div>
        <div>
          <h1 className="text-2xl font-bold">Week {week.week}: {week.title}</h1>
          <p className="text-sm text-muted-foreground">
            {weekQuestions.length} questions &middot; {topics.length} topics
          </p>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 flex items-center gap-2 font-semibold">
          <BookOpen className="h-4 w-4 text-primary" /> Summary
        </h2>
        <p className="text-sm leading-relaxed text-card-foreground/90">{week.summary}</p>
      </section>

      {/* Key concepts */}
      <section className="mb-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 flex items-center gap-2 font-semibold">
          <Lightbulb className="h-4 w-4 text-warning" /> Key Concepts
        </h2>
        <ul className="space-y-2 text-sm">
          {week.keyConcepts.map((c, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {i + 1}
              </span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Important terms */}
      <section className="mb-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 font-semibold">Important Terms</h2>
        <dl className="space-y-3 text-sm">
          {Object.entries(week.importantTerms).map(([term, def]) => (
            <div key={term}>
              <dt className="font-medium text-primary">{term}</dt>
              <dd className="mt-0.5 text-card-foreground/80">{def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Common confusions */}
      <section className="mb-8 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 flex items-center gap-2 font-semibold">
          <AlertTriangle className="h-4 w-4 text-error" /> Common Confusions
        </h2>
        <ul className="space-y-2 text-sm">
          {week.commonConfusions.map((c, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-error" />
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Practice CTA */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/quiz?week=${weekNum}&mode=practice`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ClipboardList className="h-4 w-4" />
          Practice Week {weekNum} ({weekQuestions.length} questions)
        </Link>
        {weekNum < weeks.length && (
          <Link
            href={`/weeks/${weekNum + 1}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-semibold text-card-foreground transition-colors hover:border-primary/40"
          >
            Next: Week {weekNum + 1}
          </Link>
        )}
      </div>
    </div>
  );
}
