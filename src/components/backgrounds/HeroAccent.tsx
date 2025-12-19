export default function HeroAccent() {
  const particles = [
    { top: "16%", left: "14%", size: 5, delay: "0s", dur: "14s", op: 0.2 },
    { top: "22%", left: "82%", size: 4, delay: "1.2s", dur: "16s", op: 0.16 },
    { top: "34%", left: "92%", size: 6, delay: "2.1s", dur: "18s", op: 0.14 },
    { top: "38%", left: "18%", size: 4, delay: "2.8s", dur: "15s", op: 0.16 },
    { top: "46%", left: "60%", size: 3, delay: "3.6s", dur: "17s", op: 0.1 },
    { top: "52%", left: "30%", size: 4, delay: "1.8s", dur: "19s", op: 0.12 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Más foco arriba, casi nada abajo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(900px 520px at 50% 18%, rgba(226,110,55,0.22), transparent 70%),
            radial-gradient(760px 520px at 50% 40%, rgba(226,110,55,0.07), transparent 75%)
          `,
          maskImage:
            "radial-gradient(ellipse at 50% 28%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 28%, black 0%, transparent 72%)",
        }}
      />

      {/* Anillos */}
      <div className="absolute left-1/2 top-[40%] h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/12 opacity-45" />
      <div className="absolute left-1/2 top-[40%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/12 opacity-30" />

      {/* Ring conic (súper fino) */}
      <div
        className="absolute left-1/2 top-[40%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 motion-safe:animate-[genesisOrbit_20s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(226,110,55,0) 0deg, rgba(226,110,55,0.55) 18deg, rgba(226,110,55,0) 60deg, rgba(226,110,55,0) 360deg)",
          maskImage:
            "radial-gradient(circle, transparent 58%, black 60%, black 62%, transparent 64%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 58%, black 60%, black 62%, transparent 64%)",
        }}
      />

      {/* Partículas */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="genesis-accent-particle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.op,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}

      {/* Fade abajo para que nunca “bañe” */}
      <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-b from-transparent to-background" />

      <style>{`
        @keyframes genesisOrbit {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes genesisDrift {
          0%   { transform: translate(0, 0); }
          50%  { transform: translate(10px, -12px); }
          100% { transform: translate(0, 0); }
        }
        .genesis-accent-particle {
          position: absolute;
          border-radius: 999px;
          background: rgba(226,110,55,0.92);
          box-shadow: 0 0 18px rgba(226,110,55,0.16);
          filter: blur(0.2px);
        }
        @media (prefers-reduced-motion: no-preference) {
          .genesis-accent-particle {
            animation-name: genesisDrift;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        }
      `}</style>
    </div>
  );
}
