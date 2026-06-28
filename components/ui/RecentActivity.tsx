"use client";

import { Clock } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    { time: "2h ago", desc: "Earned 120 XP" },
    { time: "5h ago", desc: "Unlocked \"Streak Master\" badge" },
    { time: "1d ago", desc: "Solved a Hard problem" },
    { time: "2d ago", desc: "Completed React course" },
  ];

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-[0_40px_120px_rgba(7,12,24,0.35)] backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <Clock className="size-5 text-orange-300" />
        <p className="text-sm font-medium text-white">Recent Activity</p>
      </div>
      <ul className="mt-4 space-y-3 text-sm">
        {activities.map((a, i) => (
          <li key={i} className="flex justify-between text-zinc-400">
            <span className="text-white">{a.desc}</span>
            <span className="text-xs text-zinc-500">{a.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
