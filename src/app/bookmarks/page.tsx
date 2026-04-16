"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  BookmarkX,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { questions as allQuestions } from "@/data/questions";
import { weeks } from "@/data/weeks";
import { loadProgress, toggleBookmark } from "@/lib/progress";
import { getNotesLink } from "@/lib/notes-link";
import { shuffleQuestionOptions } from "@/lib/quiz";
import type { Question } from "@/lib/types";

const questionById = new Map(allQuestions.map((q) => [q.id, q]));

export default function BookmarksPage() {
  const [ready, setReady] = useState(false);
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);
  const [sessionSalt] = useState(() => Date.now());

  useEffect(() => {
    setBookmarkIds(loadProgress().bookmarkedQuestions);
    setReady(true);
  }, []);

  const grouped = useMemo(() => {
    const byWeek = new Map<number, Question[]>();
    for (const id of bookmarkIds) {
      const raw = questionById.get(id);
      if (!raw) continue;
      const q = shuffleQuestionOptions(raw, sessionSalt);
      const list = byWeek.get(q.week) ?? [];
      list.push(q);
      byWeek.set(q.week, list);
    }
    return Array.from(byWeek.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([week, qs]) => ({
        week,
        title: weeks.find((w) => w.week === week)?.title ?? `Week ${week}`,
        questions: qs,
      }));
  }, [bookmarkIds, sessionSalt]);

  const handleRemove = (questionId: string) => {
    toggleBookmark(questionId);
    setBookmarkIds(loadProgress().bookmarkedQuestions);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Home
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold">Bookmarked Questions</h1>
        <p className="mt-1 text-muted-foreground">
          Saved questions with answers and explanations. Remove a bookmark when
          you no longer need it here.
        </p>
      </div>

      {!ready ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : bookmarkIds.length === 0 || grouped.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card px-6 py-16 text-center">
          <Bookmark className="mb-4 h-12 w-12 text-muted-foreground/50" />
          <p className="text-lg font-medium text-card-foreground">
            No bookmarks yet
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            While taking a quiz, bookmark questions you want to revisit. They will
            show up here.
          </p>
          <Link
            href="/quiz"
            className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go to Practice Quiz
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {grouped.map(({ week, title, questions: weekQs }) => (
            <section key={week}>
              <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  W{week}
                </span>
                <span className="leading-tight">{title}</span>
              </h2>
              <div className="space-y-4">
                {weekQs.map((q) => {
                  const correctOpt = q.options.find(
                    (o) => o.id === q.correctAnswer
                  );
                  return (
                    <article
                      key={q.id}
                      className="overflow-hidden rounded-xl border border-border bg-card"
                    >
                      <div className="flex items-start justify-between gap-3 border-b border-border bg-secondary/20 px-4 py-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium leading-snug text-card-foreground">
                            {q.questionText}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {q.topic} ·{" "}
                            <span className="capitalize">{q.difficulty}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemove(q.id)}
                          className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-error/40 hover:text-error"
                          aria-label="Remove bookmark"
                        >
                          <BookmarkX className="h-3.5 w-3.5" />
                          Remove
                        </button>
                      </div>
                      <div className="space-y-3 p-4">
                        <div className="space-y-1.5">
                          {q.options.map((opt) => (
                            <div
                              key={opt.id}
                              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                                opt.id === q.correctAnswer
                                  ? "bg-success/10 font-medium text-success"
                                  : "text-muted-foreground"
                              }`}
                            >
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-semibold uppercase">
                                {opt.id}
                              </span>
                              <span className="flex-1">{opt.text}</span>
                              {opt.id === q.correctAnswer && (
                                <CheckCircle2 className="h-4 w-4 shrink-0" />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="rounded-lg bg-success/10 p-3">
                          <p className="text-xs font-semibold text-success">
                            Correct answer
                          </p>
                          <p className="mt-0.5 text-sm text-card-foreground/90">
                            ({q.correctAnswer.toUpperCase()}) {correctOpt?.text}
                          </p>
                        </div>
                        <div className="rounded-lg bg-secondary/30 p-3">
                          <p className="text-xs font-semibold text-muted-foreground">
                            Explanation
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-card-foreground/90">
                            {q.explanation}
                          </p>
                        </div>
                        {q.notesRef && (
                          <Link
                            href={getNotesLink(q.week, q.notesRef)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                          >
                            <BookOpen className="h-3.5 w-3.5" />
                            Lecture notes: {q.notesRef}
                          </Link>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
