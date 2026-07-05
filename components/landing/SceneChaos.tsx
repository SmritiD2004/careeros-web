'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  width: number
  height: number
  left: string
  top: string
  duration: number
  delay: number
}

export function SceneChaos() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 10 }).map(() => ({
        width: 2 + Math.random() * 4,
        height: 2 + Math.random() * 4,
        left: `${20 + Math.random() * 65}%`,
        top: `${25 + Math.random() * 50}%`,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 4,
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0" style={{ overflow: 'hidden' }}>

      {/* ── Full-bleed background image ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/scene1-chaos-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ── Left vignette so sidebar is readable ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(4,6,15,0.94) 0%, rgba(4,6,15,0.62) 24%, rgba(4,6,15,0.08) 48%, rgba(4,6,15,0.0) 100%)',
        }}
      />

      {/* subtle ambient glow and atmosphere */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background:'radial-gradient(circle at 20% 40%, rgba(255,156,92,0.03), transparent 18%), radial-gradient(circle at 38% 40%, rgba(14,160,255,0.08), transparent 22%)',
          mixBlendMode:'screen',
        }}
      />

      {/* ── Bottom vignette for caption ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: 120,
          background: 'linear-gradient(to top, rgba(4,6,15,0.92) 0%, transparent 100%)',
        }}
      />

      {/* subtle floating particles */}
      {particles.map((particle, index) => (
        <motion.div key={index}
          className="absolute rounded-full bg-white/12"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
            filter: 'blur(0.8px)',
          }}
          animate={{ opacity: [0, 0.7, 0], y: [0, -8, 0] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
        />
      ))}

      {/* ══ LEFT SIDEBAR ══ */}
      <div
        className="absolute top-0 bottom-0 left-0 flex flex-col justify-center select-none"
        style={{ paddingLeft: 32, paddingRight: 16, width: 180 }}
      >
        {/* SCENE 01 label */}
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            className="w-4.5 h-4.5 rounded-full flex-shrink-0"
            style={{
              background: '#ef4444',
              border: '2px solid #ef4444',
              boxShadow: '0 0 18px #ef4444',
            }}
            animate={{ boxShadow: ['0 0 8px #ef4444', '0 0 24px #ef4444', '0 0 8px #ef4444'] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <span
            className="text-[13px] font-semibold font-mono tracking-[0.26em]"
            style={{ color: '#ef4444' }}
          >
            SCENE 01
          </span>
        </div>

        {/* THE CHAOS */}
        <h2
          className="font-bold text-white leading-tight mb-2"
          style={{ fontSize: 38 }}
        >
          THE CHAOS
        </h2>

        {/* Subtitle */}
        <p
          className="text-white/65 leading-relaxed"
          style={{ fontSize: 14, lineHeight: 1.55 }}
        >
          Every student<br />starts with confusion.
        </p>
      </div>

      {/* ══ Floating headline ══ */}
      <motion.div className="absolute left-1/2 top-[12%] -translate-x-1/2 text-center select-none"
        style={{ width: 'min(88vw, 860px)' }}
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: [0, 0.96, 1], y: [0, -3, 0] }}
        transition={{ delay: 0.4, duration: 1.1, ease: 'easeOut' }}>
        <div className="relative inline-block">
          <div className="absolute inset-x-0 top-0 h-32 mx-auto rounded-full opacity-40 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(255,110,64,0.34), transparent 60%)' }} />
          <div className="absolute inset-x-0 top-6 h-44 mx-auto rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(255,82,48,0.18), transparent 55%)' }} />
          <span className="relative block text-[3.4rem] md:text-[4.5rem] leading-[0.82] tracking-[-0.04em]"
            style={{
              fontFamily: 'Brush Script MT, Lucida Handwriting, cursive',
              color: '#ffe9db',
              textShadow: '0 0 24px rgba(255,134,57,0.65), 0 0 64px rgba(255,88,44,0.22), 0 0 8px rgba(255,255,255,0.45)',
              transform: 'skewX(-4deg)',
            }}>
            Where is my future going?
          </span>
          <span className="absolute inset-0 block text-[3.4rem] md:text-[4.5rem] leading-[0.82] tracking-[-0.04em]"
            style={{
              fontFamily: 'Brush Script MT, Lucida Handwriting, cursive',
              color: '#ffb07c',
              opacity: 0.35,
              filter: 'blur(1.2px)',
              transform: 'translate(1px,-1px) skewX(-4deg)',
            }}>
            Where is my future going?
          </span>
          <div className="absolute inset-x-0 top-1/2 h-44 mx-auto rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(255,112,66,0.26), transparent 52%)' }} />
        </div>
      </motion.div>

      {/* ══ BOTTOM CAPTION ══ */}
      <motion.p
        className="absolute bottom-5 left-0 right-0 text-center select-none"
        style={{ fontSize: 14, color: 'rgba(255,255,255,0.48)', letterSpacing: '0.01em', textShadow:'0 0 12px rgba(0,0,0,0.3)' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9 }}
      >
        It's not your fault.
        <br />
        <span style={{ color: 'rgba(255,255,255,0.72)' }}>
          The system was never built for you.
        </span>
      </motion.p>
    </div>
  )
}
