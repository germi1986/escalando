type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-28 w-28 md:h-36 md:w-36",
};

export default function BrandMark({
  size = "md",
  showLabel = false,
  className = "",
}: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`brand-mark relative ${sizeClasses[size]}`} aria-hidden="true">
        <svg
          viewBox="0 0 180 180"
          role="img"
          aria-label="Isotipo abstracto de Escalando Labs"
          className="h-full w-full overflow-visible drop-shadow-[0_0_28px_rgba(34,211,238,0.34)]"
        >
          <defs>
            <linearGradient id="el-bubble-gradient" x1="24" x2="156" y1="148" y2="30">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="52%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
            <linearGradient id="el-magenta-gradient" x1="114" x2="160" y1="124" y2="42">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <filter id="el-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M88 22c-37.6 0-68 27.8-68 62.2 0 15 5.8 28.8 15.5 39.5l-9.2 30.1 31.3-13.7c9.2 4 19.6 6.3 30.4 6.3 37.6 0 68-27.8 68-62.2S125.6 22 88 22Z"
            fill="none"
            stroke="url(#el-bubble-gradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="10"
          />

          <path
            d="M37 96c22-20 46-21 71 0 18 14 33 15 51 2"
            fill="none"
            stroke="url(#el-bubble-gradient)"
            strokeLinecap="round"
            strokeWidth="6"
            className="brand-flow brand-flow-one"
          />
          <path
            d="M44 116c20-16 41-16 61 0 17 13 35 13 52-1"
            fill="none"
            stroke="url(#el-bubble-gradient)"
            strokeLinecap="round"
            strokeWidth="5"
            opacity="0.78"
            className="brand-flow brand-flow-two"
          />
          <path
            d="M92 112c13-27 30-49 55-68"
            fill="none"
            stroke="url(#el-magenta-gradient)"
            strokeLinecap="round"
            strokeWidth="6"
            className="brand-flow brand-flow-three"
          />
          <path
            d="M104 86c17 14 32 9 43-10"
            fill="none"
            stroke="url(#el-magenta-gradient)"
            strokeLinecap="round"
            strokeWidth="5"
            opacity="0.76"
          />

          {[
            [64, 90, 9, "#2563eb"],
            [66, 113, 7.5, "#1d4ed8"],
            [112, 94, 8.5, "#06b6d4"],
            [121, 68, 8.5, "#22d3ee"],
            [150, 44, 7.5, "#d946ef"],
            [156, 78, 7.5, "#06b6d4"],
          ].map(([cx, cy, r, color], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={r}
              fill={color as string}
              filter="url(#el-soft-glow)"
              className={`brand-node brand-node-${index + 1}`}
            />
          ))}

          <circle
            cx="134"
            cy="48"
            r="8"
            fill="none"
            stroke="#2dd4bf"
            strokeWidth="5"
            filter="url(#el-soft-glow)"
          />
        </svg>
      </div>

      {showLabel ? (
        <div className="leading-none">
          <span className="block text-base font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-lg">
            Escalando <span className="text-[var(--brand-cyan)]">Labs</span>
          </span>
          <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">
            WhatsApp IA Ops
          </span>
        </div>
      ) : null}
    </div>
  );
}
