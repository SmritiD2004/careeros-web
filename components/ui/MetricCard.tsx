import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MetricCard({
  title,
  value,
  delta,
  icon,
  className,
}: {
  title: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-linear-to-br from-slate-950/90 via-slate-900/80 to-slate-950/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-white/20",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
            {title}
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
          {delta && <p className="mt-2 text-sm text-emerald-400">{delta}</p>}
        </div>
        {icon && <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-amber-400">{icon}</div>}
      </div>
    </div>
  );
}
