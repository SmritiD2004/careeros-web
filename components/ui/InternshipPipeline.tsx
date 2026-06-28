"use client";

import { ArrowUpRight } from "lucide-react";

export default function InternshipPipeline() {
  const companies = [
    { name: "Stripe", status: "Applied" },
    { name: "Linear", status: "Interview" },
    { name: "Vercel", status: "Offer" },
    { name: "Meta", status: "Pending" },
  ];

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-[0_40px_120px_rgba(7,12,24,0.35)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Internship Pipeline</p>
        <ArrowUpRight className="size-4 text-zinc-400" />
      </div>
      <ul className="mt-4 space-y-3 text-sm">
        {companies.map((c) => (
          <li key={c.name} className="flex justify-between items-center">
            <span className="text-white">{c.name}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${c.status === "Offer" ? "bg-orange-500/10 text-orange-300" : "bg-white/5 text-zinc-400"}`}> {c.status} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
