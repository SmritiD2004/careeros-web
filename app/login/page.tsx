"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck, CheckCircle2, User, Building2, GraduationCap, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [role, setRole] = useState("student");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#160806] text-white antialiased">
      {/* Background Gradients & Soft Tech Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,29,8,0.4),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(232,163,125,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <main className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:px-8">
        
        {/* ================= LEFT SIDE: BRANDING & WORKSPACE ILLUSTRATION ================= */}
        <section className="flex flex-col justify-between h-full py-6 space-y-12 lg:space-y-0">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8A37D]/20 bg-[#451D08]/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8A37D]">
              <ShieldCheck className="size-3.5 text-[#FE7B34]" />
              CareerOS • Secure Access
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Simplify placement workflows.{" "}
              <span className="bg-linear-to-r from-white via-[#E8A37D] to-[#FE7B34] bg-clip-text text-transparent">
                Boost readiness.
              </span>
            </h1>
            <p className="mt-4 max-w-md text-base text-zinc-400">
              Build your verified ecosystem, keep your streak alive, and manage end-to-end selection pipelines cleanly.
            </p>
          </div>

          {/* Interactive Workspace Area Inspired by the Uploaded Reference Minimalist Art */}
              <div className="relative hidden md:flex items-center justify-center w-full max-w-xl h-80 rounded-[2.5rem] bg-linear-to-br from-[#451D08]/20 via-[#451D08]/5 to-transparent border border-white/5 p-8 overflow-hidden">
            
            {/* Dynamic floating metric card */}
            <div className="absolute left-8 top-12 bg-[#160806]/90 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-md animate-pulse">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-[#FE7B34]/20 flex items-center justify-center text-[#FE7B34] font-bold text-xs">
                  84%
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Profile Verified</h4>
                  <p className="text-[10px] text-zinc-500">Ready for active matching</p>
                </div>
              </div>
            </div>

            {/* Minimal Vector Character / Meditating Focus Frame Placeholder */}
              <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative size-32 rounded-full bg-linear-to-tr from-[#A9420A]/30 to-[#FE7B34]/10 flex items-center justify-center border border-[#FE7B34]/20">
                <div className="size-24 rounded-full bg-[#160806] border border-white/10 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <div className="absolute -top-2 -right-2 size-8 rounded-full bg-[#451D08] border border-[#E8A37D]/30 flex items-center justify-center text-xs">✨</div>
              </div>
              <p className="text-sm font-medium tracking-wide text-zinc-300 max-w-xs">
                "Make your work easier and organized with CareerOS"
              </p>
            </div>

            {/* Background blur decorative circles */}
            <div className="absolute right-6 bottom-6 size-16 rounded-full bg-[#FE7B34]/10 blur-xl" />
          </div>

          {/* Trust Footprint */}
          <div className="border-t border-white/5 pt-6 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              The Premium Standard for Campus Hiring
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                "10k+ Profiles Built",
                "Verified Pipelines",
                "Placement Focused",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-[#FE7B34] shrink-0" />
                  <span className="text-xs text-zinc-400 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= RIGHT SIDE: LUXURY DARK-GLASS CARD WITH ROLE SELECTOR ================= */}
        <aside className="relative lg:justify-self-end w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-[#FE7B34]/10 to-transparent blur-3xl" />
          
          <div className="relative rounded-[2rem] border border-white/10 bg-[#160806]/80 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">Welcome back 👋</h2>
              <p className="text-xs text-zinc-400 mt-1">Sign in to sync your professional metrics</p>
            </div>

            {/* 3-Way Role Selector (Student, Placement Officer, Provider) */}
            <div className="mb-6">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2.5">
                Select Account Type
              </label>
              <div className="grid grid-cols-3 gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
                {[
                  { id: "student", label: "Student", icon: GraduationCap },
                  { id: "officer", label: "Officer", icon: ShieldCheck },
                  { id: "provider", label: "Provider", icon: Building2 },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = role === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRole(item.id)}
                      className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-lg text-[11px] font-medium transition-all duration-200 ${
                        isSelected
                            ? "bg-linear-to-b from-white/8 to-white/2 text-white shadow border border-white/10"
                          : "text-zinc-500 hover:text-zinc-300 hover:bg-white/6"
                      }`}
                    >
                      <Icon className={`size-4 mb-1 transition-colors ${isSelected ? "text-[#FE7B34]" : ""}`} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Login Credentials Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Username / Email
                  </span>
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your registered identifier"
                      className="h-11 rounded-xl border-white/10 bg-white/2 text-white placeholder:text-zinc-600 focus:border-[#FE7B34]/50 focus:ring-1 focus:ring-[#FE7B34]/50 pl-4"
                    />
                  </div>
                </label>
              </div>

              <div>
                <label className="block">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                      Password
                    </span>
                    <Link href="#" className="text-xs text-[#E8A37D] transition hover:text-[#FE7B34]">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="h-11 rounded-xl border-white/10 bg-white/2 text-white placeholder:text-zinc-600 focus:border-[#FE7B34]/50 focus:ring-1 focus:ring-[#FE7B34]/50 pl-4 pr-10"
                    />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300">
                      <EyeOff className="size-4" />
                    </button>
                  </div>
                </label>
              </div>

              {/* Keep Me Logged In */}
              <div className="flex items-center py-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    className="accent-[#FE7B34] size-4 rounded border-white/10 bg-white/2 transition" 
                  />
                  <span className="text-xs text-zinc-400">Remember session</span>
                </label>
              </div>

              {/* Login CTA Button with Warm Contrast Gradient */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#FE7B34] to-[#A9420A] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
              >
                Enter {role.charAt(0).toUpperCase() + role.slice(1)} Portal <ArrowRight className="size-4" />
              </button>
            </form>

            {/* Decorative Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-auto left-0 right-0 top-1/2 h-px bg-white/5" />
              <span className="relative inline-block bg-[#160806] px-3 text-[10px] uppercase tracking-widest text-zinc-500">
                or continue with
              </span>
            </div>

            {/* Social OAuth Integration */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/2 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-white/5">
                <Mail className="size-4 text-zinc-400" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/2 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-white/5">
                <Building2 className="size-4 text-zinc-400" />
                SSO Identity
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-zinc-500">
              Not a member?{" "}
              <Link href="/signup" className="text-[#E8A37D] font-medium transition hover:text-[#FE7B34]">
                Register now
              </Link>
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}