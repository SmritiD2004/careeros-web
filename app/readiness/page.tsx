import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="Company Readiness"
        subtitle="Career intelligence center for target-company prep."
        action={<StatBadge label="Gap" value="12 topics" tone="warning" />}
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <CompanyCard
            name="Amazon"
            score={82}
            status="Strong DSA and backend readiness; keep strengthening behaviorals."
          />
          <CompanyCard
            name="Microsoft"
            score={79}
            status="Product thinking and system design are in a good place."
          />
          <CompanyCard
            name="Google"
            score={71}
            status="Algorithmic depth is solid, but graph and DP coverage need polish."
          />
          <CompanyCard
            name="TCS"
            score={94}
            status="Excellent overall match for current profile depth."
          />
          <CompanyCard
            name="Infosys"
            score={91}
            status="Ready for core interview cycles with minor ATS tuning."
          />
          <CompanyCard
            name="Accenture"
            score={88}
            status="Balanced profile for consulting-oriented placements."
          />
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader
              title="Readiness trend"
              description="Trendline reflects interview prep, projects, and skill coverage."
            />
            <div className="h-64 rounded-3xl border border-white/10 bg-black/20 p-4">
              <div className="flex h-full items-end gap-3">
                {[48, 54, 61, 66, 70, 76, 82].map((value, index) => (
                  <div key={index} className="flex-1">
                    <div
                      className="rounded-t-2xl bg-gradient-to-t from-amber-500 to-orange-300"
                      style={{ height: `${value}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <MetricCard
              title="Skill gap"
              value="12%"
              delta="Mostly interview depth and production readiness"
            />
            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <SectionHeader title="Weak topics" />
              <div className="space-y-3 text-sm text-zinc-300">
                {["Graph traversal", "Concurrency", "Database indexing"].map((topic) => (
                  <div key={topic} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
}
