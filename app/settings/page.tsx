import { AppShell } from "@/components/layout/AppShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBadge } from "@/components/ui/StatBadge";

export default function Page() {
  return (
    <AppShell>
      <PageContainer title="Settings" subtitle="Integrations, privacy, and notification controls." action={<StatBadge label="Extension" value="Connected" tone="success" />}>
        <div className="grid gap-6 xl:grid-cols-2">
          {[
            ["GitHub integration", "Synced", "Commit and contribution data is current."],
            ["Extension status", "Active", "Browser telemetry is available for tracking prep patterns."],
            ["Notification settings", "Configured", "Daily digest at 7:30 PM."],
            ["Privacy controls", "Locked", "Profile visibility is set to private by default."],
            ["Theme settings", "Dark premium", "OS-style surfaces and amber accents."],
            ["Connected platforms", "5 active", "LeetCode, GitHub, LinkedIn, Gmail, Notion."],
          ].map(([title, status, desc]) => (
            <div
              key={title as string}
              className="animated-card rounded-3xl border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20 transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              <SectionHeader title={title as string} />
              <p className="text-sm text-zinc-300">{desc as string}</p>
              <div className="mt-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                {status as string}
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </AppShell>
  );
}
