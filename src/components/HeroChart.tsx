export function HeroChart() {
  const lines = [
    "M-20 60 C 150 20, 350 110, 540 70 S 820 40, 1020 90",
    "M-20 150 C 180 110, 360 190, 560 150 S 820 110, 1020 170",
    "M-20 240 C 160 200, 380 280, 560 240 S 820 200, 1020 260",
    "M-20 330 C 180 290, 380 370, 580 330 S 820 290, 1020 350",
    "M-20 420 C 160 380, 400 460, 600 420 S 820 380, 1020 440",
  ];
  const soundings: Array<{ x: number; y: number; d: string }> = [
    { x: 110, y: 95, d: "3,2" },
    { x: 310, y: 65, d: "4,8" },
    { x: 520, y: 140, d: "7,1" },
    { x: 740, y: 90, d: "9,4" },
    { x: 230, y: 210, d: "5,6" },
    { x: 460, y: 260, d: "8,3" },
    { x: 660, y: 190, d: "11,2" },
    { x: 870, y: 220, d: "14,0" },
    { x: 150, y: 320, d: "12,5" },
    { x: 380, y: 390, d: "15,8" },
    { x: 620, y: 350, d: "18,1" },
    { x: 820, y: 330, d: "21,0" },
  ];
  return (
    <svg
      className="hero-chart"
      viewBox="0 0 1000 480"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--sea)" stopOpacity="0.14" />
          <stop offset="1" stopColor="var(--sea)" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1000" height="480" fill="url(#hero-fade)" />
      {lines.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="var(--sea)"
          strokeOpacity={0.5 - i * 0.06}
          strokeWidth={1}
        />
      ))}
      {soundings.map((s, i) => (
        <text
          key={i}
          x={s.x}
          y={s.y}
          fontSize="10"
          fill="var(--ink-soft)"
          fontFamily="var(--font-sans)"
        >
          {s.d}
        </text>
      ))}
    </svg>
  );
}
