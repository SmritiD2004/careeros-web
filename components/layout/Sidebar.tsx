"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  LayoutDashboard,
  Rocket,
  Settings2,
  ShieldCheck,
  FileText,
  UserRound,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profile", label: "Profile", icon: UserRound },
  { href: "/dsa", label: "DSA", icon: Code2 },
  { href: "/readiness", label: "Readiness", icon: ShieldCheck },
  { href: "/recommendations", label: "Coach", icon: Rocket },
  { href: "/placements", label: "Placements", icon: BriefcaseBusiness },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings2 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-[284px] shrink-0 border-r border-white/10 bg-zinc-950/95 px-4 py-5 backdrop-blur xl:flex">
      <div className="flex h-full w-full flex-col">
        <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-zinc-900 text-sm font-black text-black">
              C
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-zinc-200 uppercase">
                CareerOS
              </p>
              <p className="text-xs text-zinc-400">Placement intelligence OS</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {routes.map((route) => {
            const active =
              pathname === route.href || pathname.startsWith(`${route.href}/`);
            const Icon = route.icon;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
                  active
                    ? "bg-white/10 text-white shadow-[0_0_0_1px_rgba(251,191,36,0.18)]"
                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                )}
              >
                <Icon className={cn("size-4", active && "text-amber-400")} />
                <span>{route.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/15 to-transparent p-4">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-200/80">
            Weekly target
          </p>
          <p className="mt-2 text-sm text-zinc-200">
            17 problems, 2 projects, 1 mock interview.
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
          </div>
        </div>
      </div>
    </aside>
  );
}
