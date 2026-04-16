"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  XCircle,
} from "lucide-react";
import { weeks } from "@/data/weeks";
import { shuffleArray } from "@/lib/quiz";

type Flashcard = { week: number; term: string; definition: string };

function buildDeck(weekFilter: number | "all"): Flashcard[] {
  const list: Flashcard[] = [];
  for (const w of weeks) {
    if (weekFilter !== "all" && w.week !== weekFilter) continue;
    for (const [term, definition] of Object.entries(w.importantTerms)) {
      list.push({ week: w.week, term, definition });
    }
  }
  return list;
}

export default function FlashcardsPage() {
  const [weekFilter, setWeekFilter] = useState<number | "all">("all");
  const [deck, setDeck] = useState<Flashcard[]>(() => buildDeck("all"));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [stillLearning, setStillLearning] = useState(0);

  const baseDeck = useMemo(() => buildDeck(weekFilter), [weekFilter]);

  useEffect(() => {
    setDeck(baseDeck);
    setIndex(0);
    setFlipped(false);
  }, [baseDeck]);

  const total = deck.length;
  const current = total > 0 ? deck[index] : null;
  const atStart = index <= 0;
  const atEnd = index >= total - 1;

  const goPrev = useCallback(() => {
    setFlipped(false);
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setFlipped(false);
    setIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);

  const shuffleDeck = useCallback(() => {
    setDeck((d) => shuffleArray(d));
    setIndex(0);
    setFlipped(false);
  }, []);

  const resetSessionStats = useCallback(() => {
    setKnown(0);
    setStillLearning(0);
  }, []);

  const markKnown = useCallback(() => {
    setKnown((k) => k + 1);
    if (!atEnd) goNext();
    else setFlipped(false);
  }, [atEnd, goNext]);

  const markStillLearning = useCallback(() => {
    setStillLearning((s) => s + 1);
    if (!atEnd) goNext();
    else setFlipped(false);
  }, [atEnd, goNext]);

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Home
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Flashcards</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Key terms from each week. Tap the card to reveal the definition.
        </p>
      </div>

      <div className="mb-6">
        <label htmlFor="week-select" className="sr-only">
          Week
        </label>
        <select
          id="week-select"
          value={weekFilter === "all" ? "all" : String(weekFilter)}
          onChange={(e) => {
            const v = e.target.value;
            setWeekFilter(v === "all" ? "all" : parseInt(v, 10));
          }}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="all">All Weeks</option>
          {weeks.map((w) => (
            <option key={w.week} value={w.week}>
              Week {w.week}: {w.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 flex items-center justify-between gap-3 text-sm">
        <div className="flex gap-4 text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Known <span className="font-semibold text-card-foreground">{known}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <XCircle className="h-4 w-4 text-warning" />
            Still learning{" "}
            <span className="font-semibold text-card-foreground">{stillLearning}</span>
          </span>
        </div>
        <button
          type="button"
          onClick={resetSessionStats}
          className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset counts
        </button>
      </div>

      {total === 0 ? (
        <div className="rounded-xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
          No terms for this selection.
        </div>
      ) : (
        <>
          <p className="mb-3 text-center text-xs font-medium text-muted-foreground">
            Card {index + 1} of {total}
            {current && (
              <span className="ml-2 rounded-md bg-primary/10 px-2 py-0.5 text-primary">
                Week {current.week}
              </span>
            )}
          </p>

          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="relative mb-6 min-h-[220px] w-full rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-colors hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {!flipped ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Term
                </p>
                <p className="text-lg font-semibold leading-snug text-card-foreground">
                  {current?.term}
                </p>
                <p className="mt-6 text-xs text-muted-foreground">Tap to reveal</p>
              </div>
            ) : (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Definition
                </p>
                <p className="text-base leading-relaxed text-card-foreground">
                  {current?.definition}
                </p>
              </div>
            )}
          </button>

          <div className="mb-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={markStillLearning}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-sm font-semibold text-warning transition-colors hover:bg-warning/20"
            >
              <XCircle className="h-4 w-4" />
              Still learning
            </button>
            <button
              type="button"
              onClick={markKnown}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm font-semibold text-success transition-colors hover:bg-success/20"
            >
              <CheckCircle2 className="h-4 w-4" />
              Known
            </button>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={atStart}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-medium transition-colors enabled:hover:border-primary/40 enabled:hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
              Previous
            </button>
            <button
              type="button"
              onClick={shuffleDeck}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="Shuffle cards"
            >
              <Shuffle className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={atEnd}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-medium transition-colors enabled:hover:border-primary/40 enabled:hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
