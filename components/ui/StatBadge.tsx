import { cn } from "@/lib/utils";

export function StatBadge({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "success" | "warning";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        tone === "success" &&
          "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
        tone === "warning" &&
          "border-amber-400/20 bg-amber-400/10 text-amber-200",
        tone === "default" && "border-white/10 bg-white/5 text-zinc-300"
      )}
    >
      <span>{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );
}
