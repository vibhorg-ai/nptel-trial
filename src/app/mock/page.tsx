"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, Clock, AlertTriangle } from "lucide-react";
import { questions as allQuestions } from "@/data/questions";
import { getStratifiedMock, shuffleArray, shuffleQuestionOptions } from "@/lib/quiz";
import { getRecentWeakQuestionIds } from "@/lib/progress";
import { QuizEngine } from "@/components/quiz-engine";
import { QuizResults } from "@/components/quiz-results";
import type { Question, QuizSession } from "@/lib/types";

const PRESET_OPTIONS = [
  { count: 10, minutes: 15 },
  { count: 20, minutes: 30 },
  { count: 30, minutes: 45 },
  { count: 50, minutes: 75 },
  { count: 120, minutes: 180 },
] as const;

const MAX_QUESTIONS = allQuestions.length;

export default function MockExamPage() {
  const [phase, setPhase] = useState<"intro" | "playing" | "results">("intro");
  const [selectedPreset, setSelectedPreset] = useState(2); // default: 30 questions
  const [mockQuestions, setMockQuestions] = useState<Question[]>([]);
  const [session, setSession] = useState<QuizSession | null>(null);
  const [mockSessionStart, setMockSessionStart] = useState<number | null>(null);
  const [timeLimitMs, setTimeLimitMs] = useState(45 * 60 * 1000);

  const startMock = useCallback(() => {
    const preset = PRESET_OPTIONS[selectedPreset];
    const count = Math.min(preset.count, MAX_QUESTIONS);
    const salt = Date.now();
    const weakIds = getRecentWeakQuestionIds(allQuestions);
    const qs = getStratifiedMock(allQuestions, count, weakIds).map((q) =>
      shuffleQuestionOptions(q, salt)
    );
    const limit = preset.minutes * 60 * 1000;
    setTimeLimitMs(limit);
    setMockSessionStart(Date.now());
    setMockQuestions(qs);
    setPhase("playing");
    setSession(null);
  }, [selectedPreset]);

  const handleComplete = useCallback((s: QuizSession) => {
    setSession(s);
    setPhase("results");
  }, []);

  const handleRetryMissed = useCallback(() => {
    if (!session) return;
    const missedIds = session.attempts
      .filter((a) => !a.isCorrect)
      .map((a) => a.questionId);
    const salt = Date.now();
    const qs = shuffleArray(
      allQuestions.filter((q) => missedIds.includes(q.id))
    ).map((q) => shuffleQuestionOptions(q, salt));
    const limit = Math.ceil((missedIds.length / 30) * 45) * 60 * 1000;
    setTimeLimitMs(limit);
    setMockSessionStart(Date.now());
    setMockQuestions(qs);
    setPhase("playing");
    setSession(null);
  }, [session]);

  const preset = PRESET_OPTIONS[selectedPreset];

  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <Trophy className="mx-auto mb-4 h-12 w-12 text-warning" />
        <h1 className="mb-2 text-2xl font-bold">Mock Exam</h1>
        <p className="mb-8 text-muted-foreground">
          Simulate the NPTEL exam: pick your question count, get a hard time
          limit, stratified across all 12 weeks with extra weight on your weak
          areas.
        </p>

        {/* Question count selector */}
        <div className="mb-6">
          <p className="mb-3 text-sm font-medium text-card-foreground">
            How many questions?
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {PRESET_OPTIONS.map((opt, idx) => {
              const capped = Math.min(opt.count, MAX_QUESTIONS);
              const active = idx === selectedPreset;
              return (
                <button
                  key={opt.count}
                  type="button"
                  onClick={() => setSelectedPreset(idx)}
                  className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                    active
                      ? "border-primary bg-primary text-primary-foreground ring-2 ring-primary/20"
                      : "border-border bg-card text-card-foreground hover:border-primary/40"
                  }`}
                >
                  <span className="text-lg">{capped}</span>
                  <span className="ml-1 text-xs opacity-70">
                    / {opt.minutes}m
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {Math.min(preset.count, MAX_QUESTIONS)} questions in{" "}
            {preset.minutes} minutes ({(preset.minutes / Math.min(preset.count, MAX_QUESTIONS) * 60).toFixed(0)}s per question)
          </p>
        </div>

        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left text-sm">
            <Clock className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">{preset.minutes}-Minute Hard Limit</p>
              <p className="text-muted-foreground">
                Countdown timer runs from the start. Unanswered questions
                auto-submit as wrong when time expires.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left text-sm">
            <AlertTriangle className="h-5 w-5 shrink-0 text-warning" />
            <div>
              <p className="font-medium">Exam-Style: No Hints</p>
              <p className="text-muted-foreground">
                No explanations during the test. Right-click or Shift+click
                options to eliminate them, just like scratching out wrong answers
                on paper.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={startMock}
          className="rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start Mock Exam ({Math.min(preset.count, MAX_QUESTIONS)}Q / {preset.minutes}m)
        </button>

        <div className="mt-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-1 inline h-4 w-4" />
            Back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (phase === "results" && session) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <QuizResults
          session={session}
          questions={mockQuestions}
          onRetryMissed={handleRetryMissed}
          onRetryAll={() => {
            setPhase("intro");
            setSession(null);
          }}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <QuizEngine
        questions={mockQuestions}
        mode="mock"
        week={null}
        onComplete={handleComplete}
        timeLimitMs={timeLimitMs}
        sessionStartTime={mockSessionStart ?? undefined}
      />
    </div>
  );
}
