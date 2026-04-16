"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  useLayoutEffect,
  type MouseEvent,
} from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  Clock,
  Bookmark,
  BookmarkCheck,
  BookOpen,
} from "lucide-react";
import type { Question, QuizAttempt, QuizSession } from "@/lib/types";
import { createSession, calculateScore, formatTime } from "@/lib/quiz";
import { saveSession, loadProgress, toggleBookmark } from "@/lib/progress";
import { getNotesLink } from "@/lib/notes-link";

interface QuizEngineProps {
  questions: Question[];
  mode: "practice" | "review" | "mock";
  week: number | null;
  onComplete: (session: QuizSession) => void;
  timeLimitMs?: number;
  sessionStartTime?: number;
}

export function QuizEngine({
  questions,
  mode,
  week,
  onComplete,
  timeLimitMs,
  sessionStartTime,
}: QuizEngineProps) {
  const questionLookup = useMemo(
    () => new Map(questions.map((q) => [q.id, q])),
    [questions]
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [awaitingConfidence, setAwaitingConfidence] = useState(false);
  const [confidence, setConfidence] = useState<"guess" | "somewhat" | "sure" | null>(null);
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [eliminated, setEliminated] = useState<Set<string>>(new Set());
  const [tick, setTick] = useState(0);
  const [timesUpFlash, setTimesUpFlash] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sessionCompleteRef = useRef(false);
  const flashTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const snapRef = useRef({
    attempts,
    currentIdx,
    selected,
    startTime,
    questions,
  });

  const defaultSessionStartRef = useRef<number | undefined>(undefined);
  if (defaultSessionStartRef.current === undefined && mode === "mock") {
    defaultSessionStartRef.current = Date.now();
  }

  const effectiveSessionStart = sessionStartTime ?? defaultSessionStartRef.current ?? Date.now();

  useLayoutEffect(() => {
    if (sessionStartTime != null) {
      defaultSessionStartRef.current = sessionStartTime;
    }
  }, [sessionStartTime]);

  const q = questions[currentIdx];
  const isLast = currentIdx === questions.length - 1;

  void tick;
  const remainingMs =
    mode === "mock" && timeLimitMs != null
      ? Math.max(0, timeLimitMs - (Date.now() - effectiveSessionStart))
      : null;
  const timeFraction =
    timeLimitMs != null && timeLimitMs > 0 ? remainingMs! / timeLimitMs : 1;

  snapRef.current = { attempts, currentIdx, selected, startTime, questions };

  useEffect(() => {
    const p = loadProgress();
    setBookmarked(new Set(p.bookmarkedQuestions));
  }, []);

  useEffect(() => {
    setEliminated(new Set());
  }, [currentIdx]);

  useEffect(() => {
    if (mode === "mock") {
      const intervalMs = timeLimitMs != null ? 250 : 1000;
      timerRef.current = setInterval(() => {
        setTick((t) => t + 1);
        if (timeLimitMs == null) {
          setElapsed(Date.now() - startTime);
        }
      }, intervalMs);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [mode, startTime, timeLimitMs]);

  useEffect(() => {
    if (mode !== "mock" || timeLimitMs == null || sessionCompleteRef.current) return;

    const elapsedSession = Date.now() - effectiveSessionStart;
    if (elapsedSession < timeLimitMs) return;

    sessionCompleteRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);

    const { attempts: att, startTime: st, questions: qs } = snapRef.current;
    const from = att.length;
    const tail: QuizAttempt[] = [];
    for (let i = from; i < qs.length; i++) {
      tail.push({
        questionId: qs[i].id,
        selectedAnswer: null,
        isCorrect: false,
        timeSpentMs: i === from ? Date.now() - st : 0,
      });
    }
    const allAttempts = [...att, ...tail];

    setTimesUpFlash(true);
    setAttempts(allAttempts);

    flashTimeoutRef.current = setTimeout(() => {
      const session = createSession(mode, week);
      session.attempts = allAttempts;
      session.score = calculateScore(allAttempts);
      session.total = questions.length;
      session.completedAt = new Date().toISOString();
      saveSession(session, questionLookup);
      onComplete(session);
    }, 1500);
  }, [tick, mode, timeLimitMs, effectiveSessionStart, week, onComplete, questions.length]);

  useEffect(() => {
    return () => {
      if (flashTimeoutRef.current) {
        clearTimeout(flashTimeoutRef.current);
        flashTimeoutRef.current = null;
      }
    };
  }, []);

  const toggleEliminated = useCallback(
    (optionId: string) => {
      if (revealed) return;
      setEliminated((prev) => {
        const next = new Set(prev);
        if (next.has(optionId)) next.delete(optionId);
        else next.add(optionId);
        return next;
      });
    },
    [revealed]
  );

  const handleSelect = useCallback(
    (optionId: string) => {
      if (revealed) return;
      setSelected(optionId);

      if (mode === "practice" || mode === "review") {
        setAwaitingConfidence(true);
      }
    },
    [revealed, mode]
  );

  const handleConfidence = useCallback((level: "guess" | "somewhat" | "sure") => {
    setConfidence(level);
    setAwaitingConfidence(false);
    setRevealed(true);
  }, []);

  const handleOptionClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>, optionId: string) => {
      if (e.shiftKey) {
        toggleEliminated(optionId);
        return;
      }
      handleSelect(optionId);
    },
    [handleSelect, toggleEliminated]
  );

  const handleNext = useCallback(() => {
    if (!selected && mode !== "mock") return;
    if (sessionCompleteRef.current) return;

    const attempt: QuizAttempt = {
      questionId: q.id,
      selectedAnswer: selected,
      isCorrect: selected === q.correctAnswer,
      timeSpentMs: Date.now() - startTime,
      ...(confidence != null && (mode === "practice" || mode === "review")
        ? { confidence }
        : {}),
    };

    const newAttempts = [...attempts, attempt];
    setAttempts(newAttempts);

    if (isLast) {
      sessionCompleteRef.current = true;
      if (timerRef.current) clearInterval(timerRef.current);

      const session = createSession(mode, week);
      session.attempts = newAttempts;
      session.score = calculateScore(newAttempts);
      session.total = questions.length;
      session.completedAt = new Date().toISOString();

      saveSession(session, questionLookup);
      onComplete(session);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
      setAwaitingConfidence(false);
      setConfidence(null);
      setStartTime(Date.now());
    }
  }, [
    selected,
    mode,
    q,
    startTime,
    attempts,
    isLast,
    questions.length,
    week,
    onComplete,
    confidence,
  ]);

  const handleToggleBookmark = useCallback(() => {
    toggleBookmark(q.id);
    setBookmarked((prev) => {
      const next = new Set(prev);
      if (next.has(q.id)) next.delete(q.id);
      else next.add(q.id);
      return next;
    });
  }, [q.id]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (sessionCompleteRef.current || timesUpFlash) return;

      const key = e.key.toLowerCase();
      const optionMap: Record<string, string> = { "1": "a", "2": "b", "3": "c", "4": "d" };

      if (e.shiftKey && ["a", "b", "c", "d", "1", "2", "3", "4"].includes(key) && !revealed) {
        const optId = optionMap[key] ?? key;
        if (q.options.some((o) => o.id === optId)) {
          e.preventDefault();
          toggleEliminated(optId);
        }
        return;
      }

      if (["a", "b", "c", "d", "1", "2", "3", "4"].includes(key) && !revealed) {
        const optId = optionMap[key] ?? key;
        if (q.options.some((o) => o.id === optId)) {
          handleSelect(optId);
        }
      } else if (key === "enter" && selected) {
        if (mode === "mock" || revealed) {
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    q,
    revealed,
    selected,
    mode,
    handleSelect,
    handleNext,
    toggleEliminated,
    timesUpFlash,
  ]);

  if (!q) return null;

  const showExplanation = revealed && (mode === "practice" || mode === "review");
  const showConfidencePrompt =
    (mode === "practice" || mode === "review") && awaitingConfidence && selected != null;

  const isAnswerCorrect = selected === q.correctAnswer;
  let confidenceBadge: { text: string; className: string } | null = null;
  if (confidence != null && showExplanation) {
    if (confidence === "sure" && !isAnswerCorrect) {
      confidenceBadge = {
        text: "Overconfident! Review this concept",
        className: "border-error/40 bg-error/10 text-error",
      };
    } else if (confidence === "guess" && isAnswerCorrect) {
      confidenceBadge = {
        text: "Lucky guess — make sure you understand why",
        className: "border-warning/40 bg-warning/10 text-warning",
      };
    } else if (confidence === "sure" && isAnswerCorrect) {
      confidenceBadge = {
        text: "You know this!",
        className: "border-success/40 bg-success/10 text-success",
      };
    } else if (confidence === "guess" && !isAnswerCorrect) {
      confidenceBadge = {
        text: "Expected — study this topic",
        className: "border-border bg-muted/50 text-muted-foreground",
      };
    }
  }

  const mockElapsedDisplay =
    timeLimitMs != null && remainingMs != null ? remainingMs : elapsed;

  let timerBarColorClass = "bg-emerald-500";
  if (timeFraction < 0.2) timerBarColorClass = "bg-destructive";
  else if (timeFraction < 0.5) timerBarColorClass = "bg-amber-500";

  return (
    <div className="relative mx-auto max-w-2xl">
      {timesUpFlash && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 text-3xl font-bold"
          role="alert"
        >
          Time&apos;s up!
        </div>
      )}

      <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {currentIdx + 1} of {questions.length}
        </span>
        <div className="flex items-center gap-3">
          {mode === "mock" && (
            <span className="flex items-center gap-1 font-mono">
              <Clock className="h-4 w-4" />
              {timeLimitMs != null ? formatTime(mockElapsedDisplay) : formatTime(elapsed)}
            </span>
          )}
          <button
            type="button"
            onClick={handleToggleBookmark}
            aria-label={bookmarked.has(q.id) ? "Remove bookmark" : "Add bookmark"}
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

      {mode === "mock" && timeLimitMs != null && (
        <div className="mb-6">
          <div className="mb-1 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className={`h-full rounded-full transition-all duration-300 ${timerBarColorClass}`}
              style={{ width: `${Math.max(0, Math.min(100, timeFraction * 100))}%` }}
            />
          </div>
        </div>
      )}

      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{
            width: `${((currentIdx + (revealed ? 1 : 0)) / questions.length) * 100}%`,
          }}
        />
      </div>

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

      <p className="mb-2 text-xs text-muted-foreground">
        Right-click or Shift+click to eliminate options
      </p>

      <div className="mb-6 flex flex-col gap-3">
        {q.options.map((opt, optIdx) => {
          let variant = "default";
          if (revealed) {
            if (opt.id === q.correctAnswer) variant = "correct";
            else if (opt.id === selected) variant = "incorrect";
          } else if (opt.id === selected) {
            variant = "selected";
          }

          const variantStyles: Record<string, string> = {
            default: "border-border bg-card hover:border-primary/40 cursor-pointer",
            selected: "border-primary bg-primary/5 ring-2 ring-primary/20 cursor-pointer",
            correct: "border-success bg-success/5 ring-2 ring-success/20",
            incorrect: "border-error bg-error/5 ring-2 ring-error/20",
          };

          const struck = eliminated.has(opt.id);

          return (
            <button
              key={`${q.id}-${optIdx}-${opt.id}`}
              type="button"
              onClick={(e) => handleOptionClick(e, opt.id)}
              onContextMenu={(e) => {
                e.preventDefault();
                toggleEliminated(opt.id);
              }}
              disabled={revealed}
              className={`flex items-center gap-3 rounded-xl border p-4 text-left text-sm transition-all ${variantStyles[variant]} ${
                struck ? "opacity-40 line-through" : ""
              }`}
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

      {showConfidencePrompt && (
        <div className="mb-6 rounded-xl border border-border bg-card p-5">
          <p className="mb-3 text-sm font-medium text-card-foreground">How confident are you?</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            <button
              type="button"
              onClick={() => handleConfidence("guess")}
              className="flex-1 rounded-xl border border-border bg-card px-3 py-3 text-sm font-semibold text-card-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              Guessing 🎲
            </button>
            <button
              type="button"
              onClick={() => handleConfidence("somewhat")}
              className="flex-1 rounded-xl border border-border bg-card px-3 py-3 text-sm font-semibold text-card-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              Somewhat Sure 🤔
            </button>
            <button
              type="button"
              onClick={() => handleConfidence("sure")}
              className="flex-1 rounded-xl border border-border bg-card px-3 py-3 text-sm font-semibold text-card-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              Confident ✅
            </button>
          </div>
        </div>
      )}

      {showExplanation && (
        <div className="mb-6 rounded-xl border border-success/30 bg-success/5 p-5">
          {confidenceBadge && (
            <p
              className={`mb-3 inline-block rounded-lg border px-3 py-1.5 text-xs font-semibold ${confidenceBadge.className}`}
            >
              {confidenceBadge.text}
            </p>
          )}
          <h3 className="mb-1 text-sm font-semibold text-success">Explanation</h3>
          <p className="text-sm leading-relaxed text-card-foreground/90">{q.explanation}</p>
          {q.notesRef && (
            <Link
              href={getNotesLink(q.week, q.notesRef)}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              <BookOpen className="h-3.5 w-3.5" />
              View in Lecture Notes: Week {q.week} — {q.notesRef}
            </Link>
          )}
        </div>
      )}

      <div className="flex justify-end gap-3">
        {(revealed || mode === "mock") && !timesUpFlash && (
          <button
            type="button"
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
