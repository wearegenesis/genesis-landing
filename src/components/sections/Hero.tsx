import HeroAccent from "../ui/backgrounds/HeroAccent";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <HeroAccent />

      <div className="mx-auto max-w-6xl px-6 pt-40 pb-24 md:pt-48">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl [text-wrap:balance] drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
            Menos tareas repetitivas.{" "}
            <span className="text-genesis-orange">Más foco.</span>{" "}
            Automatización e IA que funcionan.
          </h1>

          <div className="mt-10">
            <a
              href="#contact"
              className="
                group relative inline-flex items-center justify-center
                rounded-full px-8 py-3 text-sm font-medium
                bg-foreground text-background
                border border-transparent
                shadow-[0_10px_30px_rgba(0,0,0,0.22)]
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:shadow-[0_16px_46px_rgba(0,0,0,0.30)]
                hover:border-foreground/20
                active:translate-y-0 active:shadow-[0_10px_30px_rgba(0,0,0,0.22)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-genesis-orange/60
                focus-visible:ring-offset-2 focus-visible:ring-offset-background
              "
            >
              {/* highlight sutil (no glow naranja) */}
              <span
                className="
                  pointer-events-none absolute inset-0 rounded-full opacity-0
                  bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_60%)]
                  transition-opacity duration-200
                  group-hover:opacity-100
                "
              />
              <span className="relative">Agenda una cita</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="genesis-chip genesis-float-1">
              Implementación rápida
            </span>
            <span className="genesis-chip genesis-float-2">
              Integración con tu stack
            </span>
            <span className="genesis-chip genesis-float-3">
              Soporte y mejora continua
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
