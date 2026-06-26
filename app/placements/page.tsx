import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

const companies = [
  ["Amazon", "OA sent", "Round 1 prep"],
  ["Microsoft", "Applied", "Awaiting response"],
  ["Google", "Shortlisted", "Onsite prep"],
  ["Accenture", "Interview 2", "Behavioral prep"],
];

export default function Page() {
  return (
    <AppShell>
      <PageContainer
        title="Placements"
        subtitle="Notion-style pipeline for company applications and interview flow."
        action={<StatBadge label="Offers" value="1 pending" tone="success" />}
      >
        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader
              title="Applied companies"
              description="Current pipeline status across the shortlist."
            />
            <div className="grid gap-3">
              {companies.map(([name, status, detail]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div>
                    <p className="font-medium text-white">{name}</p>
                    <p className="text-sm text-zinc-500">{detail}</p>
                  </div>
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6">
            <SectionHeader
              title="Timeline"
              description="Upcoming deadlines and key round checkpoints."
            />
            <div className="space-y-4 text-sm text-zinc-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Thu · Microsoft OA deadline</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Fri · Amazon interview loop</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Mon · Accenture HR round</div>
            </div>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  );
}
