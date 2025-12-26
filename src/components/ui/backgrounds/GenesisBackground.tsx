export default function GenesisBackground() {
  // 🔧 AJUSTES RÁPIDOS (toca aquí)
  const STAR_COUNT = 60; // desktop/tablet
  const MOBILE_STAR_CAP = 28; // ✅ cuántas partículas quieres en móvil

  const MIN_SIZE = 3;
  const MAX_SIZE = 7;

  const OP_MIN = 0.08;
  const OP_MAX = 0.16;

  // ✅ Random determinista (sin Math.random) para que no cambie cada render
  function mulberry32(a: number) {
    return function () {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const rand = mulberry32(1337);

  const stars = Array.from({ length: STAR_COUNT }).map((_, i) => {
    const top = 2 + rand() * 96;
    const left = 2 + rand() * 96;
    const size = Math.round(MIN_SIZE + rand() * (MAX_SIZE - MIN_SIZE));
    const op = OP_MIN + rand() * (OP_MAX - OP_MIN);
    const dur = (6 + rand() * 10).toFixed(1) + "s"; // 6–16s
    const delay = (rand() * 3).toFixed(2) + "s";
    const boost = rand() > 0.86 ? 1.6 : 1.0;

    return { top, left, size, op, dur, delay, boost, key: i };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.key}
          className="genesis-star"
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              // Pasamos valores a CSS variables para poder “rebajar” en móvil sin tocar JS
              ["--op" as any]: s.op,
              ["--dur" as any]: s.dur,
              ["--delay" as any]: s.delay,
              ["--b" as any]: s.boost,
            } as React.CSSProperties
          }
        />
      ))}

      <style>{`
        .genesis-star{
          position:absolute;
          border-radius:999px;
          background: rgba(226,110,55,0.95);
          opacity: var(--op);
          box-shadow:
            0 0 12px rgba(226,110,55,0.18),
            0 0 28px rgba(226,110,55,0.10);
          filter: blur(0.15px);
          will-change: transform, opacity;
        }

        @keyframes genesisTwinkle {
          0%   { opacity: calc(var(--op) * 0.35); transform: translate(0,0) scale(calc(var(--b) * 0.95)); }
          35%  { opacity: calc(var(--op) * 1.25); transform: translate(1px,-1px) scale(calc(var(--b) * 1.15)); }
          70%  { opacity: calc(var(--op) * 0.55); transform: translate(-1px,1px) scale(calc(var(--b) * 1.02)); }
          100% { opacity: calc(var(--op) * 0.35); transform: translate(0,0) scale(calc(var(--b) * 0.95)); }
        }

        @media (prefers-reduced-motion: no-preference) {
          .genesis-star{
            animation-name: genesisTwinkle;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-duration: var(--dur);
            animation-delay: var(--delay);
          }
        }

        /* Light mode: un pelín más sutil */
        html:not(.dark) .genesis-star{
          box-shadow:
            0 0 10px rgba(226,110,55,0.12),
            0 0 20px rgba(226,110,55,0.08);
        }

        /* ✅ MÓVIL: menos partículas + menos presencia */
        @media (max-width: 640px) {
          .genesis-star:nth-child(n+${MOBILE_STAR_CAP + 1}) { display:none; }
          .genesis-star{
            opacity: calc(var(--op) * 0.60);
            box-shadow:
              0 0 10px rgba(226,110,55,0.12),
              0 0 18px rgba(226,110,55,0.07);
          }
        }
      `}</style>
    </div>
  );
}
