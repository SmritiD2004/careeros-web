"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck, Building2, GraduationCap, EyeOff } from "lucide-react";
import loginPageImg from "../images/loginpageimg.jpg";

const REFRESHING_THOUGHTS = [
  { text: "Your talent determines what you can do. Your motivation determines how much you are willing to do.", author: "Lou Holtz" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Be miserably excellent than being conventionally mediocre.", author: "Unknown" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Clear thinking requires courage rather than intelligence.", author: "Thomas Szasz" },
  { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" }
];

export default function Page() {
  const [role, setRole] = useState<"student" | "officer" | "provider">("student");
  const [currentThought, setCurrentThought] = useState({ text: "", author: "" });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * REFRESHING_THOUGHTS.length);
    setCurrentThought(REFRESHING_THOUGHTS[randomIndex]);
  }, []);

  // Generates the proper destination string matching your chosen active platform tab
  const getDashboardLink = () => {
    if (role === "student") return "/dashboard";
    if (role === "officer") return "/officer-dashboard";
    return "/provider-dashboard";
  };

  // Helper to dynamically set the button label matching your brand style guides
  const getButtonLabel = () => {
    if (role === "student") return "Launch Student Session";
    if (role === "officer") return "Launch Officer Session";
    return "Launch Provider Session";
  };

  return (
    <div className="relative min-h-screen bg-[#070302] text-zinc-300 antialiased flex items-center overflow-hidden font-sans selection:bg-[#FE7B34]/30">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes subtleFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-subtle-fade {
          animation: subtleFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes characterFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-character-float {
          animation: characterFloat 5s ease-in-out infinite;
        }
      `}} />

      {/* Premium Backdrop Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(254,123,52,0.03),transparent_50%),radial-gradient(circle_at_75%_65%,rgba(69,29,8,0.18),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.004)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.004)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />

      {/* Balanced 12-Column Scale Grid */}
      <main className="relative z-10 mx-auto w-full max-w-7xl grid min-h-screen items-center gap-16 px-6 py-12 lg:grid-cols-12 lg:px-12">
        
        {/* ================= LEFT SIDE: HERO INTRO, CHARACTER & THOUGHT DECK ================= */}
        <section className="flex flex-col justify-center h-full lg:col-span-6 space-y-10 lg:pr-6">
          
          <div className="space-y-5">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl xl:leading-[1.15]">
              Simplify placement workflows.{" "}
              <span className="block mt-1 bg-gradient-to-r from-white via-[#E8A37D] to-[#FE7B34] bg-clip-text text-transparent">
                Boost readiness.
              </span>
            </h1>
            <p className="max-w-md text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
              Build your verified ecosystem, keep your streak alive, and manage end-to-end selection pipelines cleanly.
            </p>
          </div>

          {/* ─── ANIMATED 2D CHARACTER SLOT ─── */}
          <div className="w-full max-w-md flex justify-start items-center py-2">
            <div className="w-48 h-48 relative animate-character-float flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FE7B34]/5 rounded-full blur-2xl pointer-events-none" />
              <img 
                src={loginPageImg.src} 
                alt="Animated Interface Mascot"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_8px_24px_rgba(254,123,52,0.15)]"
              />
            </div>
          </div>

          {/* Minimalist Thought Presentation Container */}
          <div className="relative w-full max-w-md border-l-2 border-[#FE7B34]/40 pl-6 py-2 min-h-[70px] flex flex-col justify-center">
            {currentThought.text ? (
              <div className="space-y-2 animate-subtle-fade">
                <p className="text-sm font-medium leading-relaxed text-zinc-200 tracking-wide italic">
                  “{currentThought.text}”
                </p>
                {currentThought.author && (
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#E8A37D]/90">
                    — {currentThought.author}
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
                <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse" />
              </div>
            )}
          </div>
        </section>

        {/* ================= RIGHT SIDE: CLEAN SYSTEM ENTRY PORTAL ================= */}
        <aside className="relative lg:col-span-6 lg:justify-self-end w-full max-w-[420px]">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#FE7B34]/2 blur-3xl pointer-events-none" />
          
          <div className="relative rounded-xl border border-white/[0.07] bg-[#0A0403]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            
            <div>
              <h2 className="text-xl font-semibold text-white tracking-tight">System Access</h2>
              <p className="text-sm text-zinc-400 mt-1">Authenticate your platform gateway session.</p>
            </div>

            {/* Account Type Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-zinc-400">
                Target Login Domain
              </label>
              <div className="grid grid-cols-3 gap-1 bg-black/40 p-1 rounded-xl border border-white/[0.05]">
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
                      onClick={() => setRole(item.id as any)}
                      className={`flex items-center justify-center gap-2 py-2 px-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                        isSelected
                          ? "bg-white/[0.08] text-white border border-white/[0.06] shadow-md"
                          : "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.01]"
                      }`}
                    >
                      <Icon className={`size-4 ${isSelected ? "text-[#FE7B34]" : ""}`} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Fields Stack Container */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-medium text-zinc-400">
                  Identifier String / Email Address
                </label>
                <input
                  type="email"
                  defaultValue="amiteshj2703@gmail.com"
                  placeholder="name@organization.com"
                  className="w-full h-11 bg-white/[0.01] border border-white/[0.08] rounded-xl text-sm px-4 text-white placeholder:text-zinc-700 outline-none transition-all duration-200 focus:bg-white/[0.03] focus:border-[#FE7B34]/50 focus:ring-1 focus:ring-[#FE7B34]/50"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-zinc-400">
                    Security Key Token
                  </label>
                  <Link href="#" className="text-xs text-[#E8A37D] font-medium hover:text-[#FE7B34] transition-colors">
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    defaultValue="••••••••"
                    placeholder="••••••••"
                    className="w-full h-11 bg-white/[0.01] border border-white/[0.08] rounded-xl text-sm pl-4 pr-10 text-white placeholder:text-zinc-700 outline-none transition-all duration-200 focus:bg-white/[0.03] focus:border-[#FE7B34]/50 focus:ring-1 focus:ring-[#FE7B34]/50"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    <EyeOff className="size-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center pt-1">
                <label className="flex items-center gap-2.5 cursor-pointer select-none group">
                  <input 
                    type="checkbox" 
                    className="accent-[#FE7B34] size-4 rounded border-white/10 bg-white/2 cursor-pointer transition-all" 
                  />
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">Authorize session lock state</span>
                </label>
              </div>

              {/* Direct Working Action Link Button — Patched and Restored */}
              <Link
                href={getDashboardLink()}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FE7B34] to-[#B8460A] px-5 h-11 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#FE7B34]/5 transition-all hover:brightness-105 active:scale-[0.985]"
              >
                {getButtonLabel()}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Separator Layer */}
            <div className="relative flex items-center justify-center py-2">
              <div className="w-full border-t border-white/[0.06]" />
              <span className="absolute bg-[#0C0504] px-3 text-xs font-medium text-zinc-500">
                Secondary Sign-In Access
              </span>
            </div>

            {/* OAuth Access Channels */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.01] px-4 h-10 text-xs font-semibold text-zinc-300 transition-all hover:bg-white/[0.03] hover:border-white/[0.12]">
                <Mail className="size-4 text-zinc-400" />
                Google Workspace
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.01] px-4 h-10 text-xs font-semibold text-zinc-300 transition-all hover:bg-white/[0.03] hover:border-white/[0.12]">
                <Building2 className="size-4 text-zinc-400" />
                Enterprise SSO
              </button>
            </div>

            {/* Fixed Provision Space Signup Redirection Link */}
            <p className="text-center text-xs text-zinc-500 font-medium pt-2">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#E8A37D] font-semibold transition-colors hover:text-[#FE7B34]">
                Sign Up
              </Link>
            </p>
          </div>
        </aside>

      </main>
    </div>
  );
}