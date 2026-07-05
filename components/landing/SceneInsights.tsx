'use client'
import { motion } from 'framer-motion'
import { SceneShell } from './SceneShell'

/* ── hexagonal radar chart ── */
const LABELS = ['DSA','System\nDesign','Projects','Communication','Aptitude','Resume']
const VALUES  = [0.52, 0.45, 0.68, 0.75, 0.60, 0.72]
const CX=150, CY=150, R=96

function hexPt(i:number, scale:number) {
  const a = (i*60 - 90)*(Math.PI/180)
  return { x: CX + R*scale*Math.cos(a), y: CY + R*scale*Math.sin(a) }
}
function hexPath(scale:number) {
  return Array.from({length:6},(_,i)=>{
    const {x,y}=hexPt(i,scale)
    return `${i===0?'M':'L'}${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')+'Z'
}

function RadarChart() {
  const dataPath = LABELS.map((_,i)=>{
    const {x,y}=hexPt(i,VALUES[i])
    return `${i===0?'M':'L'}${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')+'Z'

  return (
    <svg width="300" height="300" viewBox="0 0 300 300">
      {/* web rings */}
      {[0.25,0.45,0.65,0.85,1].map((s,i)=>(
        <path key={i} d={hexPath(s)} fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1"/>
      ))}
      {/* axis lines */}
      {LABELS.map((_,i)=>{
        const {x,y}=hexPt(i,1)
        return <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke="rgba(139,92,246,0.22)" strokeWidth="0.8"/>
      })}
      {/* data fill */}
      <path d={dataPath} fill="rgba(139,92,246,0.22)" stroke="#8b5cf6" strokeWidth="2"/>
      {/* data points */}
      {LABELS.map((_,i)=>{
        const {x,y}=hexPt(i,VALUES[i])
        return <motion.circle key={i} cx={x} cy={y} r={4} fill="#a855f7"
          animate={{r:[3,5.5,3]}} transition={{duration:2.2,repeat:Infinity,delay:i*0.28}}/>
      })}
      {/* labels */}
      {LABELS.map((l,i)=>{
        const labelScale = 1.3
        const {x,y}=hexPt(i, labelScale)
        const lines=l.split('\n')
        return <g key={i}>
          {lines.map((line,j)=>(
            <text key={j} x={x} y={y + (j * 12)} textAnchor="middle" dominantBaseline="middle"
              fontSize={10} fill="rgba(255,255,255,0.85)" fontWeight={500}>{line}</text>
          ))}
        </g>
      })}
    </svg>
  )
}

export function SceneInsights() {
  return (
    <div className="absolute inset-0"
      style={{background:'radial-gradient(ellipse 90% 90% at 52% 50%, #110826 0%, #04060f 100%)'}}>
      <div className="absolute inset-0 opacity-[0.03]"
        style={{backgroundImage:'linear-gradient(#8b5cf6 1px,transparent 1px),linear-gradient(90deg,#8b5cf6 1px,transparent 1px)',backgroundSize:'44px 44px'}}/>

      <SceneShell sceneNum="SCENE 03" accentColor="#8b5cf6" title="ANALYSIS"
        desc="We identify your gaps, strengths and hidden opportunities.">

        <div className="absolute inset-0 flex items-center justify-center" style={{paddingRight:220}}>

          {/* heading */}
          <div className="absolute top-24 left-0 right-0 text-center">
            <p className="text-[22px] font-bold tracking-[0.24em] uppercase" style={{color:'#a855f7', letterSpacing:'0.22em'}}>ANALYSIS COMPLETE</p>
            <p className="text-[13px] text-white/45 mt-3">Here's what we found.</p>
          </div>

          {/* 3-column content row */}
          <div className="flex items-center gap-10 mt-14">
            {/* STRENGTHS card */}
            <motion.div className="p-6 rounded-3xl" style={{width:188, minHeight:186,
              background:'rgba(4,12,10,0.88)', border:'1px solid rgba(16,185,129,0.42)',
              boxShadow:'0 0 26px rgba(16,185,129,0.14)', backdropFilter:'blur(12px)'}}>
              <p className="text-[11px] font-bold tracking-widest mb-4" style={{color:'#10b981'}}>STRENGTHS</p>
              {['Problem Solving','Logical Thinking','Consistency'].map((s,i)=>(
                <div key={i} className="flex items-center gap-1.5 mb-2.5 text-[11px] text-white/75">
                  <span className="text-[10px] font-bold" style={{color:'#10b981'}}>✓</span>{s}
                </div>
              ))}
            </motion.div>

            {/* radar */}
            <motion.div className="relative" style={{width: 300, height: 300, display:'flex', alignItems:'center', justifyContent:'center'}}
              animate={{filter:['drop-shadow(0 0 12px rgba(139,92,246,0.32))','drop-shadow(0 0 34px rgba(139,92,246,0.72))','drop-shadow(0 0 12px rgba(139,92,246,0.32))']}}
              transition={{duration:3,repeat:Infinity}}>
              <div className="absolute inset-0 rounded-full opacity-70"
                style={{background:'radial-gradient(circle, rgba(139,92,246,0.13), transparent 55%)'}} />
              <div className="absolute inset-12 rounded-full opacity-40"
                style={{border:'1px solid rgba(139,92,246,0.18)'}} />
              <RadarChart/>
            </motion.div>

            {/* SKILL GAPS card */}
            <motion.div className="p-6 rounded-3xl" style={{width:188, minHeight:186,
              background:'rgba(12,4,4,0.88)', border:'1px solid rgba(239,68,68,0.42)',
              boxShadow:'0 0 26px rgba(239,68,68,0.14)', backdropFilter:'blur(12px)'}}>
              <p className="text-[11px] font-bold tracking-widest mb-4" style={{color:'#ef4444'}}>SKILL GAPS</p>
              {['System Design','Advanced DSA','Communication','Cloud Knowledge'].map((s,i)=>(
                <div key={i} className="flex items-center gap-1.5 mb-2 text-[11px] text-white/75">
                  <span className="text-orange-400 text-[10px]">△</span>{s}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="absolute right-0 top-16 bottom-0 flex flex-col justify-center gap-5 pr-6" style={{width:248}}>

          {/* Placement Readiness */}
          <div className="p-5 rounded-3xl" style={{background:'rgba(5,8,25,0.92)',border:'1px solid rgba(139,92,246,0.34)',backdropFilter:'blur(12px)'}}>
            <p className="text-[11px] font-bold tracking-widest mb-4 text-white/65">PLACEMENT READINESS</p>
            <div className="flex items-center gap-4">
              {/* big circle pct */}
              <div className="relative" style={{width:76, height:76}}>
                <svg width="70" height="70" viewBox="0 0 70 70">
                  <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5"/>
                  <motion.circle cx="35" cy="35" r="28" fill="none" stroke="#8b5cf6" strokeWidth="5"
                    strokeDasharray={2*Math.PI*28}
                    strokeLinecap="round"
                    style={{transformOrigin:'35px 35px',transform:'rotate(-90deg)'}}
                    animate={{strokeDashoffset:[2*Math.PI*28, 2*Math.PI*28*(1-0.62)]}}
                    transition={{duration:1.8,ease:'easeOut'}}/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[16px] font-bold" style={{color:'#a855f7'}}>62%</span>
                </div>
              </div>
              <div>
                <p className="text-[11px] text-white/70">Keep going! You're</p>
                <p className="text-[11px] text-white/70">on the right track.</p>
              </div>
            </div>
          </div>

          {/* Industry Fit */}
          <div className="p-5 rounded-3xl" style={{background:'rgba(5,8,25,0.92)',border:'1px solid rgba(16,185,129,0.34)',backdropFilter:'blur(12px)'}}>
            <p className="text-[11px] font-bold tracking-widest mb-2 text-white/65">INDUSTRY FIT</p>
            <p className="text-[14px] font-bold mt-1" style={{color:'#10b981'}}>✔ Good Match</p>
            <p className="text-[11px] text-white/50">for Software Engineer</p>
          </div>

        </div>

      </SceneShell>
    </div>
  )
}
