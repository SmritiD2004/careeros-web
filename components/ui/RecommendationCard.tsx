import { ArrowUpRight } from "lucide-react";

export function RecommendationCard({
  title,
  reason,
  meta,
}: {
  title: string;
  reason: string;
  meta: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/4 p-5 transition hover:bg-white/6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{reason}</p>
        </div>
        <ArrowUpRight className="size-4 text-amber-400" />
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.24em] text-zinc-500">
        {meta}
      </p>
    </div>
  );
}
