"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, BrainCircuit } from "lucide-react";

const suggestions = [
  "Solve 2 Dynamic Programming problems today.",
  "Your System Design score is lagging behind DSA by 21 points.",
  "Complete one mock interview this week to increase interview readiness.",
];

export default function AICoachCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        relative overflow-hidden rounded-[2rem]
        border border-orange-500/15
        bg-slate-950/85
        p-6
        shadow-[0_40px_120px_rgba(255,87,34,0.18)]
        backdrop-blur-xl
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.18),transparent_55%)]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-300">
              <BrainCircuit className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                AI Career Coach
              </p>

              <h2 className="mt-1 text-xl font-semibold text-white">
                Personalized recommendations
              </h2>
            </div>
          </div>

          <Sparkles className="h-5 w-5 text-orange-300" />
        </div>

        <div className="mt-6 space-y-3">
          {suggestions.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.4,
              }}
              className="
                flex items-start gap-3 rounded-2xl
                border border-white/10
                bg-white/5
                p-4
              "
            >
              <div className="mt-1 h-2 w-2 rounded-full bg-orange-400" />

              <p className="flex-1 text-sm text-zinc-300">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <button
          className="
            mt-6 inline-flex items-center gap-2
            rounded-2xl
            border border-orange-500/20
            bg-orange-500/10
            px-5 py-3
            text-sm font-medium text-orange-300
            transition hover:bg-orange-500/20
          "
        >
          View full roadmap
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}