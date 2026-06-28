"use client";

import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

const pipeline = [
  ["Application submitted", "Completed"],
  ["HR verification", "In review"],
  ["Offer validation", "Pending"],
  ["Credential issued", "Scheduled"],
];

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="Internship Verification"
        subtitle="Track your approval pipeline and digital credential issuance with clarity."
        action={<StatBadge label="Verified" value="72%" tone="warning" />}
      >
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-[0_40px_100px_rgba(7,12,24,0.45)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Verification workflow</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Meta Product Engineering Intern</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">Submission is in the final review stage. Digital credentials will be generated once verification completes.</p>
              </div>
              <div className="rounded-[1.75rem] border border-cyan-400/20 bg-white/5 p-5 text-center shadow-[0_20px_60px_rgba(59,130,246,0.14)]">
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">Credential readiness</p>
                <p className="mt-3 text-4xl font-semibold text-white">72%</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {pipeline.map(([step, status], index) => (
                <div key={step} className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-base font-semibold text-white">{step}</p>
                    <p className="mt-1 text-sm text-zinc-400">{status === "Completed" ? "Submission successful" : status === "In review" ? "Verification team reviewing" : status === "Pending" ? "Awaiting final approval" : "Credential generation queued"}</p>
                  </div>
                  <span className="h-9 rounded-full bg-[linear-gradient(135deg,rgba(56,189,248,0.22),rgba(139,92,246,0.18))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel-soft rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_60px_rgba(7,12,24,0.35)]">
            <SectionHeader title="Verification highlights" description="Earned trust signals for your career profile." />
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-zinc-300">Verified by</p>
                <p className="mt-2 text-white font-semibold">Meta HR Compliance</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-zinc-300">Document checks</p>
                <p className="mt-2 text-white font-semibold">Resume, ID, offer letter</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-zinc-300">Next step</p>
                <p className="mt-2 text-white font-semibold">Generate digital badge</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_40px_80px_rgba(7,12,24,0.35)]">
          <SectionHeader title="Approval timeline" description="From submission to credential issuance." />
          <div className="space-y-5">
            {[
              ["Day 1", "Submission captured"],
              ["Day 2", "HR documents validated"],
              ["Day 3", "Team review in progress"],
              ["Day 4", "Final credential issued"],
            ].map(([day, event]) => (
              <div key={day} className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-3xl bg-cyan-400/10 text-cyan-200 shadow-[0_10px_30px_rgba(56,189,248,0.12)]">
                  {day}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{event}</p>
                  <p className="text-xs text-zinc-500">Progress step in the verification pipeline</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
}
