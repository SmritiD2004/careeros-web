import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="Recommendations"
        subtitle="AI preparation coach — your placement mentor lives here."
        action={<StatBadge label="Deadline" value="Fri 7pm" tone="warning" />}
      >
        <div className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6 xl:col-span-2">
            <SectionHeader
              title="Priority queue"
              description="The fastest route to visible improvement."
            />
            <div className="grid gap-3">
              <RecommendationCard
                title="Solve 3 graph problems"
                reason="Graphs are the strongest gap in your current coverage. This improves both DSA and readiness."
                meta="High impact · Today"
              />
              <RecommendationCard
                title="Finish resume keyword tuning"
                reason="ATS alignment is the simplest lever for more interview callbacks."
                meta="High impact · Tonight"
              />
              <RecommendationCard
                title="Ship project metrics section"
                reason="A polished case study communicates premium quality and production thinking."
                meta="High impact · This week"
              />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader title="Weekly objectives" />
            <div className="space-y-3 text-sm text-zinc-300">
              {[
                "12 DSA solves",
                "1 resume revision",
                "1 mock interview",
                "1 project shipping sprint",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
}
