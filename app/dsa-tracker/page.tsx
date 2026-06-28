"use client";

import { ArrowUpRight, BarChart3, Clock3, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

const topics = [
  ["Graphs", 86],
  ["Dynamic Programming", 74],
  ["Trees", 91],
  ["Arrays", 96],
];
const difficulties = [
  ["Easy", 42],
  ["Medium", 37],
  ["Hard", 21],
];

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="DSA Tracker"
        subtitle="Track solved problems, difficulty distribution and streak strength with premium analytics." 
        action={<StatBadge label="Solved" value="842" tone="success" />}
      >
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6">
            <div className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-[0_40px_90px_rgba(7,12,24,0.45)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Problem progress</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Solve streak and topic mastery</h2>
                </div>
                <div className="rounded-3xl border border-cyan-400/20 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.28em] text-cyan-200">
                  +3 streak today
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <MetricCard title="DSA solved" value="842" delta="+24 this week" icon={<BarChart3 className="size-4" />} />
                <MetricCard title="Streak" value="19d" delta="On track" icon={<Clock3 className="size-4" />} />
                <MetricCard title="Top difficulty" value="Hard" delta="21% of solves" icon={<ShieldCheck className="size-4" />} />
              </div>
            </div>

            <div className="glass-panel-soft rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)]">
              <SectionHeader title="Topic progress" description="Skill velocity across your highest-value categories." />
              <div className="mt-5 space-y-4">
                {topics.map(([topic, percent]) => (
                  <div key={topic} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-sm text-zinc-300">
                      <span>{topic}</span>
                      <span>{percent}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-linear-to-r from-cyan-400 to-violet-500" style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)]">
              <SectionHeader title="Difficulty distribution" description="How your solved problems break down." />
              <div className="mt-5 space-y-3">
                {difficulties.map(([level, percent]) => (
                  <div key={level} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-sm text-zinc-300">
                      <span>{level}</span>
                      <span>{percent}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-linear-to-r from-violet-500 to-cyan-400" style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel-soft rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)]">
              <h3 className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Achievement timeline</h3>
              <ol className="mt-5 space-y-4 text-sm text-zinc-300">
                <li className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Solved Graph Theory milestone</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-cyan-200">Today</p>
                </li>
                <li className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Completed 100 hours of practice</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-cyan-200">Yesterday</p>
                </li>
                <li className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Earned Verified Problem Solver badge</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-cyan-200">2 days ago</p>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </PageContainer>
    </AppShell>
  );
}
