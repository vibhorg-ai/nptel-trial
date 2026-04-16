"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  ClipboardList,
  Trophy,
  TrendingUp,
  Target,
  RotateCcw,
  AlertTriangle,
  Download,
  Upload,
  Gauge,
  ListOrdered,
} from "lucide-react";
import {
  loadProgress,
  getOverallStats,
  getMissedQuestionIds,
  getWeakTopics,
  getWeekCoverage,
  getRecentWeakQuestionIds,
  getCramPlan,
  exportProgress,
  importProgress,
  estimatePassProbability,
} from "@/lib/progress";
import { weeks } from "@/data/weeks";
import { questions } from "@/data/questions";
import type { UserProgress } from "@/lib/types";
import type { CramAction } from "@/lib/progress";

type WeakTopicRow = ReturnType<typeof getWeakTopics>[number];
type CoverageRow = ReturnType<typeof getWeekCoverage>[number];

export default function Home() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [missedCount, setMissedCount] = useState(0);
  const [weakTopics, setWeakTopics] = useState<WeakTopicRow[]>([]);
  const [coverage, setCoverage] = useState<CoverageRow[]>([]);
  const [weakCount, setWeakCount] = useState(0);
  const [cramPlan, setCramPlan] = useState<CramAction[]>([]);
  const [importStatus, setImportStatus] = useState<"idle" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setProgress(loadProgress());
    setMissedCount(getMissedQuestionIds().length);
    setWeakTopics(getWeakTopics(questions).slice(0, 5));
    setCoverage(getWeekCoverage(questions));
    setWeakCount(getRecentWeakQuestionIds(questions).length);
    setCramPlan(
      getCramPlan(
        questions,
        weeks.map((w) => ({ week: w.week, title: w.title }))
      )
    );
  }, []);

  const stats = progress ? getOverallStats(progress) : null;
  const passEstimate = progress ? estimatePassProbability(questions) : null;
  const totalQuestions = questions.length;
  const lastWeek = progress?.lastActiveWeek;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <section className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          NPTEL Affective Computing — Cram Mode
        </h1>
        <p className="mx-auto max-w-xl text-muted-foreground">
          One night before the exam? Cover all 12 weeks, find your weak spots
          fast, fix them with targeted quizzes, then prove it with a timed mock.
        </p>
      </section>

      {/* Stats overview */}
      <section className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {passEstimate ? (
          <PassProbabilityCard estimate={passEstimate} />
        ) : (
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center">
              <Gauge className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold text-card-foreground">—</p>
            <p className="text-xs text-muted-foreground">Pass Probability</p>
          </div>
        )}
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

      {cramPlan.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <ListOrdered className="h-5 w-5 shrink-0 text-primary" />
            Your Cram Plan
          </h2>
          <div className="grid gap-3">
            {cramPlan.slice(0, Math.min(5, cramPlan.length)).map((action, index) => {
              const isFirst = index === 0;
              const stepLabel = (() => {
                if (action.type === "study") {
                  return `Study Week ${action.week}`;
                }
                if (action.type === "practice") {
                  return `Practice Week ${action.week}`;
                }
                if (action.type === "fix-weak") {
                  return `Fix ${action.count} weak question${action.count === 1 ? "" : "s"}`;
                }
                if (action.type === "mock") {
                  return "Timed mock exam";
                }
                return "You are set";
              })();

              const inner = (
                <>
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-card-foreground">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-medium text-card-foreground">{stepLabel}</p>
                        {isFirst && (
                          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                            Start here
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{action.reason}</p>
                      {(action.type === "study" || action.type === "practice") && (
                        <p className="mt-1 truncate text-xs text-muted-foreground">
                          {action.title}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              );

              const cardClass = `block rounded-xl border bg-card p-5 transition-colors ${
                isFirst
                  ? "border-primary/50 ring-2 ring-primary/20 hover:border-primary"
                  : "border-border hover:border-primary/40"
              }`;

              if (action.type === "done") {
                return (
                  <div key={`cram-done-${index}`} className={cardClass}>
                    {inner}
                  </div>
                );
              }

              const href =
                action.type === "study"
                  ? `/weeks/${action.week}`
                  : action.type === "practice"
                    ? `/quiz?week=${action.week}&mode=practice`
                    : action.type === "fix-weak"
                      ? "/quiz?mode=review"
                      : "/mock";

              return (
                <Link key={`cram-${action.type}-${index}`} href={href} className={cardClass}>
                  {inner}
                </Link>
              );
            })}
          </div>
          {cramPlan.length > 5 && (
            <p className="mt-2 text-xs text-muted-foreground">
              Showing 5 of {cramPlan.length} steps — keep going after these.
            </p>
          )}
        </section>
      )}

      {/* Quick actions */}
      <section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            description="Begin with Week 1"
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
              : "Test yourself on any week"
          }
          accent="accent"
        />
        <ActionCard
          href="/mock"
          icon={<Trophy className="h-6 w-6" />}
          title="Mock Exam"
          description="45-min timed, stratified across all weeks"
          accent="warning"
        />
        {weakCount > 0 ? (
          <ActionCard
            href="/quiz?mode=review"
            icon={<AlertTriangle className="h-6 w-6" />}
            title="Fix Weak Areas"
            description={`${weakCount} questions you keep getting wrong`}
            accent="warning"
          />
        ) : (
          <ActionCard
            href="/assignments"
            icon={<BookOpen className="h-6 w-6" />}
            title="PYQ Bank"
            description="2026 + 2025 assignments"
            accent="primary"
          />
        )}
      </section>

      {/* Week coverage heatmap */}
      {coverage.length > 0 && stats && stats.totalSessions > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Week Coverage</h2>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
            {coverage.map((c) => {
              let bg = "bg-secondary";
              if (c.pct >= 80) bg = "bg-success";
              else if (c.pct >= 50) bg = "bg-primary";
              else if (c.pct > 0) bg = "bg-warning";
              return (
                <Link
                  key={c.week}
                  href={`/quiz?week=${c.week}&mode=practice`}
                  className="group flex flex-col items-center rounded-lg border border-border bg-card p-2 text-center transition-colors hover:border-primary/40"
                >
                  <span className="text-xs font-semibold text-muted-foreground">
                    W{c.week}
                  </span>
                  <div className="my-1 h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full rounded-full ${bg}`}
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                  <span className="text-[10px] tabular-nums text-muted-foreground">
                    {c.attempted}/{c.total}
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Tap any week to practice it. Bars show how many questions you have attempted.
          </p>
        </section>
      )}

      {weakTopics.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <AlertTriangle
              className={`h-5 w-5 shrink-0 ${
                weakTopics.some((t) => t.pct < 30) ? "text-destructive" : "text-warning"
              }`}
            />
            Focus Areas
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {weakTopics.map((t) => (
              <Link
                key={`${t.week}-${t.topic}`}
                href={`/quiz?week=${t.week}&mode=practice`}
                className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-card-foreground">{t.topic}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Week {t.week}</p>
                  </div>
                  <span
                    className={`shrink-0 text-sm font-semibold tabular-nums ${
                      t.pct < 30 ? "text-destructive" : "text-warning"
                    }`}
                  >
                    {t.pct}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t.correct} / {t.total} correct
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Progress data management */}
      <section className="mb-10 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Progress Data
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              const data = exportProgress();
              const blob = new Blob([data], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `nptel-ac-progress-${new Date().toISOString().slice(0, 10)}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-primary/40"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-primary/40"
          >
            <Upload className="h-4 w-4" />
            Import
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => {
                const ok = importProgress(reader.result as string);
                setImportStatus(ok ? "success" : "error");
                if (ok) {
                  setProgress(loadProgress());
                  setMissedCount(getMissedQuestionIds().length);
                  setWeakTopics(getWeakTopics(questions).slice(0, 5));
                  setCoverage(getWeekCoverage(questions));
                  setWeakCount(getRecentWeakQuestionIds(questions).length);
                  setCramPlan(
                    getCramPlan(
                      questions,
                      weeks.map((w) => ({ week: w.week, title: w.title }))
                    )
                  );
                }
                setTimeout(() => setImportStatus("idle"), 3000);
              };
              reader.readAsText(file);
              e.target.value = "";
            }}
          />
          {importStatus === "success" && (
            <span className="text-sm font-medium text-success">Imported successfully</span>
          )}
          {importStatus === "error" && (
            <span className="text-sm font-medium text-error">Invalid file format</span>
          )}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Back up your progress or transfer it to another device.
        </p>
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

function PassProbabilityCard({
  estimate,
}: {
  estimate: ReturnType<typeof estimatePassProbability>;
}) {
  const p = estimate.probability;
  const tierClass =
    p < 40
      ? "text-destructive"
      : p < 60
        ? "text-warning"
        : p < 80
          ? "text-blue-500 dark:text-blue-400"
          : "text-success";

  const strokeClass =
    p < 40
      ? "stroke-destructive"
      : p < 60
        ? "stroke-warning"
        : p < 80
          ? "stroke-blue-500 dark:stroke-blue-400"
          : "stroke-success";

  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - p / 100);

  return (
    <div className="rounded-xl border border-border bg-card p-4 text-center">
      <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center">
        <Gauge className={`h-5 w-5 ${tierClass}`} />
      </div>
      <div className="mx-auto flex max-w-[160px] flex-col items-center gap-2">
        <div className="relative h-[72px] w-[72px] shrink-0">
          <svg className="h-[72px] w-[72px] -rotate-90" viewBox="0 0 88 88" aria-hidden>
            <circle
              cx="44"
              cy="44"
              r={r}
              fill="none"
              className="stroke-muted"
              strokeWidth="8"
            />
            <circle
              cx="44"
              cy="44"
              r={r}
              fill="none"
              className={strokeClass}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={c}
              style={{ strokeDashoffset: offset }}
            />
          </svg>
          <span
            className={`pointer-events-none absolute inset-0 flex items-center justify-center text-lg font-bold tabular-nums ${tierClass}`}
          >
            {p}%
          </span>
        </div>
        <p className="text-xs font-medium text-muted-foreground">Pass Probability</p>
        <p className="text-[10px] leading-snug text-muted-foreground">{estimate.recommendation}</p>
      </div>
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
