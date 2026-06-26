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
        "rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
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
