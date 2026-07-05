'use client'
import { motion } from 'framer-motion'

const NAV = ['Home','How It Works','For Students','For Institutions','For Recruiters']

interface P { current:number; total:number; onGo:(i:number)=>void; progress:number }

export function SceneNav({ current, total, onGo, progress }: P) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16"
      style={{
        background:'rgba(5,9,18,0.90)',
        backdropFilter:'blur(18px)',
        WebkitBackdropFilter:'blur(18px)',
        borderBottom:'1px solid rgba(255,255,255,0.08)',
      }}>

      {/* Logo */}
      <div className="flex items-center gap-3 select-none">
        <div className="w-9 h-9 rounded-md flex items-center justify-center"
          style={{ background:'linear-gradient(135deg,#06b6d4 0%,#7c3aed 100%)', boxShadow:'0 0 14px rgba(6,182,212,0.45)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1l6 3v6l-6 3L1 10V4z" stroke="#fff" strokeWidth="1.2" fill="none"/>
            <circle cx="7" cy="7" r="1.8" fill="#fff"/>
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white font-semibold text-[16px] tracking-tight">
            CAREEROS
          </span>
          <span className="text-[9px] tracking-[0.18em] text-blue-300/60 uppercase">
            AI Career Intelligence
          </span>
        </div>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV.map((n,i) => (
          <a key={n} href="#" className="text-[15px] font-semibold text-white transition duration-300 ease-out hover:text-[#ff8e64] hover:drop-shadow-[0_0_18px_rgba(255,142,100,0.35)]"
            style={{ textDecoration:'none' }}>
            {n}
          </a>
        ))}
      </div>

      {/* Right: CTA only */}
      <div className="flex items-center gap-4">
        {/* Scene dots */}
        <div className="hidden md:flex items-center gap-[5px]">
          {Array.from({length:total}).map((_,i)=>(
            <button key={i} onClick={()=>onGo(i)}
              className="relative focus:outline-none"
              style={{
                width: i===current ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i===current
                  ? 'linear-gradient(90deg,#06b6d4,#7c3aed)'
                  : 'rgba(255,255,255,0.15)',
                transition:'all 0.35s ease',
              }}/>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="relative overflow-hidden px-5 py-3 rounded-xl text-[15px] font-bold text-white tracking-wider"
          style={{
            background:'linear-gradient(135deg,#06b6d4 0%,#1d4ed8 50%,#7c3aed 100%)',
            border:'1px solid rgba(6,182,212,0.55)',
            boxShadow:'0 0 22px rgba(6,182,212,0.35)',
          }}
          whileHover={{ scale:1.04, boxShadow:'0 0 24px rgba(6,182,212,0.5)' }}
          whileTap={{ scale:0.97 }}>
          <span className="relative z-10">ENTER THE SYSTEM</span>
          {/* progress underline */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-white/30 transition-none"
            style={{ width:`${progress}%`}}/>
        </motion.button>
      </div>
    </nav>
  )
}
