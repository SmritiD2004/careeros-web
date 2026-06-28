"use client";

import { ArrowUpRight, ArrowUp, Award, Sparkles, Trophy, Zap } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { ActivityItem } from "@/components/ui/ActivityItem";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

const skillCards = [
  ["Frontend mastery", 92],
  ["Backend systems", 84],
  ["Algo readiness", 89],
  ["Interview stamina", 77],
];

const internships = [
  ["Meta", "Offer accepted"],
  ["Stripe", "Final round"],
  ["Amazon", "Resume review"],
];

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="Student Dashboard"
        subtitle="Your employability intelligence hub with 3D polish, animated metrics, and premium career signals."
        action={<StatBadge label="Level" value="Pro" tone="success" />}
      >
        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
          <div className="grid gap-6">
            <div className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-[0_40px_100px_rgba(7,12,24,0.45)]">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Employability dashboard</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Career readiness in action</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">Track XP growth, DSA momentum, and internship progress through high-fidelity SaaS visuals.</p>
                </div>
                <div className="grid gap-2 rounded-[1.75rem] border border-cyan-400/20 bg-white/5 p-4 text-center shadow-[0_20px_60px_rgba(59,130,246,0.12)]">
                  <p className="text-xs uppercase tracking-[0.28em] text-zinc-300">XP points</p>
                  <p className="text-4xl font-semibold text-white">12.4k</p>
                  <span className="text-xs uppercase tracking-[0.24em] text-cyan-200">+9% this week</span>
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-zinc-300 uppercase tracking-[0.28em]">Employability score</p>
                      <p className="mt-3 text-5xl font-semibold text-white">88</p>
                    </div>
                    <div className="h-24 w-24 rounded-full bg-linear-to-br from-cyan-400/20 via-violet-500/15 to-transparent p-3 shadow-[0_20px_60px_rgba(56,189,248,0.18)]">
                      <div className="grid h-full w-full place-items-center rounded-full bg-slate-950/90 text-white">
                        <p className="text-3xl font-semibold">88</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      ["DSA solved", "842"],
                      ["Certs", "6"],
                      ["Offers", "3"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{label}</p>
                        <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(56,189,248,0.08)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Skill analytics</p>
                  <div className="mt-6 space-y-4">
                    {skillCards.map(([name, value]) => (
                      <div key={name}>
                        <div className="flex items-center justify-between text-sm text-zinc-300">
                          <span>{name}</span>
                          <span className="text-white">{value}%</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-linear-to-r from-cyan-400 to-violet-500" style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="glass-panel-soft rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)]">
                <SectionHeader title="DSA progress" description="Your coding momentum and problem distribution." />
                <div className="mt-4 grid gap-3">
                  {[
                    ["Easy", "312", "52%"],
                    ["Medium", "408", "34%"],
                    ["Hard", "122", "14%"],
                  ].map(([label, count, ratio]) => (
                    <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between text-sm text-zinc-300">
                        <span>{label}</span>
                        <span>{ratio}</span>
                      </div>
                      <p className="mt-2 text-white text-lg font-semibold">{count}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel-soft rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)]">
                <SectionHeader title="Internship status" description="Pipeline health across target organizations." />
                <div className="mt-5 space-y-4">
                  {internships.map(([company, status]) => (
                    <div key={company} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-white">{company}</span>
                        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{status}</span>
                      </div>
                      <p className="mt-2 text-sm text-zinc-400">Application progress for campus hiring cohort.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)] floating-card">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Achievement streak</p>
                  <p className="mt-3 text-3xl font-semibold text-white">24 days</p>
                </div>
                  <div className="rounded-3xl bg-linear-to-br from-violet-500/20 to-cyan-400/15 px-4 py-3 text-white shadow-[0_20px_60px_rgba(59,130,246,0.18)]">
                  <Sparkles className="size-5" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">Keep your DSA and interview prep streak alive for next-tier momentum.</p>
            </div>

            <div className="glass-panel-soft rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)]">
              <SectionHeader title="Badge collection" description="Verified accomplishments for your profile." />
              <div className="mt-5 grid gap-3">
                {[
                  ["AI Ready", "Earned"],
                  ["Hackathon Winner", "Earned"],
                  ["Verified Project", "Pending"],
                ].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-4">
                    <span className="text-sm text-white">{label}</span>
                    <span className="text-xs uppercase tracking-[0.24em] text-zinc-400">{status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel-soft rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)]">
              <SectionHeader title="Recent activity" description="Latest actions from your workspace." />
              <div className="mt-5 space-y-3">
                <ActivityItem title="Launched project dashboard case study" meta="1h ago · Portfolio" tone="success" />
                <ActivityItem title="Completed Graphs sprint" meta="4h ago · DSA" />
                <ActivityItem title="Updated resume for campus drive" meta="Yesterday · Career" tone="warning" />
              </div>
            </div>
          </aside>
        </div>
      </PageContainer>
    </AppShell>
  );
}
