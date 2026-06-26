import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "System Design",
  "DSA",
  "PostgreSQL",
  "Next.js",
];
const projects = [
  "CareerOS Intelligence Dashboard",
  "Realtime Interview Tracker",
  "Resume ATS Lab",
];

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="Profile"
        subtitle="Developer identity card — prestigious, quantified, and professionally legible."
        action={<StatBadge label="Rank" value="#142" />}
      >
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="size-32 rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-400 via-orange-500 to-zinc-900 p-1">
                <div className="grid size-full place-items-center rounded-[1.75rem] bg-zinc-950 text-3xl font-bold text-white">
                  SK
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Identity card
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  Shreya Kapoor
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                  Full-stack developer focused on product quality, interview readiness,
                  and building premium user experiences.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <StatBadge label="XP" value="12,480" tone="warning" />
                  <StatBadge label="GitHub" value="418 commits" />
                  <StatBadge label="Projects" value="12 shipped" tone="success" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <MetricCard title="Profile score" value="89%" delta="Prestige tier" />
            <MetricCard
              title="Contribution streak"
              value="31d"
              delta="GitHub and project momentum"
            />
          </div>
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader title="Skills" />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader title="Projects" />
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-200"
                >
                  {project}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader title="Tech stack" />
            <div className="grid grid-cols-2 gap-3 text-sm text-zinc-300">
              {["Next.js", "TypeScript", "Tailwind", "Postgres", "Redis", "Docker"].map(
                (item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
}
