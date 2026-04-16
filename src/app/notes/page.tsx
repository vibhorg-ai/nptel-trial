"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  FileText,
  ChevronRight,
  BookOpen,
  Users,
  Search,
} from "lucide-react";
import { notes, type WeekNotes, type LectureSection } from "@/data/notes";

function contains(haystack: string, needle: string): boolean {
  if (!needle) return true;
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

function weekMatches(n: WeekNotes, q: string): boolean {
  if (contains(n.lectureTitle, q)) return true;
  if (
    n.sections.some(
      (s) =>
        contains(s.heading, q) || s.points.some((p) => contains(p, q))
    )
  )
    return true;
  if (n.keyResearchers.some((r) => contains(r, q))) return true;
  if (n.keyReferences.some((r) => contains(r, q))) return true;
  return false;
}

function matchingSections(n: WeekNotes, q: string): LectureSection[] {
  if (!q.trim()) return [];
  return n.sections.filter(
    (s) =>
      contains(s.heading, q) || s.points.some((p) => contains(p, q))
  );
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Highlight({
  text,
  query,
}: {
  text: string;
  query: string;
}) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const parts = text.split(
    new RegExp(`(${escapeRegExp(q)})`, "gi")
  );
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === q.toLowerCase() ? (
          <mark
            key={i}
            className="rounded bg-primary/20 px-0.5 text-inherit"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function NotesPage() {
  const [query, setQuery] = useState("");

  const trimmed = query.trim();
  const filteredNotes = useMemo(
    () =>
      trimmed
        ? notes.filter((n) => weekMatches(n, trimmed))
        : notes,
    [trimmed]
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold">Lecture Notes</h1>
      <p className="mb-8 text-muted-foreground">
        Week-by-week lecture content from the NPTEL Affective Computing course.
        Use these notes to review key concepts before quizzes.
      </p>

      <div className="relative mb-8">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keyword…"
          aria-label="Search lecture notes"
          className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-3 text-sm shadow-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/30"
        />
      </div>

      {trimmed && filteredNotes.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-muted/30 px-4 py-8 text-center text-sm text-muted-foreground">
          No results match &ldquo;{trimmed}&rdquo;. Try a different keyword.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredNotes.map((n) => {
            const secMatches = trimmed
              ? matchingSections(n, trimmed)
              : [];

            return (
              <div
                key={n.week}
                className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
              >
                <Link
                  href={`/notes/${n.week}`}
                  className="group flex items-start gap-4 p-5 transition-colors hover:bg-secondary/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                    {n.week}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="font-semibold text-card-foreground group-hover:text-primary">
                        {trimmed ? (
                          <Highlight text={n.lectureTitle} query={trimmed} />
                        ) : (
                          n.lectureTitle
                        )}
                      </h2>
                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {n.instructor}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="h-3.5 w-3.5" />
                        {n.slideCount} slides
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {n.sections.length} sections
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {n.keyResearchers.length} researchers
                      </span>
                    </div>
                  </div>
                </Link>

                {trimmed && secMatches.length > 0 && (
                  <div className="border-t border-border bg-secondary/15 px-5 py-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Matching sections
                    </p>
                    <ul className="space-y-2 text-sm">
                      {secMatches.map((s) => (
                        <li key={s.heading}>
                          <span className="font-medium text-card-foreground">
                            <Highlight text={s.heading} query={trimmed} />
                          </span>
                          {s.points.some((p) => contains(p, trimmed)) && (
                            <ul className="mt-1 space-y-1 border-l-2 border-primary/20 pl-3 text-muted-foreground">
                              {s.points
                                .filter((p) => contains(p, trimmed))
                                .map((p, idx) => (
                                  <li key={idx} className="leading-snug">
                                    <Highlight text={p} query={trimmed} />
                                  </li>
                                ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
