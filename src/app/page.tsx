"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, ClipboardList, Trophy, TrendingUp, Target, RotateCcw } from "lucide-react";
import { loadProgress, getOverallStats, getMissedQuestionIds } from "@/lib/progress";
import { weeks } from "@/data/weeks";
import { questions } from "@/data/questions";
import type { UserProgress } from "@/lib/types";

export default function Home() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const stats = progress ? getOverallStats(progress) : null;
  const missedCount = getMissedQuestionIds().length;
  const totalQuestions = questions.length;
  const totalWeeks = weeks.length;
  const lastWeek = progress?.lastActiveWeek;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <section className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          NPTEL Affective Computing Prep
        </h1>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Master the 2026 NPTEL Affective Computing course. Study concepts
          week-by-week, practice with assignment questions, and test yourself
          with mock exams.
        </p>
      </section>

      {/* Stats overview */}
      <section className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard
          icon={<BookOpen className="h-5 w-5 text-primary" />}
          label="Weeks"
          value={totalWeeks}
        />
        <StatCard
          icon={<ClipboardList className="h-5 w-5 text-accent" />}
          label="Questions"
          value={totalQuestions}
        />
        <StatCard
          icon={<Target className="h-5 w-5 text-success" />}
          label="Accuracy"
          value={stats ? `${stats.accuracy}%` : "—"}
        />
        <StatCard
          icon={<TrendingUp className="h-5 w-5 text-warning" />}
          label="Sessions"
          value={stats?.totalSessions ?? 0}
        />
      </section>

      {/* Quick actions */}
      <section className="mb-10 grid gap-4 sm:grid-cols-3">
        {lastWeek ? (
          <ActionCard
            href={`/weeks/${lastWeek}`}
            icon={<RotateCcw className="h-6 w-6" />}
            title={`Resume Week ${lastWeek}`}
            description={weeks.find((w) => w.week === lastWeek)?.title ?? ""}
            accent="primary"
          />
        ) : (
          <ActionCard
            href="/weeks/1"
            icon={<BookOpen className="h-6 w-6" />}
            title="Start Studying"
            description="Begin with Week 1 — Introduction to Affective Computing"
            accent="primary"
          />
        )}
        <ActionCard
          href="/quiz"
          icon={<ClipboardList className="h-6 w-6" />}
          title="Practice Quiz"
          description={
            missedCount > 0
              ? `${missedCount} missed questions to review`
              : "Test yourself on any week's questions"
          }
          accent="accent"
        />
        <ActionCard
          href="/mock"
          icon={<Trophy className="h-6 w-6" />}
          title="Mock Exam"
          description="Timed 20-question test across all weeks"
          accent="warning"
        />
      </section>

      {/* Week progress */}
      <section>
        <h2 className="mb-4 text-lg font-semibold">Week Progress</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {weeks.map((w) => {
            const wp = progress?.weekProgress[w.week];
            const weekQuestionCount = questions.filter(
              (q) => q.week === w.week
            ).length;
            const pct =
              wp && wp.totalQuestions > 0
                ? Math.round((wp.correctAnswers / wp.totalQuestions) * 100)
                : 0;

            return (
              <Link
                key={w.week}
                href={`/weeks/${w.week}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  W{w.week}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-card-foreground group-hover:text-primary">
                    {w.title}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{weekQuestionCount} questions</span>
                    {wp && wp.attempts > 0 && (
                      <>
                        <span>&middot;</span>
                        <span>{pct}% correct</span>
                        <span>&middot;</span>
                        <span>
                          {wp.attempts} attempt{wp.attempts !== 1 && "s"}
                        </span>
                      </>
                    )}
                  </div>
                  {wp && wp.totalQuestions > 0 && (
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 text-center">
      <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center">{icon}</div>
      <p className="text-2xl font-bold text-card-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function ActionCard({
  href,
  icon,
  title,
  description,
  accent,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}) {
  const colorMap: Record<string, string> = {
    primary: "border-primary/30 hover:border-primary text-primary",
    accent: "border-accent/30 hover:border-accent text-accent",
    warning: "border-warning/30 hover:border-warning text-warning",
  };

  return (
    <Link
      href={href}
      className={`flex flex-col gap-2 rounded-xl border bg-card p-5 transition-colors ${colorMap[accent] ?? colorMap.primary}`}
    >
      <div>{icon}</div>
      <h3 className="font-semibold text-card-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
