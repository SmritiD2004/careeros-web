export function ScoreRing({
  score,
  label,
}: {
  score: number;
  label: string;
}) {
  const radius = 44;
  const stroke = 10;
  const normalized = 2 * Math.PI * radius;
  const progress = normalized - (score / 100) * normalized;

  return (
    <div className="grid place-items-center">
      <svg viewBox="0 0 120 120" className="size-36 -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="rgba(255,255,255,0.08)"
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
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-semibold text-white">{score}</span>
        <span className="mt-1 text-xs uppercase tracking-[0.24em] text-zinc-500">
          {label}
        </span>
      </div>
    </div>
  );
}
