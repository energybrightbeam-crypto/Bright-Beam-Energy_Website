// src/components/home/HeroArt.tsx
// Placeholder illustration shown only when no hero photo is set in data/site.ts
export function HeroArt() {
  const rows = [
    { y: 150, n: 2 },
    { y: 172, n: 3 },
    { y: 194, n: 4 },
  ];
  return (
    <svg viewBox="0 0 460 380" className="mx-auto h-auto w-full max-w-lg" role="img" aria-label="Illustration of a house with rooftop solar panels">
      <g stroke="#f7b32b" strokeWidth="4" strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return <line key={i} x1={380 + Math.cos(a) * 44} y1={70 + Math.sin(a) * 44} x2={380 + Math.cos(a) * 58} y2={70 + Math.sin(a) * 58} />;
        })}
      </g>
      <circle cx="380" cy="70" r="34" fill="#f7b32b" />
      <rect x="90" y="230" width="260" height="110" rx="6" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeOpacity="0.35" />
      <rect x="205" y="270" width="30" height="70" rx="3" fill="#f7b32b" fillOpacity="0.85" />
      <rect x="115" y="258" width="55" height="40" rx="3" fill="#f7b32b" fillOpacity="0.45" />
      <rect x="270" y="258" width="55" height="40" rx="3" fill="#f7b32b" fillOpacity="0.45" />
      <polygon points="220,110 380,230 60,230" fill="#123a8f" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
      {rows.map(({ y, n }) => {
        const w = n * 36 + (n - 1) * 4;
        const x0 = 220 - w / 2;
        return Array.from({ length: n }).map((_, i) => (
          <rect key={`${y}-${i}`} x={x0 + i * 40} y={y} width="36" height="18" rx="2" fill="#2f6fe0" stroke="#9ec5ff" strokeWidth="1.5" />
        ));
      })}
    </svg>
  );
}