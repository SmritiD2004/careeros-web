"use client";

import { ArrowRight, Globe2, Lock, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04050d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(248,113,133,0.12),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_22%)] opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,120,50,0.08)_0%,transparent_18%_25%,transparent_82%_75%,rgba(248,113,113,0.06)_100%)]" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 py-10 lg:grid-cols-[1.2fr_0.9fr] lg:px-10">
        <div className="space-y-8">
          <div className="max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/75 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-orange-200">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              CareerOS · v2.6 · 2026 release
            </div>
            <h1 className="mt-10 max-w-2xl text-5xl font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl">
              Your <span className="bg-linear-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">employability</span> engineered.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              The career operating system for the world’s best engineering students. Track DSA, verify internships, mint your passport.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Live score</p>
                  <p className="mt-4 text-5xl font-semibold text-white">847</p>
                  <p className="text-sm text-zinc-500">/ 1000</p>
                </div>
                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-orange-300">
                  +23 this week
                </span>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-linear-to-r from-orange-500 via-orange-400 to-yellow-300" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["DSA", "455"],
                  ["XP", "12.4k"],
                  ["Rank", "Platinum II"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm">
                    <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">{label}</p>
                    <p className="mt-3 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500/15 text-orange-300 shadow-[0_15px_40px_rgba(248,113,113,0.15)]">
                    C
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">CareerOS</p>
                    <p className="mt-1 text-2xl font-semibold text-white">Welcome back.</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-400">Sign in to your CareerOS.</p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-3xl border border-white/10 bg-black/20 px-4 text-sm text-white transition hover:border-orange-300/40 hover:bg-white/5">
                  <Globe2 className="size-4 text-orange-300" /> Google
                </button>
                <button className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-3xl border border-white/10 bg-black/20 px-4 text-sm text-white transition hover:border-orange-300/40 hover:bg-white/5">
                  GitHub
                </button>
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-zinc-500">
                <span className="h-px flex-1 bg-white/10" />
                or with email
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <form className="mt-6 space-y-4">
                <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <label className="text-xs uppercase tracking-[0.28em] text-zinc-500">Email</label>
                  <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/20 px-4 py-3">
                    <Mail className="size-4 text-orange-300" />
                    <Input type="email" placeholder="aarav.mehta@iitb.ac.in" className="bg-transparent px-0 text-white placeholder:text-zinc-500" />
                  </div>
                </div>
                <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-zinc-500">
                    <span>Password</span>
                    <button type="button" className="text-orange-300 hover:text-orange-200">Forgot?</button>
                  </div>
                  <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/20 px-4 py-3">
                    <Lock className="size-4 text-orange-300" />
                    <Input type="password" placeholder="••••••••" className="bg-transparent px-0 text-white placeholder:text-zinc-500" />
                  </div>
                </div>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-linear-to-r from-orange-500 via-orange-400 to-yellow-300 px-5 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(251,146,60,0.25)] transition hover:opacity-95">
                  Enter CareerOS <ArrowRight className="size-4" />
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-zinc-500">
                New to CareerOS? <Link href="/signup" className="text-orange-400 transition hover:text-orange-300">Create account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
