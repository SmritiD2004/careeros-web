import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";
import { ActivityItem } from "@/components/ui/ActivityItem";

const topics = [
  ["Arrays", 95],
  ["DP", 86],
  ["Graphs", 72],
  ["Trees", 81],
  ["Greedy", 64],
  ["Binary Search", 90],
];

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="DSA Analytics"
        subtitle="Competitive programming telemetry with premium interview-prep clarity."
        action={<StatBadge label="LeetCode rating" value="1924" tone="warning" />}
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard title="Total solved" value="842" delta="+37 this week" />
          <MetricCard title="Streak" value="19d" delta="Strong consistency" />
          <MetricCard title="Contest rating" value="1924" delta="Top 12%" />
          <MetricCard title="Avg solve time" value="18m" delta="-3m vs last month" />
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader title="Topic coverage" description="Coverage across your most important prep areas." />
            <div className="space-y-4">
              {topics.map(([label, value]) => (
                <div key={label as string}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-zinc-300">{label as string}</span>
                    <span className="text-white">{value as number}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-linear-to-r from-amber-400 to-orange-500" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader title="Recent solves" description="High-signal practice history." />
            <div className="grid gap-3">
              <ActivityItem title="Maximum Subarray with prefix optimization" meta="LeetCode · 16 min · Medium" tone="success" />
              <ActivityItem title="Number of Islands II" meta="LeetCode · 27 min · Hard" />
              <ActivityItem title="Shortest path in binary matrix" meta="InterviewBit · 19 min · Medium" tone="warning" />
            </div>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
}
