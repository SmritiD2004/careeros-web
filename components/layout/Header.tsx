"use client";

import { Bell } from "lucide-react";
import { SearchBar } from "@/components/layout/SearchBar";
import { UserMenu } from "@/components/layout/UserMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="flex items-center gap-4 px-4 py-4 lg:px-6">
        <div className="hidden min-w-0 flex-1 xl:block">
          <SearchBar />
        </div>
        <div className="flex items-center gap-2 xl:hidden">
          <div className="grid size-10 place-items-center rounded-2xl bg-white/5 text-sm font-bold text-amber-400">
            C
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              CareerOS
            </p>
            <p className="text-sm text-zinc-200">Placement intelligence</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="hidden rounded-2xl border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 md:inline-flex">
            <Bell className="size-4" />
          </button>
          <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300 md:flex">
            <span className="size-2 rounded-full bg-emerald-400" />
            Synced 3m ago
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
