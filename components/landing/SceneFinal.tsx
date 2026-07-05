'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FloatDot {
  width: number
  height: number
  left: string
  top: string
  duration: number
  delay: number
  color: string
}

export function SceneFinal() {
  const [floatDots, setFloatDots] = useState<FloatDot[]>([])

  useEffect(() => {
    setFloatDots(
      Array.from({ length: 130 }).map(() => ({
        width: 1 + Math.random() * 3.4,
        height: 1 + Math.random() * 3.4,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 4.2 + Math.random() * 2.4,
        delay: Math.random() * 2,
        color:
          Math.random() < 0.33
            ? 'rgba(56,189,248,0.72)'
            : Math.random() < 0.5
            ? 'rgba(59,130,246,0.58)'
            : Math.random() < 0.75
            ? 'rgba(168,85,247,0.44)'
            : 'rgba(14,165,233,0.34)',
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#020618' }}>

      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 20% 18%, rgba(56,189,248,0.22), transparent 18%), radial-gradient(circle at 82% 22%, rgba(59,130,246,0.16), transparent 20%), linear-gradient(180deg, rgba(4,12,32,0.92), rgba(1,4,12,1))'
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 52% 30%, rgba(191,219,254,0.20), transparent 18%), radial-gradient(circle at 70% 38%, rgba(59,130,246,0.22), transparent 18%), radial-gradient(circle at 86% 50%, rgba(14,165,233,0.18), transparent 24%)'
      }} />
      <div className="absolute inset-0 opacity-35" style={{
        backgroundImage: 'linear-gradient(rgba(14,165,233,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.08) 1px, transparent 1px)',
        backgroundSize: '42px 42px'
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 46% 27%, rgba(148,210,255,0.18), transparent 16%), radial-gradient(circle at 44% 46%, rgba(56,189,248,0.12), transparent 22%)'
      }} />

      {floatDots.map((dot, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{
            width: dot.width,
            height: dot.height,
            left: dot.left,
            top: dot.top,
            background: dot.color,
            opacity: 0.22,
            filter: 'blur(1px)',
          }}
          animate={{ opacity: [0.05, 0.28, 0.05], x: [0, 6, 0], y: [0, -14, 0] }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }} />
      ))}

      <div className="absolute inset-y-0 right-0 w-[52%] overflow-hidden" style={{ backgroundImage: 'url(/scene6-man.png)', backgroundSize: '130%', backgroundPosition: '45% center', backgroundRepeat: 'no-repeat', filter: 'saturate(1.35) brightness(1.28) contrast(1.12)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(2,6,15,0) 0%, rgba(3,10,22,0.06) 12%, rgba(2,6,15,0.14) 26%, rgba(2,6,15,0.42) 48%, rgba(2,6,15,0.72) 72%, rgba(2,6,15,0.94) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 48% 28%, rgba(191,219,254,0.30), transparent 16%), radial-gradient(circle at 52% 24%, rgba(56,189,248,0.30), transparent 18%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 44% 26%, rgba(255,255,255,0.18), transparent 12%)' }} />
        <motion.div className="absolute rounded-full" style={{ width: 520, height: 520, border: '1px solid rgba(56,189,248,0.22)', top: '12%', right: '-10%', boxShadow: '0 0 120px rgba(56,189,248,0.28), inset 0 0 32px rgba(168,212,255,0.18)', opacity: 0.78 }} animate={{ rotate: [0, 360] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="absolute rounded-full" style={{ width: 360, height: 360, border: '1px solid rgba(59,130,246,0.38)', top: '22%', right: '2%', boxShadow: '0 0 58px rgba(59,130,246,0.28), inset 0 0 18px rgba(255,255,255,0.12)', opacity: 0.72 }} animate={{ rotate: [360, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="absolute rounded-full" style={{ width: 280, height: 280, border: '1px solid rgba(191,219,254,0.38)', top: '30%', right: '8%', boxShadow: '0 0 40px rgba(191,219,254,0.22), inset 0 0 18px rgba(255,255,255,0.18)', opacity: 0.68 }} animate={{ rotate: [0, -360] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="w-[45%] max-w-[45%] pl-[6vw] pr-10 py-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.45)]" />
            <span className="text-[11px] font-medium tracking-[0.34em] uppercase text-cyan-300">SCENE 06</span>
          </div>

          <h1 className="text-[4.4rem] leading-[0.92] font-black text-white tracking-[-0.05em] max-w-[12ch]">YOUR<br />FUTURE<br />STARTS NOW</h1>

          <p className="mt-6 max-w-[30rem] text-lg text-slate-300">AI + You = Limitless Possibilities.</p>

          <div className="mt-12 space-y-3">
            <p className="text-[4rem] font-black uppercase tracking-[0.28em] bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 text-transparent bg-clip-text">CAREEROS</p>
            <p className="text-[11px] uppercase tracking-[0.36em] text-slate-400">AI CAREER INTELLIGENCE SYSTEM</p>
          </div>

          <motion.button
            className="inline-flex items-center justify-center rounded-[1.5rem] px-10 py-4 mt-10 text-sm font-semibold text-white shadow-[0_24px_80px_rgba(59,130,246,0.24)]"
            style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 45%, #a855f7 100%)', border: '1px solid rgba(96,165,250,0.32)' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}>
            ENTER THE SYSTEM →
          </motion.button>

          <p className="mt-6 max-w-[28rem] text-sm text-slate-400">Join thousands of students who are already elevating their careers.</p>
        </div>
      </div>
    </div>
  )
}
