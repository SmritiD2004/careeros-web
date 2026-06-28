
"use client";

import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Award,
  Sparkles,
} from "lucide-react";

import { AppShell } from "@/components/layout/AppShell";

import { ScoreRing } from "@/components/ui/ScoreRing";
import { StatBadge } from "@/components/ui/StatBadge";

import PerformanceMap from "@/components/ui/PerformanceMap";
import InternshipPipeline from "@/components/ui/InternshipPipeline";
import RecentActivity from "@/components/ui/RecentActivity";
import WeeklyChart from "@/components/ui/WeeklyChart";
import AICoachCard from "@/components/ui/AICoachCard";
import AchievementBadge from "@/components/ui/AchievementBadge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

function DashboardCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 backdrop-blur-xl transition-all duration-300 shadow-[0_40px_120px_rgba(7,12,24,0.35)] hover:shadow-[0_40px_140px_rgba(255,87,34,0.16)]">
      {children}
    </div>
  );
}

export default function Page() {
  const user = {
    name: "Aarav",
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <AppShell>
      <main className="flex-1 px-4 py-5 lg:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
              {today}
            </p>

            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
              Hello, {user.name}.
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <StatBadge
              label="Rank"
              value="Platinum II"
              tone="success"
            />

            <div className="
              rounded-full
              border border-orange-500/20
              bg-orange-500/10
              px-4 py-2
              text-xs uppercase
              tracking-[0.28em]
              text-orange-300
            ">
              +23 this week
            </div>
          </div>
        </div>

        {/* Top Row */}
        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr_0.95fr]">

          {/* Employability */}
          <DashboardCard>
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Employability Index
                </p>

                <div className="
                  mt-4 inline-flex items-center gap-2
                  rounded-full
                  bg-orange-500/10
                  px-3 py-2
                  text-xs uppercase
                  tracking-[0.28em]
                  text-orange-300
                ">
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  Platinum II · Top 4%
                </div>
              </div>

              <div className="
                rounded-[1.75rem]
                border border-white/10
                bg-white/5
                p-4
              ">
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Live Score
                </p>

                <AnimatedCounter
                  value={847}
                  className="mt-3 text-4xl font-semibold text-white"
                />

                <p className="mt-1 text-sm text-orange-300">
                  +23 this week
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1fr] xl:items-center">
              <div className="mx-auto w-full max-w-65">
                <ScoreRing
                  score={847}
                  max={1000}
                  label="Employability Score"
                />
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                    XP Total
                  </p>

                  <AnimatedCounter
                    value={12480}
                    className="mt-3 text-2xl font-semibold text-white"
                  />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                    Streak
                  </p>

                  <AnimatedCounter
                    value={47}
                    suffix="d active"
                    className="mt-3 text-2xl font-semibold text-white"
                  />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                    Percentile
                  </p>

                  <AnimatedCounter
                    value={96}
                    suffix="%"
                    className="mt-3 text-2xl font-semibold text-white"
                  />
                </div>
              </div>
            </div>
          </DashboardCard>

          <PerformanceMap />

          {/* DSA */}
          <DashboardCard>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Problems Solved
                </p>

                <AnimatedCounter
                  value={455}
                  className="mt-3 text-5xl font-semibold text-white"
                />
              </div>

              <button className="
                inline-flex items-center gap-2
                rounded-3xl
                border border-white/10
                bg-black/20
                px-4 py-3
                text-sm text-orange-300
                transition hover:bg-orange-500/10
              ">
                Open Tracker
                <ArrowUpRight className="size-4" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="grid gap-2 text-sm text-zinc-400">
                <div className="flex justify-between">
                  <span>184 Easy</span>
                  <span className="text-white">Easy</span>
                </div>

                <div className="flex justify-between">
                  <span>213 Medium</span>
                  <span className="text-white">Medium</span>
                </div>

                <div className="flex justify-between">
                  <span>58 Hard</span>
                  <span className="text-white">Hard</span>
                </div>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[65%] bg-linear-to-r from-orange-500 via-orange-400 to-rose-500" />
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Weekly + Achievements */}
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_0.95fr]">
          <WeeklyChart />

          <DashboardCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Achievements
                </p>

                <p className="mt-3 text-2xl font-semibold text-white">
                  6 badges earned
                </p>
              </div>

              <Sparkles className="size-5 text-orange-300" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <AchievementBadge title="Streak Master" unlocked icon="streak" />
              <AchievementBadge title="DSA Slayer" icon="dsa" />
              <AchievementBadge title="Open Source" icon="opensource" />
              <AchievementBadge title="Hackathon Winner" icon="hackathon" />
              <AchievementBadge title="Speed Coder" icon="speed" />
              <AchievementBadge title="Top 1%" icon="top" />
            </div>
          </DashboardCard>
        </div>

        {/* Certifications */}
        <div className="mt-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 backdrop-blur-xl shadow-[0_40px_120px_rgba(255,87,34,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                Certifications
              </p>

              <p className="mt-3 text-2xl font-semibold text-white">
                3 verified credentials
              </p>
            </div>

            <Award className="size-5 text-orange-300" />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["AWS Solutions Architect", "Amazon · Dec 2025"],
              ["TensorFlow Developer", "Google · Sep 2025"],
              ["Meta Frontend Pro", "Meta · Jun 2025"],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="
                  rounded-[1.75rem]
                  border border-white/10
                  bg-linear-to-br
                  from-orange-500/10
                  to-transparent
                  p-5
                "
              >
                <p className="text-sm font-semibold text-white">
                  {title}
                </p>

                <p className="mt-3 text-xs text-zinc-400">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline + Activity */}
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <InternshipPipeline />
          <RecentActivity />
        </div>

        {/* AI Coach */}
        <div className="mt-6">
          <AICoachCard />
        </div>
      </main>
    </AppShell>
  );
}