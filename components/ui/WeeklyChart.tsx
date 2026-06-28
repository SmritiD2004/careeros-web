"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { day: "Mon", xp: 340 },
  { day: "Tue", xp: 650 },
  { day: "Wed", xp: 310 },
  { day: "Thu", xp: 810 },
  { day: "Fri", xp: 520 },
  { day: "Sat", xp: 1020 },
  { day: "Sun", xp: 700 },
];

export default function WeeklyChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
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
            Weekly Activity
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            XP earned · last 7 days
          </h2>
        </div>

        <div className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-orange-300">
          +18% this week
        </div>
      </div>

      <div className="mt-8 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF5722" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#a1a1aa",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                fill: "rgba(255,255,255,0.03)",
              }}
              contentStyle={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                color: "white",
              }}
            />

            <Bar
              dataKey="xp"
              fill="url(#xpGradient)"
              radius={[12, 12, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}