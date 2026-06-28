export function ScoreRing({
  score,
  max = 100,
  label,
}: {
  score: number;
  max?: number;
  label: string;
}) {
  const radius = 44;
  const stroke = 10;
  const normalized = 2 * Math.PI * radius;
  const progress = normalized - (Math.max(0, Math.min(score, max)) / max) * normalized;

  return (
    <div className="relative grid place-items-center">
      <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
          fill="transparent"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="url(#amberGradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={normalized}
          strokeDashoffset={progress}
          fill="transparent"
        />
        <defs>
          <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center -translate-y-1/12">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-none">{score}</span>
          {max && max !== 100 ? (
            <span className="text-xs sm:text-sm text-zinc-500">/ {max}</span>
          ) : null}
        </div>
        <span className="mt-2 text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</span>
      </div>
    </div>
  );
}
