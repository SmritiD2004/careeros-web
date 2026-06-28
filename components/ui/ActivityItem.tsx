import { cn } from "@/lib/utils";

export function ActivityItem({
  title,
  meta,
  tone = "default",
}: {
  title: string;
  meta: string;
  tone?: "default" | "success" | "warning";
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/20">
      <div
        className={cn(
          "mt-1 size-2.5 rounded-full",
          tone === "success" && "bg-emerald-400",
          tone === "warning" && "bg-amber-400",
          tone === "default" && "bg-zinc-500"
        )}
      />
      <div>
        <p className="text-sm text-white">{title}</p>
        <p className="mt-1 text-xs text-zinc-500">{meta}</p>
      </div>
    </div>
  );
}
