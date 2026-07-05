'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/* ═══════════════════════════════════════════════════════════════
   BLINKING DOTS
═══════════════════════════════════════════════════════════════ */
function BlinkDots() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 500)
    return () => clearInterval(t)
  }, [])
  return (
    <>
      {[0, 1, 2].map(i => (
        <motion.span key={i} animate={{ opacity: i < step ? 1 : 0.2 }} transition={{ duration: 0.1 }}>
          .
        </motion.span>
      ))}
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PROGRESS BAR  — animated fill + glow tip
═══════════════════════════════════════════════════════════════ */
function Bar({ label, val, delay }: { label: string; val: number; delay: number }) {
  const [w, setW] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setW(val), delay + 700)
    return () => clearTimeout(t)
  }, [val, delay])

  return (
    <div style={{ marginBottom: 15 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
        <span style={{ fontSize: 10.5, color: 'rgba(160,205,245,0.7)' }}>{label}</span>
        <span style={{ fontSize: 10.5, color: '#06b6d4', fontFamily: 'monospace', fontWeight: 700 }}>
          {val}%
        </span>
      </div>
      {/* Track */}
      <div style={{ position: 'relative', height: 5, borderRadius: 4, background: 'rgba(4,18,50,0.9)', overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', borderRadius: 3, background: 'linear-gradient(90deg,#082f4a 0%,#0891b2 70%,#06b6d4 100%)' }}
          animate={{ width: `${w}%` }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />
      </div>
      {/* Glow dot (outside overflow:hidden parent) */}
      <div style={{ position: 'relative', height: 0 }}>
        <motion.div
          style={{
            position: 'absolute', top: -7, width: 7, height: 7, borderRadius: '50%',
            background: '#06b6d4', boxShadow: '0 0 8px 3px rgba(6,182,212,0.9)',
            transform: 'translateX(-50%)',
          }}
          animate={{ left: `${w}%`, opacity: [0.5, 1, 0.5] }}
          transition={{
            left: { duration: 1.8, ease: 'easeOut' },
            opacity: { duration: 1.2, repeat: Infinity },
          }}
        />
      </div>
    </div>
  )
}

const PROGRESS = [
  { label: 'Data Collected', val: 87 },
  { label: 'Pattern Recognition', val: 92 },
  { label: 'Potential Mapping', val: 78 },
  { label: 'Future Prediction', val: 65 },
]

/* ═══════════════════════════════════════════════════════════════
   SCENE ANALYSIS — main export

   Layout (matching reference image 2 exactly):

   ┌──────────────┬──────────────────────────────────┬────────────────┐
   │  LEFT PANEL  │        CENTER COLUMN             │  RIGHT PANEL   │
   │              │   ┌──────────────────────┐       │                │
   │  SCENE 02    │   │  AI SYSTEM ACTIVATED │       │  ANALYZING...  │
   │  AI          │   │  Scanning your...    │       │  Data Coll 87% │
   │  DETECTION   │   │                      │       │  Pattern R 92% │
   │              │   │   [IMAGE ASSET]      │       │  Potential 78% │
   │  desc text   │   │  (centered, full AR) │       │  Future P  65% │
   │              │   └──────────────────────┘       │                │
   └──────────────┴──────────────────────────────────┴────────────────┘

   The first uploaded image is placed as an <img> in the center — NOT
   as a background, NOT stretched, NOT cropped. It keeps its exact
   aspect ratio and is displayed at its natural size scaled to fit.
═══════════════════════════════════════════════════════════════ */
export function SceneAnalysis() {
  return (
    <div
      className="absolute inset-0"
      style={{
        /* ── THE REAL UPLOADED IMAGE as full background ── */

        background: '#000000',

      }}
    >
      {/* Subtle edge-darkening overlay so left/right panels read cleanly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(2,8,20,0.78) 0%, rgba(2,8,20,0.2) 16%, rgba(2,8,20,0) 32%, rgba(2,8,20,0) 68%, rgba(2,8,20,0.2) 84%, rgba(2,8,20,0.78) 100%)',
        }}
      />

      {/* ── 3-COLUMN ROOT LAYOUT ── */}
      <div
        className="absolute inset-0 flex"
        style={{ paddingTop: 56 /* clear the navbar */ }}
      >

        {/* ══════════════════════════════════════
            LEFT PANEL — SCENE 02 / AI DETECTION
        ══════════════════════════════════════ */}
        <div
          style={{
            width: 180,
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 32,
            paddingRight: 16,
            zIndex: 2,
          }}
        >
          {/* Scene badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <motion.div
              style={{
                width: 12, height: 12, borderRadius: '50%',
                background: '#06b6d4', boxShadow: '0 0 16px #06b6d4', flexShrink: 0,
              }}
              animate={{ boxShadow: ['0 0 6px #06b6d4', '0 0 22px #06b6d4', '0 0 6px #06b6d4'] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
            <span style={{ fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.26em', color: '#06b6d4', fontWeight: 700 }}>
              SCENE 02
            </span>
          </div>

          {/* Title */}
          <h2 style={{ margin: '0 0 14px', fontSize: 38, fontWeight: 800, color: '#ffffff', lineHeight: 1.08, letterSpacing: '0.01em' }}>
            AI<br />DETECTION
          </h2>

          {/* Description */}
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.52)', lineHeight: 1.6 }}>
            Our AI analyzes you deeper than you know yourself.
          </p>
        </div>

        {/* ══════════════════════════════════════
            CENTER — title text only (image is the background)
        ══════════════════════════════════════ */}
        {/* ══════════════════════════════════════
    CENTER — VIDEO HOLOGRAM
══════════════════════════════════════ */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            minWidth: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 18,
            paddingLeft: 28,
            paddingRight: 28,
          }}
        >
          {/* TITLE */}
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              width: '100%',
              maxWidth: 640,
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: 'center',
            }}
          >
            <motion.h1
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: '0.24em',
                color: '#ffffff',
                textShadow:
                  '0 0 20px rgba(6,182,212,0.9), 0 0 55px rgba(6,182,212,0.4)',
                lineHeight: 1,
              }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            >
              AI SYSTEM ACTIVATED
            </motion.h1>

            <p
              style={{
                marginTop: 10,
                fontSize: 13,
                color: 'rgba(120,180,230,0.8)',
                letterSpacing: '0.11em',
                zIndex: 10,
              }}
            >
              Scanning your potential...
            </p>
          </div>

          {/* VIDEO */}
          <div
            style={{
              position: 'absolute',
              left: '55%',
              top: '55%',
              transform: 'translate(-50%, -50%)',
              width: 600,
              height: 600,
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'brightness(0.98) contrast(1.05) saturate(1.1)',
              }}
            >

              <source src="/videos/ai-avatar.mp4" type="video/mp4" />
            </video>
          </div>

          {/* OUTER RING */}
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              top: '55%',
              width: 414,
              height: 414,
              borderRadius: '50%',
              border: '1px solid rgba(6,182,212,.2)',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* INNER RING */}
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              top: '55%',
              width: 285,
              height: 285,
              borderRadius: '50%',
              border: '1px solid rgba(6,182,212,.15)',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* ══════════════════════════════════════
            RIGHT PANEL — ANALYZING / progress bars
        ══════════════════════════════════════ */}
        <div
          style={{
            width: 300,
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: 28,
            paddingLeft: 14,
            zIndex: 2,
          }}
        >
          <motion.div
            style={{
              background: 'rgba(2,8,28,0.88)',
              border: '1px solid rgba(6,182,212,0.36)',
              borderRadius: 12,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '26px 24px 24px',
              boxShadow: '0 0 68px rgba(6,182,212,0.08), inset 0 0 28px rgba(6,182,212,0.04)',
            }}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* "ANALYZING..." */}
            <p style={{ margin: '0 0 22px', fontSize: 12.5, fontFamily: 'monospace', letterSpacing: '0.22em', fontWeight: 700, color: '#06b6d4' }}>
              ANALYZING<BlinkDots />
            </p>

            {/* Progress bars */}
            {PROGRESS.map((p, i) => (
              <Bar key={p.label} label={p.label} val={p.val} delay={i * 300} />
            ))}

            {/* Bottom separator glow */}
            <motion.div
              style={{ marginTop: 12, height: 1, borderRadius: 1, background: 'linear-gradient(90deg,transparent,rgba(6,182,212,0.6),transparent)' }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
          </motion.div>
        </div>

      </div>
    </div>
  )
}

