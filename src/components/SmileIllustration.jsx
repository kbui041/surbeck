/* Lightweight clinical before/after illustration: a row of teeth that is
   crooked (before) or aligned (after). Placeholder until real photos are added. */
function rand(seed) {
  const x = Math.sin(seed * 99.73) * 10000;
  return x - Math.floor(x);
}

export default function SmileIllustration({ aligned = false, seed = 1 }) {
  const n = 10;
  const left = 34, right = 266, baseY = 120;
  const teeth = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const arch = Math.sin(Math.PI * t) * 18;
    const jx = aligned ? 0 : (rand(seed + i * 3.1) - 0.5) * 9;
    const jy = aligned ? 0 : (rand(seed + i * 5.7) - 0.5) * 10;
    const rot = aligned ? 0 : (rand(seed + i * 7.3) - 0.5) * 26;
    const w = aligned ? 21 : 16 + rand(seed + i * 2.2) * 9;
    const h = 34;
    teeth.push({ cx: left + t * (right - left) + jx, cy: baseY - arch + jy, w, h, rot });
  }

  return (
    <svg className="smile-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img"
         aria-label={aligned ? "After: aligned teeth" : "Before: misaligned teeth"}>
      <defs>
        <linearGradient id="smbg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4eee4" />
          <stop offset="1" stopColor="#e8dfce" />
        </linearGradient>
      </defs>
      <rect width="300" height="220" fill="url(#smbg)" />
      {/* gum arch behind the teeth */}
      <path d="M18,150 Q150,66 282,150" fill="none" stroke="#d8b3ab" strokeWidth="30"
            strokeLinecap="round" opacity="0.45" />
      {teeth.map((t, i) => (
        <g key={i} transform={`translate(${t.cx} ${t.cy}) rotate(${t.rot})`}>
          <rect x={-t.w / 2} y={-t.h / 2} width={t.w} height={t.h} rx="6"
                fill="#ffffff" stroke="#e0d8c6" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}
