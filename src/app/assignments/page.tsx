"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  BookOpen,
  ClipboardList,
} from "lucide-react";
import { questions as rawQuestions2026 } from "@/data/questions";
import { questions2025 } from "@/data/questions-2025";
import { weeks } from "@/data/weeks";
import { getNotesLink } from "@/lib/notes-link";
import { shuffleArray, shuffleQuestionOptions } from "@/lib/quiz";
import type { Question } from "@/lib/types";
import type { PyqYear } from "@/data/pyq-years";
import { PYQ_YEAR_OPTIONS } from "@/data/pyq-years";

export default function AssignmentsPage() {
  const [year, setYear] = useState<PyqYear>("2026");
  /** Changes on load and when you click “Reshuffle” so option and question order stay varied. */
  const [shuffleSalt, setShuffleSalt] = useState(() => Date.now());
  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(new Set());
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(
    new Set()
  );
  const structuredYear = year === "2026" || year === "2025";

  const questions: Question[] = useMemo(() => {
    if (year === "2026") {
      return rawQuestions2026.map((q) =>
        shuffleQuestionOptions(q, shuffleSalt)
      );
    }
    if (year === "2025") {
      return questions2025.map((q) =>
        shuffleQuestionOptions(q, shuffleSalt)
      );
    }
    return [];
  }, [year, shuffleSalt]);

  /** Per-week question order (shuffled) so study lists are not always q1, q2, … */
  const questionsByWeek = useMemo(() => {
    const map = new Map<number, Question[]>();
    for (const w of weeks) {
      const list = questions.filter((q) => q.week === w.week);
      if (list.length === 0) continue;
      map.set(w.week, shuffleArray([...list]));
    }
    return map;
  }, [questions]);

  const weeksShown = useMemo(() => {
    if (year === "2025") {
      return weeks.filter((w) => questions.some((q) => q.week === w.week));
    }
    return weeks;
  }, [year, questions]);

  const toggleWeek = (week: number) => {
    setExpandedWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(week)) next.delete(week);
      else next.add(week);
      return next;
    });
  };

  const toggleQuestion = (id: string) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => {
    setExpandedWeeks(new Set(weeksShown.map((w) => w.week)));
    setExpandedQuestions(new Set(questions.map((q) => q.id)));
  };

  const collapseAll = () => {
    setExpandedWeeks(new Set());
    setExpandedQuestions(new Set());
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Home
      </Link>

      <div className="mb-6 rounded-xl border border-border bg-card p-4">
        <label htmlFor="pyq-year" className="mb-2 block text-sm font-medium">
          Assignment year
        </label>
        <select
          id="pyq-year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value as PyqYear);
            setExpandedWeeks(new Set());
            setExpandedQuestions(new Set());
          }}
          className="w-full max-w-md rounded-lg border border-border bg-background px-3 py-2 text-sm text-card-foreground"
        >
          {PYQ_YEAR_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label} — {o.hint}
            </option>
          ))}
        </select>
        {structuredYear && (
          <button
            type="button"
            onClick={() => {
              setShuffleSalt(Date.now());
              setExpandedWeeks(new Set());
              setExpandedQuestions(new Set());
            }}
            className="mt-3 text-xs font-medium text-primary underline-offset-4 hover:underline"
          >
            Reshuffle question and option order
          </button>
        )}
      </div>

      {structuredYear && (
        <>
          <div className="mb-2 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">
                {year === "2026"
                  ? "2026 Assignment MCQs"
                  : "2025 NPTEL assignment MCQs"}
              </h1>
              <p className="mt-1 text-muted-foreground">
                {year === "2026" ? (
                  <>
                    {questions.length} questions across {weeksShown.length}{" "}
                    weeks — each answer links to the relevant lecture notes section.
                  </>
                ) : (
                  <>
                    {questions.length} questions in {weeksShown.length} weeks,
                    parsed from the Jan 2025 session assignment export (accepted
                    answers as on the portal). Lecture note links below are only
                    for the 2026 track and are hidden for 2025 items.
                  </>
                )}
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={expandAll}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                Expand all
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                Collapse all
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {weeksShown.map((w) => {
              const weekQs =
                questionsByWeek.get(w.week) ??
                questions.filter((q) => q.week === w.week);
              const isWeekOpen = expandedWeeks.has(w.week);

              return (
                <div
                  key={w.week}
                  className="overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="flex w-full items-center gap-2 p-4 transition-colors hover:bg-secondary/50">
                    <button
                      type="button"
                      onClick={() => toggleWeek(w.week)}
                      className="flex min-w-0 flex-1 items-center gap-3 text-left"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                        {w.week}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold">{w.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {weekQs.length} questions
                        </p>
                      </div>
                      {isWeekOpen ? (
                        <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                      )}
                    </button>
                    <Link
                      href={
                        year === "2025"
                          ? `/quiz?week=${w.week}&mode=practice&year=2025`
                          : `/quiz?week=${w.week}&mode=practice`
                      }
                      className="flex shrink-0 items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      <ClipboardList className="h-3 w-3" />
                      Practice
                    </Link>
                  </div>

                  {isWeekOpen && (
                    <div className="border-t border-border">
                      {weekQs.map((q, qIdx) => {
                        const isOpen = expandedQuestions.has(q.id);
                        const correctOpt = q.options.find(
                          (o) => o.id === q.correctAnswer
                        );

                        return (
                          <div
                            key={q.id}
                            className="border-b border-border last:border-b-0"
                          >
                            <button
                              type="button"
                              onClick={() => toggleQuestion(q.id)}
                              className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-secondary/30"
                            >
                              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-muted-foreground">
                                {qIdx + 1}
                              </span>
                              <div className="flex-1">
                                <p className="text-sm font-medium leading-snug">
                                  {q.questionText}
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                  {q.topic} &middot;{" "}
                                  <span className="capitalize">
                                    {q.difficulty}
                                  </span>
                                </p>
                              </div>
                              {isOpen ? (
                                <ChevronUp className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                              )}
                            </button>

                            {isOpen && (
                              <div className="border-t border-border/50 bg-secondary/20 px-4 pb-4 pt-3">
                                <div className="mb-3 space-y-1.5">
                                  {q.options.map((opt, optIdx) => (
                                    <div
                                      key={`${q.id}-${optIdx}-${opt.id}`}
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

                                <div className="mb-3 rounded-lg bg-success/10 p-3">
                                  <p className="text-xs font-semibold text-success">
                                    Correct Answer
                                  </p>
                                  <p className="mt-0.5 text-sm text-card-foreground/90">
                                    ({q.correctAnswer.toUpperCase()}){" "}
                                    {correctOpt?.text}
                                  </p>
                                </div>

                                <div className="rounded-lg bg-card p-3">
                                  <p className="text-xs font-semibold text-muted-foreground">
                                    Explanation
                                  </p>
                                  <p className="mt-1 text-sm leading-relaxed text-card-foreground/90">
                                    {q.explanation}
                                  </p>
                                </div>

                                {year === "2026" && q.notesRef && (
                                  <Link
                                    href={getNotesLink(q.week, q.notesRef)}
                                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                                  >
                                    <BookOpen className="h-3.5 w-3.5" />
                                    View in Lecture Notes: {q.notesRef}
                                  </Link>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
