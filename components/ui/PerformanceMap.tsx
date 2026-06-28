"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  { skill: "DSA", score: 92 },
  { skill: "System Design", score: 71 },
  { skill: "React", score: 88 },
  { skill: "Backend", score: 79 },
  { skill: "ML/AI", score: 74 },
  { skill: "DevOps", score: 63 },
];

export default function PerformanceMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        rounded-[2rem]
        border border-white/10
        bg-slate-950/85
        p-6
        shadow-[0_40px_120px_rgba(255,87,34,0.15)]
        backdrop-blur-xl
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            Skill Analytics
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            Performance Map
          </h2>
        </div>

        <ArrowUpRight className="h-5 w-5 text-zinc-500" />
      </div>

      <div className="mt-6 h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <defs>
              <linearGradient
                id="radarGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FF5722" stopOpacity={0.85} />
                <stop offset="100%" stopColor="#FB923C" stopOpacity={0.35} />
              </linearGradient>
            </defs>

            <PolarGrid stroke="rgba(255,255,255,0.08)" />

            <PolarAngleAxis
              dataKey="skill"
              tick={{
                fill: "#a1a1aa",
                fontSize: 11,
              }}
            />

            <Radar
              dataKey="score"
              stroke="#FF5722"
              fill="url(#radarGradient)"
              fillOpacity={0.55}
              strokeWidth={2.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {data.map((item) => (
          <div
            key={item.skill}
            className="
              rounded-2xl
              border border-white/10
              bg-white/5
              p-2
              text-center
            "
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              {item.skill}
            </p>

            <p className="mt-1 text-sm font-semibold text-orange-300">
              {item.score}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}