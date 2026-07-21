'use client'
import { motion } from 'framer-motion'
import { SceneShell } from './SceneShell'

const STEPS = [
  { label: 'Foundation', sub: '2/5 Completed', status: 'done', icon: '📚' },
  { label: 'Core Skills', sub: '3/3 Completed', status: 'done', icon: '⚙️' },
  { label: 'Advanced', sub: 'In Progress', status: 'active', icon: '🎓' },
  { label: 'Specialization', sub: 'Locked', status: 'locked', icon: '🔒' },
  { label: 'Placement Ready', sub: 'Locked', status: 'locked', icon: '🏆' },
]

const DOT_COLOR: Record<string, string> = {
  done: '#10b981',
  active: '#06b6d4',
  locked: 'rgba(255,255,255,0.15)',
}

const WEEKS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const BARS = [40, 55, 70, 60, 90, 78, 20]

export function SceneRoadmap() {
  return (
    <div className="absolute inset-0"
      style={{ background: '#000' }}>
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#10b981 1px,transparent 1px),linear-gradient(90deg,#10b981 1px,transparent 1px)', backgroundSize: '44px 44px' }} />

      <SceneShell sceneNum="SCENE 04" accentColor="#10b981" title="EVOLUTION"
        desc="Personalized roadmap adapts and evolves with your progress.">

        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingRight: 220 }}>
          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingRight: 220 }}>

            {/* VIDEO */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute"
              style={{
                width: '900px',
                maxWidth: '70vw',
                height: 'auto',
                objectFit: 'contain',
                zIndex: 1,
                background: 'transparent',
                pointerEvents: 'none'
              }}
            >
              <source src="/videos/roadmap.mp4" type="video/mp4" />
            </video>

            {/* heading */}
            <div className="absolute top-24 left-0 right-0 text-center z-20">
              <p className="text-lg font-bold text-white tracking-[0.15em]">
                YOUR PERSONALIZED ROADMAP
              </p>
              <p className="text-[12px] text-white/40 mt-1">
                AI creates. You grow. We evolve together.
              </p>
            </div>

            {/* adaptive label */}
            <div className="absolute bottom-12 left-0 right-24 flex justify-center z-20">
              <motion.div
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px]"
                style={{
                  background: 'rgba(16,185,129,0.07)',
                  border: '1px solid rgba(16,185,129,0.35)',
                  color: '#10b981'
                }}
                animate={{
                  borderColor: [
                    'rgba(16,185,129,0.2)',
                    'rgba(16,185,129,0.55)',
                    'rgba(16,185,129,0.2)'
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity
                }}
              >
                〜 Roadmap adapts based on your progress
              </motion.div>
            </div>

          </div>

          {/* adaptive label bottom */}
          <div className="absolute bottom-12 left-0 right-24 flex justify-center">
            <motion.div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px]"
              style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.35)', color: '#10b981' }}
              animate={{ borderColor: ['rgba(16,185,129,0.2)', 'rgba(16,185,129,0.55)', 'rgba(16,185,129,0.2)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}>
              〜 Roadmap adapts based on your progress
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="absolute right-0 top-14 bottom-0 flex flex-col justify-center gap-3 pr-5" style={{ width: 215 }}>

          {/* weekly bar chart */}
          <div className="p-4 rounded-xl" style={{ background: 'rgba(3,10,7,0.92)', border: '1px solid rgba(16,185,129,0.22)', backdropFilter: 'blur(10px)' }}>
            <p className="text-[10px] font-bold tracking-widest mb-3 text-white/50">WEEKLY PROGRESS</p>
            <div className="flex items-end gap-1.5 h-16">
              {BARS.map((v, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
                  <motion.div className="w-full rounded-t-sm"
                    style={{ background: 'linear-gradient(to top,#10b981,#06b6d4)' }}
                    animate={{ height: [0, (v / 100) * 58] }}
                    initial={{ height: 0 }}
                    transition={{ duration: 0.9, delay: i * 0.09, ease: 'easeOut' }} />
                  <span className="text-[7px] text-white/25">{WEEKS[i].slice(0, 2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Streak */}
          <motion.div className="p-4 rounded-xl"
            style={{ background: 'rgba(12,7,2,0.92)', border: '1px solid rgba(251,146,60,0.32)', boxShadow: '0 0 20px rgba(251,146,60,0.08)', backdropFilter: 'blur(10px)' }}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔥</span>
              <div>
                <p className="text-[9px] text-white/40 uppercase tracking-widest">Current Streak</p>
                <p className="text-2xl font-bold" style={{ color: '#fb923c' }}>12 Days</p>
                <p className="text-[9px] text-white/30">Keep the momentum!</p>
              </div>
            </div>
          </motion.div>

        </div>

      </SceneShell>
    </div>
  )
}
