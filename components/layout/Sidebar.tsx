"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Award,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileText,
  LayoutDashboard,
  Settings2,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profile", label: "Profile", icon: UserRound },
  { href: "/dsa", label: "DSA Tracker", icon: Code2 },
  { href: "/placements", label: "Internships", icon: Briefcase },
  { href: "/certificates", label: "Certificates", icon: Award },
  { href: "/resume", label: "Resume Builder", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings2 },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("careeros-sidebar-collapsed");
    setCollapsed(stored === "true");
  }, []);

  const toggleSidebar = () => {
    setCollapsed((value) => {
      const next = !value;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("careeros-sidebar-collapsed", `${next}`);
      }
      return next;
    });
  };

  return (
    <aside
      className={cn(
        "sticky top-0 hidden h-screen shrink-0 border-r border-white/10 bg-slate-950/95 px-3 py-5 backdrop-blur-xl transition-all duration-300 xl:flex",
        collapsed ? "w-24" : "w-[284px]"
      )}
    >
      <div className="flex h-full flex-col gap-6">
        <div
          className={cn(
            "flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300",
            collapsed && "justify-center px-3"
          )}
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-orange-500 to-orange-700 to-slate-900 text-sm font-black text-white shadow-[0_20px_80px_rgba(59,130,246,0.2)]">
            C
          </div>
          <div className={cn("min-w-0 transition-opacity duration-300", collapsed ? "opacity-0" : "opacity-100")}>
            <p className="text-sm font-semibold tracking-[0.22em] text-white uppercase">
              CareerOS
            </p>
            <p className="text-xs text-zinc-400">Career operating system</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-hidden">
          {routes.map((route) => {
            const active =
              pathname === route.href || pathname.startsWith(`${route.href}/`);
            const Icon = route.icon;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition-all duration-200",
                  active
                    ? "bg-white/10 text-white shadow-[0_0_0_1px_rgba(56,189,248,0.22)]"
                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                )}
              >
                <Icon className={cn("size-4", active ? "text-orange-300" : "text-zinc-400")} />
                <span className={cn("truncate transition-all duration-200", collapsed ? "hidden" : "inline")}>
                  {route.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className={cn("rounded-3xl border border-orange-500/10 bg-white/5 p-4 text-xs text-zinc-300 transition-opacity duration-300", collapsed && "hidden")}>
          <p className="font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
            Focus streak
          </p>
          <p className="mt-3 text-sm text-zinc-400">4 days of active interview prep.</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[64%] rounded-full bg-linear-to-r from-orange-500 to-violet-500" />
          </div>
        </div>

        <div className={cn("space-y-3", collapsed ? "hidden" : "block")}> 
          <button
            type="button"
            onClick={toggleSidebar}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10"
          >
            <ChevronLeft className="size-4" />
            Collapse
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-transparent px-3 py-3 text-sm font-medium text-zinc-400 transition hover:bg-white/5"
          >
            <ChevronRight className="size-4 rotate-180" />
            Sign out
          </button>
        </div>
      </div>
    </aside>
  );
}
