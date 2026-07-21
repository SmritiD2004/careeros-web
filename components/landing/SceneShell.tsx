'use client'
import { motion } from 'framer-motion'

/* ─── reusable layout shell ─────────────────────────────────────── */
export function SceneShell({
  sceneNum, accentColor, title, desc, children,
}: {
  sceneNum: string
  accentColor: string
  title: string
  desc: string
  children: React.ReactNode
}) {
  return (
    <div className="absolute inset-0 flex">
      {/* ── Left sidebar ── */}
      <div className="flex flex-col justify-center pl-8 pr-4 select-none" style={{ width: 176, flexShrink: 0 }}>
        {/* vertical timeline dot + line */}
        <div className="flex items-center gap-2 mb-4">
          <motion.div className="w-4 h-4 rounded-full border-2 flex-shrink-0"
            style={{ background: accentColor, borderColor: accentColor, boxShadow: `0 0 14px ${accentColor}` }}
            animate={{ boxShadow: [`0 0 8px ${accentColor}`, `0 0 24px ${accentColor}`, `0 0 8px ${accentColor}`] }}
            transition={{ duration: 2.2, repeat: Infinity }} />
          <span className="text-[12px] font-semibold font-mono tracking-[0.24em]" style={{ color: accentColor }}>{sceneNum}</span>
        </div>
        <h2 className="text-[32px] font-bold text-white leading-tight mb-3">{title}</h2>
        <p className="text-[14px] text-white/55 leading-relaxed">{desc}</p>
      </div>

      {/* ── Content area ── */}
      <div className="flex-1 relative overflow-hidden">
        {children}
      </div>
    </div>
  )
}
