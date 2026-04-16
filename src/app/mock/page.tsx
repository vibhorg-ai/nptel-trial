"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, Clock, AlertTriangle } from "lucide-react";
import { questions as allQuestions } from "@/data/questions";
import { getQuestionsForMock, shuffleArray } from "@/lib/quiz";
import { QuizEngine } from "@/components/quiz-engine";
import { QuizResults } from "@/components/quiz-results";
import type { Question, QuizSession } from "@/lib/types";

const MOCK_SIZE = 20;

export default function MockExamPage() {
  const [phase, setPhase] = useState<"intro" | "playing" | "results">("intro");
  const [mockQuestions, setMockQuestions] = useState<Question[]>([]);
  const [session, setSession] = useState<QuizSession | null>(null);

  const startMock = useCallback(() => {
    const qs = getQuestionsForMock(allQuestions, MOCK_SIZE);
    setMockQuestions(qs);
    setPhase("playing");
    setSession(null);
  }, []);

  const handleComplete = useCallback((s: QuizSession) => {
    setSession(s);
    setPhase("results");
  }, []);

  const handleRetryMissed = useCallback(() => {
    if (!session) return;
    const missedIds = session.attempts
      .filter((a) => !a.isCorrect)
      .map((a) => a.questionId);
    const qs = shuffleArray(
      allQuestions.filter((q) => missedIds.includes(q.id))
    );
    setMockQuestions(qs);
    setPhase("playing");
    setSession(null);
  }, [session]);

  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <Trophy className="mx-auto mb-4 h-12 w-12 text-warning" />
        <h1 className="mb-2 text-2xl font-bold">Mock Exam</h1>
        <p className="mb-8 text-muted-foreground">
          Simulate the NPTEL exam with a timed {MOCK_SIZE}-question test across
          all weeks. Questions are shuffled randomly each time.
        </p>

        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left text-sm">
            <Clock className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">Timed Mode</p>
              <p className="text-muted-foreground">
                A timer runs throughout — you'll see your total time at the end.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left text-sm">
            <AlertTriangle className="h-5 w-5 shrink-0 text-warning" />
            <div>
              <p className="font-medium">No Instant Feedback</p>
              <p className="text-muted-foreground">
                Unlike practice mode, you won't see explanations until you
                submit each answer.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={startMock}
          className="rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start Mock Exam
        </button>

        <div className="mt-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
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
          questions={allQuestions}
          onRetryMissed={handleRetryMissed}
          onRetryAll={startMock}
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
      />
    </div>
  );
}
