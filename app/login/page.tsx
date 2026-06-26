import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(to_bottom,#09090b,#000)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <main className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.9fr] lg:px-8">
        <section className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-300">
            <span className="size-2 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.8)]" />
            CareerOS • Secure access
          </div>

          <h1 className="mt-8 max-w-2xl text-6xl font-black leading-[0.92] tracking-[-0.06em] text-balance md:text-[5rem]">
            Welcome back to your{" "}
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
              career OS
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Sign in to continue your prep, review company readiness, and keep every placement signal in one place.
          </p>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {[
              ["847", "Current employability"],
              ["47 days", "Best streak"],
              ["92%", "Profile completeness"],
              ["14", "Open pipelines"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                  {label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="relative">
          <div className="absolute -inset-10 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-black shadow-[0_16px_45px_rgba(249,115,22,0.45)]">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">CareerOS</p>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Sign in to continue
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]">
                  <Mail className="size-4 text-zinc-300" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]">
                  GitHub
                </button>
              </div>

              <div className="relative py-2 text-center">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                  Or with email
                </span>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                    Email
                  </span>
                  <Input
                    type="email"
                    defaultValue="aarav.mehta@iitb.ac.in"
                    className="h-11 rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-zinc-500"
                  />
                </label>
                <label className="block">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                      Password
                    </span>
                    <Link href="#" className="text-xs text-orange-400 transition hover:text-orange-300">
                      Forgot?
                    </Link>
                  </div>
                  <Input
                    type="password"
                    defaultValue="•••••••••"
                    className="h-11 rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-zinc-500"
                  />
                </label>
              </div>

              <Link
                href="/dashboard"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3.5 text-sm font-semibold text-black shadow-[0_20px_70px_rgba(249,115,22,0.35)] transition hover:brightness-110"
              >
                Enter CareerOS <ArrowRight className="size-4" />
              </Link>

              <p className="text-center text-sm text-zinc-500">
                New here?{" "}
                <Link href="/signup" className="text-orange-400 transition hover:text-orange-300">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
