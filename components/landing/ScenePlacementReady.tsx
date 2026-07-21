'use client'

export function ScenePlacementReady() {
  return (
    <div className="bg-black pt-16 md:pt-20">
      <div className="w-full overflow-hidden bg-black">
        <img
          src="/scene5-futureyou.png"
          alt="Future you background"
          className="w-full h-auto max-h-[76vh] object-contain"
          style={{ objectPosition: 'center 40%' }}
        />
      </div>

      <section className="w-full bg-black px-6 pt-12 pb-28 text-center text-white">
        <div className="mx-auto mb-8 inline-flex items-center justify-center gap-3 rounded-full bg-white/5 px-4 py-2 backdrop-blur-xl border border-white/10 max-w-max">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.7)]" />
          <span className="text-[10px] uppercase tracking-[0.32em] text-white/80">SCENE 05</span>
        </div>

        <h1 className="text-[2.4rem] md:text-[2.45rem] font-black tracking-tight leading-[1.02] mb-8">
          FUTURE YOU
        </h1>

        <p className="mx-auto max-w-xl text-sm md:text-base leading-8 text-white/90">
          From a confused student to a future-ready professional.
        </p>
      </section>
    </div>
  )
}
