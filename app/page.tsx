import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import TargetCursor from "@/components/TargetCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <TargetCursor hideDefaultCursor={true} parallaxOn={true} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.16),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(249,115,22,0.18),transparent_28%),linear-gradient(to_bottom,#09090b,#000)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px] opacity-20" />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
          <section className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <span className="size-2 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.8)]" />
              CareerOS • V2.6 • 2026 release
            </div>

            <h1 className="mt-8 max-w-4xl text-6xl font-black leading-[0.92] tracking-[-0.06em] text-balance md:text-[5.5rem]">
              Your{" "}
              <span className="bg-linear-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
                employability
              </span>{" "}
              engineered.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              The career operating system for engineering students. Track DSA, verify internships,
              organize placements, and turn effort into measurable momentum.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_20px_70px_rgba(249,115,22,0.35)] transition hover:brightness-110 cursor-target"
              >
                Enter CareerOS <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/8 cursor-target"
              >
                Preview dashboard
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="cursor-target rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/15">
                Click me!
              </button>
              <div className="cursor-target rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white">
                Hover target
              </div>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                ["847", "Employability score"],
                ["12.4k", "XP earned"],
                ["P-II", "Current rank"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm"
                >
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
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/85 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-orange-400 to-amber-500 text-black shadow-[0_16px_45px_rgba(249,115,22,0.45)]">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">CareerOS</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Welcome back</p>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/8 bg-white/3 p-5">
                <p className="text-2xl font-semibold tracking-tight text-white">Your prep, in one place.</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Track progress, compare readiness, and launch into the next interview step.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    ["Live score", "847 / 1000"],
                    ["Weekly XP", "+23 this week"],
                    ["Active pipelines", "14 applications"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
                    >
                      <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        {label}
                      </span>
                      <span className="text-sm font-semibold text-orange-300">{value}</span>
                    </div>
                  ))}
                </div>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[79%] rounded-full bg-linear-to-r from-orange-500 to-amber-300" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
