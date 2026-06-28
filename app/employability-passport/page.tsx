"use client";

import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

const badges = [
  "Top 5% Achiever",
  "DSA Mastery",
  "Profile Verified",
  "Interview Ready",
];

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="Employability Passport"
        subtitle="A premium career portfolio that captures your skills, internships, and professional credentials."
        action={<StatBadge label="Passport" value="Elite" tone="success" />}
      >
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-[0_40px_80px_rgba(7,12,24,0.5)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Personal passport</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Shreya Kapoor</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                  Software engineer with verified internship history, project portfolio, and a validated employability score.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-cyan-400/20 bg-white/5 p-4 text-center shadow-[0_20px_60px_rgba(59,130,246,0.08)]">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">Employability score</p>
                <p className="mt-3 text-5xl font-semibold text-white">91</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-cyan-300/80">Premium benchmark</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 shadow-inner shadow-slate-950/30">
              <div className="grid gap-3 sm:grid-cols-2">
                <MetricCard title="Skills verified" value="14" delta="Strong domain coverage" />
                <MetricCard title="Projects live" value="8" delta="Portfolio ready" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <MetricCard title="Certifications" value="6" delta="Trusted credentials" />
                <MetricCard title="Internships" value="3" delta="Verified companies" />
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-[0_40px_80px_rgba(7,12,24,0.4)]">
            <SectionHeader title="Credentials Snapshot" description="Trusted evidence ready for placement reviews." />
            <div className="grid gap-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-zinc-300">GitHub profile</p>
                <p className="mt-2 text-white font-semibold">github.com/shreya.dev</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-zinc-300">Lead project</p>
                <p className="mt-2 text-white font-semibold">CareerOS Intelligence Dashboard</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-zinc-300">Internship credential</p>
                <p className="mt-2 text-white font-semibold">Meta Product Engineering</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">Badge gallery</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200 shadow-[0_20px_40px_rgba(15,23,42,0.25)]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="glass-panel-soft rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)]">
            <SectionHeader title="Skills & achievements" description="Your career credentials in a premium layout." />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium text-white">Core skills</p>
                <div className="mt-4 space-y-3">
                  {[
                    ["System Design", "92%"],
                    ["React & Next.js", "89%"],
                    ["DSA & Algorithms", "86%"],
                  ].map(([title, value]) => (
                    <div key={title}>
                      <div className="flex items-center justify-between text-sm text-zinc-300">
                        <span>{title}</span>
                        <span>{value}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-linear-to-r from-cyan-400 to-violet-500" style={{ width: value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium text-white">Latest verification</p>
                <p className="mt-3 leading-7 text-sm text-zinc-400">
                  Internship record verified by company HR, coding badge confirmed, and portfolio projects notarized for recruiter review.
                </p>
                <div className="mt-5 space-y-3">
                  {[
                    "Verified internship with Salesforce",
                    "GitHub repo audit passed",
                    "Resume ATS score 92",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-zinc-300">
                      <span className="size-2 rounded-full bg-cyan-400/20" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-[0_40px_80px_rgba(7,12,24,0.35)]">
            <SectionHeader title="Career timeline" description="Milestones and credential moments." />
            <div className="space-y-4">
              {[
                ["Project shipped", "Analytics dashboard completed"],
                ["Credential granted", "Meta internship verified"],
                ["Skill milestone", "DSA rating crossed 1900"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-2 text-sm text-zinc-400">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
}
