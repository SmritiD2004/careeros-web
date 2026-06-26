"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <label className="flex h-11 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 text-zinc-400 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <Search className="size-4 shrink-0" />
      <input
        type="text"
        placeholder="Search placements, skills, companies..."
        className="w-full bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
      />
      <kbd className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-[11px] text-zinc-500">
        ⌘K
      </kbd>
    </label>
  );
}
