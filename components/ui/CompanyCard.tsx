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
    <div className="rounded-3xl border border-white/10 bg-linear-to-br from-slate-950/90 via-slate-900/80 to-slate-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
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
