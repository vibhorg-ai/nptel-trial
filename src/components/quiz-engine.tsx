"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  Clock,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import type { Question, QuizAttempt, QuizSession } from "@/lib/types";
import { createSession, calculateScore, formatTime } from "@/lib/quiz";
import { saveSession, loadProgress, toggleBookmark } from "@/lib/progress";

interface QuizEngineProps {
  questions: Question[];
  mode: "practice" | "review" | "mock";
  week: number | null;
  onComplete: (session: QuizSession) => void;
}

export function QuizEngine({ questions, mode, week, onComplete }: QuizEngineProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const q = questions[currentIdx];
  const isLast = currentIdx === questions.length - 1;

  useEffect(() => {
    const p = loadProgress();
    setBookmarked(new Set(p.bookmarkedQuestions));
  }, []);

  useEffect(() => {
    if (mode === "mock") {
      timerRef.current = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [mode, startTime]);

  const handleSelect = useCallback(
    (optionId: string) => {
      if (revealed) return;
      setSelected(optionId);

      if (mode === "practice" || mode === "review") {
        setRevealed(true);
      }
    },
    [revealed, mode]
  );

  const handleNext = useCallback(() => {
    if (!selected && mode !== "mock") return;

    const attempt: QuizAttempt = {
      questionId: q.id,
      selectedAnswer: selected,
      isCorrect: selected === q.correctAnswer,
      timeSpentMs: Date.now() - startTime,
    };

    const newAttempts = [...attempts, attempt];
    setAttempts(newAttempts);

    if (isLast) {
      if (timerRef.current) clearInterval(timerRef.current);

      const session = createSession(mode, week);
      session.attempts = newAttempts;
      session.score = calculateScore(newAttempts);
      session.total = questions.length;
      session.completedAt = new Date().toISOString();

      saveSession(session);
      onComplete(session);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
      setStartTime(Date.now());
    }
  }, [selected, mode, q, startTime, attempts, isLast, questions.length, week, onComplete]);

  const handleSubmitMock = useCallback(() => {
    if (mode !== "mock") return;
    setRevealed(true);
  }, [mode]);

  const handleToggleBookmark = useCallback(() => {
    toggleBookmark(q.id);
    setBookmarked((prev) => {
      const next = new Set(prev);
      if (next.has(q.id)) next.delete(q.id);
      else next.add(q.id);
      return next;
    });
  }, [q.id]);

  if (!q) return null;

  const showExplanation = revealed && (mode === "practice" || mode === "review");

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress header */}
      <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {currentIdx + 1} of {questions.length}
        </span>
        <div className="flex items-center gap-3">
          {mode === "mock" && (
            <span className="flex items-center gap-1 font-mono">
              <Clock className="h-4 w-4" />
              {formatTime(elapsed)}
            </span>
          )}
          <button
            onClick={handleToggleBookmark}
            className="flex items-center gap-1 hover:text-primary"
          >
            {bookmarked.has(q.id) ? (
              <BookmarkCheck className="h-4 w-4 text-primary" />
            ) : (
              <Bookmark className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{
            width: `${((currentIdx + (revealed ? 1 : 0)) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <div className="mb-6 rounded-xl border border-border bg-card p-6">
        <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
            Week {q.week}
          </span>
          <span>{q.topic}</span>
          <span className="ml-auto capitalize">{q.difficulty}</span>
        </div>
        <p className="mt-3 text-lg font-medium leading-snug">{q.questionText}</p>
      </div>

      {/* Options */}
      <div className="mb-6 flex flex-col gap-3">
        {q.options.map((opt) => {
          let variant = "default";
          if (revealed) {
            if (opt.id === q.correctAnswer) variant = "correct";
            else if (opt.id === selected) variant = "incorrect";
          } else if (opt.id === selected) {
            variant = "selected";
          }

          const variantStyles: Record<string, string> = {
            default:
              "border-border bg-card hover:border-primary/40 cursor-pointer",
            selected:
              "border-primary bg-primary/5 ring-2 ring-primary/20 cursor-pointer",
            correct:
              "border-success bg-success/5 ring-2 ring-success/20",
            incorrect:
              "border-error bg-error/5 ring-2 ring-error/20",
          };

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={revealed}
              className={`flex items-center gap-3 rounded-xl border p-4 text-left text-sm transition-all ${variantStyles[variant]}`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold uppercase">
                {opt.id}
              </span>
              <span className="flex-1">{opt.text}</span>
              {revealed && opt.id === q.correctAnswer && (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
              )}
              {revealed && opt.id === selected && opt.id !== q.correctAnswer && (
                <XCircle className="h-5 w-5 shrink-0 text-error" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mb-6 rounded-xl border border-success/30 bg-success/5 p-5">
          <h3 className="mb-1 text-sm font-semibold text-success">Explanation</h3>
          <p className="text-sm leading-relaxed text-card-foreground/90">
            {q.explanation}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end gap-3">
        {mode === "mock" && !revealed && (
          <button
            onClick={handleSubmitMock}
            disabled={!selected}
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            Submit Answer
          </button>
        )}
        {(revealed || mode === "mock") && (
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {isLast ? "Finish" : "Next"}
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
