import { Flame, GitBranch, Target, Trophy, Zap } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { ActivityItem } from "@/components/ui/ActivityItem";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

const weekBars = [38, 62, 45, 74, 58, 91, 66];

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="Command Center"
        subtitle="Your employability, momentum, and company readiness in one premium workspace."
        action={<StatBadge label="Placement status" value="On track" tone="success" />}
      >
        <div className="grid gap-6 xl:grid-cols-[1.1fr_1.9fr]">
          <div className="grid gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <SectionHeader
                title="Employability score"
                description="Composite signal across skills, projects, and interview prep."
              />
              <div className="flex items-center justify-center py-6">
                <ScoreRing score={86} label="overall" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <MetricCard
                  title="XP"
                  value="12,480"
                  delta="+780 this week"
                  icon={<Trophy className="size-4" />}
                />
                <MetricCard
                  title="Streak"
                  value="24d"
                  delta="Best: 41d"
                  icon={<Flame className="size-4" />}
                />
                <MetricCard
                  title="Focus"
                  value="91%"
                  delta="Strong momentum"
                  icon={<Zap className="size-4" />}
                />
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <SectionHeader
                title="Weekly momentum"
                description="Sprint cadence across study, projects, and applications."
              />
              <div className="flex h-44 items-end gap-3">
                {weekBars.map((bar, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center gap-3">
                    <div className="w-full rounded-2xl bg-white/5 p-1">
                      <div
                        className="rounded-xl bg-gradient-to-t from-amber-500 to-orange-300"
                        style={{ height: `${bar}%` }}
                      />
                    </div>
                    <span className="text-xs text-zinc-500">
                      {["M", "T", "W", "T", "F", "S", "S"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <MetricCard
                title="Company readiness"
                value="78%"
                delta="+6% vs last week"
                icon={<Target className="size-4" />}
              />
              <MetricCard
                title="Applications active"
                value="14"
                delta="5 awaiting response"
                icon={<GitBranch className="size-4" />}
              />
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
              <SectionHeader
                title="Company readiness grid"
                description="Tracked against your target-company expectations."
              />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  ["Google", 74],
                  ["Microsoft", 82],
                  ["Amazon", 69],
                  ["TCS", 91],
                  ["Infosys", 88],
                  ["Accenture", 85],
                ].map(([name, score]) => (
                  <CompanyCard
                    key={name as string}
                    name={name as string}
                    score={score as number}
                    status={`Readiness ${score}% for this target company`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader title="Activity pulse" description="Recent progress across the workspace." />
            <div className="grid gap-3">
              <ActivityItem
                title="Solved 4 medium problems in the dynamic programming track"
                meta="2 hours ago · LeetCode"
                tone="success"
              />
              <ActivityItem
                title="Completed system design notes for distributed caching"
                meta="5 hours ago · Prep sprint"
              />
              <ActivityItem
                title="Submitted application for Microsoft SDE Intern"
                meta="Yesterday · Placement pipeline"
                tone="warning"
              />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader
              title="Top recommendations"
              description="High-impact next actions for the week."
            />
            <div className="grid gap-3">
              <RecommendationCard
                title="Finish the resume keyword pass"
                reason="Your ATS score will climb fastest by aligning project language with target JD keywords."
                meta="Priority 01 · 20 min"
              />
              <RecommendationCard
                title="Solve 2 graph problems"
                reason="Graph strength is still below your other topics and shows up frequently in interviews."
                meta="Priority 02 · 45 min"
              />
              <RecommendationCard
                title="Ship a metrics dashboard case study"
                reason="A polished project boosts both profile prestige and company readiness simultaneously."
                meta="Priority 03 · 2 hrs"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
}
