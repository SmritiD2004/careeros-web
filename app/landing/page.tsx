'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SceneNav } from '@/components/landing/SceneNav'
import { SceneChaos } from '@/components/landing/SceneChaos'
import { SceneAnalysis } from '@/components/landing/SceneAnalysis'
import { SceneInsights } from '@/components/landing/SceneInsights'
import { SceneRoadmap } from '@/components/landing/SceneRoadmap'
import { ScenePlacementReady } from '@/components/landing/ScenePlacementReady'
import { SceneFinal } from '@/components/landing/SceneFinal'

const SCENES = [
  { id: 'chaos',     Component: SceneChaos },
  { id: 'analysis',  Component: SceneAnalysis },
  { id: 'insights',  Component: SceneInsights },
  { id: 'roadmap',   Component: SceneRoadmap },
  { id: 'placement', Component: ScenePlacementReady },
  { id: 'final',     Component: SceneFinal },
]

const AUTO_MS = 5000

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function CareerOSLanding() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const startRef = useRef(Date.now())

  const goTo = (idx: number) => {
    setCurrent(idx)
    setProgress(0)
    startRef.current = Date.now()
  }

  useEffect(() => {
    if (current >= SCENES.length - 1) {
      setProgress(100)
      return
    }

    const tick = () => {
      const elapsed = Date.now() - startRef.current
      const pct = Math.min((elapsed / AUTO_MS) * 100, 100)
      setProgress(pct)
      if (elapsed >= AUTO_MS) {
        setCurrent((prev) => Math.min(prev + 1, SCENES.length - 1))
        startRef.current = Date.now()
      }
    }

    tick()
    const interval = window.setInterval(tick, 50)
    return () => window.clearInterval(interval)
  }, [current])

  const { Component } = SCENES[current]

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: '#04060f', fontFamily: "'Inter', 'Geist', system-ui, sans-serif" }}>
      <SceneNav current={current} total={SCENES.length} onGo={goTo} progress={progress} />
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Component />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
