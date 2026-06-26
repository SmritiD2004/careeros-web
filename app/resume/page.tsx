import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="Resume Intelligence"
        subtitle="ATS optimization center with versioning and keyword coverage."
        action={<StatBadge label="ATS score" value="84/100" tone="warning" />}
      >
        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-6">
            <MetricCard title="Resume score" value="84%" delta="+7 after keyword refresh" />
            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <SectionHeader title="Weak sections" />
              <div className="space-y-3 text-sm text-zinc-300">
                {[
                  "Experience bullets need measurable outcomes",
                  "Projects should name technologies earlier",
                  "Add stronger impact verbs and results",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <SectionHeader title="Missing keywords" />
              <div className="flex flex-wrap gap-2">
                {[
                  "System design",
                  "REST APIs",
                  "PostgreSQL",
                  "Docker",
                  "Distributed systems",
                  "Testing",
                ].map((kw) => (
                  <span key={kw} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <SectionHeader title="Version history" />
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">v7 · ATS-focused rewrite · Today</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">v6 · Projects reordered · 2 days ago</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">v5 · Baseline template · Last week</div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
}
