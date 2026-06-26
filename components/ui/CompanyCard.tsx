export function CompanyCard({
  name,
  score,
  status,
}: {
  name: string;
  score: number;
  status: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-base font-semibold text-white">{name}</p>
        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
          {score}%
        </span>
      </div>
      <p className="mt-4 text-sm text-zinc-400">{status}</p>
    </div>
  );
}
