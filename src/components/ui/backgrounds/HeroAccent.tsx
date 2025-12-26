export default function HeroAccent() {
  // Ajusta esto si quieres subir/bajar TODO el fondo respecto al texto
  const CENTER_Y = 46; // (%)

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Glow centrado con el texto */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(900px 560px at 50% ${CENTER_Y}%, rgba(226,110,55,0.22), transparent 70%),
            radial-gradient(760px 520px at 50% ${
              CENTER_Y + 14
            }%, rgba(226,110,55,0.07), transparent 75%)
          `,
          maskImage: `radial-gradient(ellipse at 50% ${CENTER_Y}%, black 0%, transparent 72%)`,
          WebkitMaskImage: `radial-gradient(ellipse at 50% ${CENTER_Y}%, black 0%, transparent 72%)`,
        }}
      />

      {/* Anillos (centrados) */}
      <div
        className="absolute left-1/2 rounded-full border border-foreground/12 opacity-45"
        style={{
          top: `${CENTER_Y}%`,
          width: 680,
          height: 680,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute left-1/2 rounded-full border border-foreground/12 opacity-30"
        style={{
          top: `${CENTER_Y}%`,
          width: 460,
          height: 460,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Aro conic FINO + movimiento “libre” + rotación (sin depender del translate en la animación) */}
      <div
        className="absolute left-1/2"
        style={{
          top: `${CENTER_Y}%`,
          width: 560,
          height: 560,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="absolute inset-0 rounded-full opacity-70 motion-safe:animate-[genesisRingDrift_18s_ease-in-out_infinite]">
          <div
            className="absolute inset-0 rounded-full motion-safe:animate-[genesisOrbit_20s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(226,110,55,0) 0deg, rgba(226,110,55,0.55) 18deg, rgba(226,110,55,0) 62deg, rgba(226,110,55,0) 360deg)",
              // MUY fino (para que no se haga “gordo”)
              maskImage:
                "radial-gradient(circle, transparent 61.2%, black 61.55%, black 62.05%, transparent 62.4%)",
              WebkitMaskImage:
                "radial-gradient(circle, transparent 61.2%, black 61.55%, black 62.05%, transparent 62.4%)",
              filter: "blur(0.15px)",
            }}
          />
        </div>
      </div>

      {/* Fade abajo para que el glow no “bañe” demasiado */}
      <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-b from-transparent to-background" />

      <style>{`
        @keyframes genesisOrbit {
          to { transform: rotate(360deg); }
        }

        /* Drift suave SIN tocar el centrado (el centrado ya lo hace el wrapper) */
        @keyframes genesisRingDrift {
          0%   { transform: translate(-18px, -10px); }
          25%  { transform: translate(14px, -22px); }
          50%  { transform: translate(22px, 10px); }
          75%  { transform: translate(-10px, 18px); }
          100% { transform: translate(-18px, -10px); }
        }
      `}</style>
    </div>
  );
}
