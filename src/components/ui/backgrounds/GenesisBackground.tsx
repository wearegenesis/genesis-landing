export default function GenesisBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora + atmósfera (suave, usable en toda la web) */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            radial-gradient(900px 520px at 50% 8%, rgba(226,110,55,0.18), transparent 70%),
            radial-gradient(900px 620px at 15% 55%, rgba(255,184,92,0.07), transparent 72%),
            radial-gradient(900px 620px at 85% 60%, rgba(255,90,61,0.06), transparent 72%),
            linear-gradient(180deg, rgba(226,110,55,0.05), transparent 55%),
            linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(226,110,55,0.03) 45%, rgba(0,0,0,0) 100%)
          `,
        }}
      />

      {/* “Circuit lines” MUY sutil (da vibe IA/automatización sin ser pesado) */}
      <div
        className="absolute inset-0 opacity-[0.10] dark:opacity-[0.14]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg,
              rgba(255,255,255,0.10) 0px,
              rgba(255,255,255,0.10) 1px,
              transparent 1px,
              transparent 140px
            ),
            repeating-linear-gradient(0deg,
              rgba(255,255,255,0.08) 0px,
              rgba(255,255,255,0.08) 1px,
              transparent 1px,
              transparent 120px
            )
          `,
          backgroundSize: "100% 100%",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
        }}
      />

      {/* Light mode: circuit lines en negro muy suave */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg,
              rgba(0,0,0,0.10) 0px,
              rgba(0,0,0,0.10) 1px,
              transparent 1px,
              transparent 140px
            ),
            repeating-linear-gradient(0deg,
              rgba(0,0,0,0.08) 0px,
              rgba(0,0,0,0.08) 1px,
              transparent 1px,
              transparent 120px
            )
          `,
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
        }}
      />

      {/* Noise ultra fino */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
                0deg,
                rgba(255,255,255,0.05) 0px,
                rgba(255,255,255,0.05) 1px,
                transparent 2px,
                transparent 4px
            ),
            repeating-linear-gradient(
                90deg,
                rgba(0,0,0,0.05) 0px,
                rgba(0,0,0,0.05) 1px,
                transparent 2px,
                transparent 5px
            )
            `,
        }}
      />

      {/* Vignette en dark para profundidad */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.78)_100%)]" />
    </div>
  );
}
