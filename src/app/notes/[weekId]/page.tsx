"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/data/notes";
import { ArrowLeft, FileText, Users, BookMarked, ClipboardList } from "lucide-react";

export default function WeekNotesPage({
  params,
}: {
  params: Promise<{ weekId: string }>;
}) {
  const { weekId } = use(params);
  const weekNum = parseInt(weekId, 10);
  const weekNotes = notes.find((n) => n.week === weekNum);

  if (!weekNotes) return notFound();

  const nextWeek = notes.find((n) => n.week === weekNum + 1);
  const prevWeek = notes.find((n) => n.week === weekNum - 1);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/notes"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> All notes
      </Link>

      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
          {weekNotes.week}
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            Week {weekNotes.week}: {weekNotes.lectureTitle}
          </h1>
          <p className="text-sm text-muted-foreground">
            {weekNotes.instructor} &middot; {weekNotes.slideCount} slides
          </p>
        </div>
      </div>

      {/* Lecture sections */}
      {weekNotes.sections.map((section, idx) => (
        <section
          key={idx}
          id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
          className="mb-6 scroll-mt-20 rounded-xl border border-border bg-card p-5"
        >
          <h2 className="mb-3 flex items-center gap-2 font-semibold">
            <FileText className="h-4 w-4 text-primary" />
            {section.heading}
          </h2>
          <ul className="space-y-2 text-sm">
            {section.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span className="text-card-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Key researchers */}
      {weekNotes.keyResearchers.length > 0 && (
        <section className="mb-6 rounded-xl border border-border bg-card p-5">
          <h2 className="mb-3 flex items-center gap-2 font-semibold">
            <Users className="h-4 w-4 text-accent" />
            Key Researchers
          </h2>
          <div className="flex flex-wrap gap-2">
            {weekNotes.keyResearchers.map((r, i) => (
              <span
                key={i}
                className="rounded-lg bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
              >
                {r}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Key references */}
      {weekNotes.keyReferences.length > 0 && (
        <section className="mb-8 rounded-xl border border-border bg-card p-5">
          <h2 className="mb-3 flex items-center gap-2 font-semibold">
            <BookMarked className="h-4 w-4 text-warning" />
            Key References
          </h2>
          <ul className="space-y-1.5 text-sm">
            {weekNotes.keyReferences.map((ref, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-warning/10 text-xs font-semibold text-warning">
                  {i + 1}
                </span>
                <span className="text-card-foreground/80">{ref}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Navigation + quiz link */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/quiz?week=${weekNum}&mode=practice`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ClipboardList className="h-4 w-4" />
          Practice Week {weekNum} Quiz
        </Link>
        <Link
          href={`/weeks/${weekNum}`}
          className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-semibold text-card-foreground transition-colors hover:border-primary/40"
        >
          Study Week {weekNum}
        </Link>
      </div>

      {/* Prev/next navigation */}
      <div className="mt-4 flex justify-between">
        {prevWeek ? (
          <Link
            href={`/notes/${prevWeek.week}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-1 inline h-4 w-4" />
            Week {prevWeek.week}: {prevWeek.lectureTitle}
          </Link>
        ) : (
          <span />
        )}
        {nextWeek && (
          <Link
            href={`/notes/${nextWeek.week}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Week {nextWeek.week}: {nextWeek.lectureTitle}
            <span className="ml-1 inline-block rotate-180">
              <ArrowLeft className="inline h-4 w-4" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
