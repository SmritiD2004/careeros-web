"use client";

import { ChevronDown } from "lucide-react";

export function UserMenu() {
  return (
    <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:bg-white/10">
      <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 text-sm font-semibold text-white">
        SK
      </div>
      <div className="hidden sm:block">
        <p className="text-sm font-medium text-zinc-100">Shreya Kapoor</p>
        <p className="text-xs text-zinc-500">Premium tier</p>
      </div>
      <ChevronDown className="size-4 text-zinc-500" />
    </button>
  );
}
