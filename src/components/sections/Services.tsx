import React from "react";
import ServicesCalculator from "./ServicesCalculator";

function IconAutomation() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v4h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 14h8M8 17h6M8 11h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-genesis-orange/90 shadow-[0_0_18px_rgba(226,110,55,0.22)]" />
      <span>{children}</span>
    </li>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Cómo te ayudamos
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-foreground/78 md:text-[18px]">
            Montamos automatización e IA aplicada para que tu negocio gane
            velocidad: menos tareas repetitivas, más control y más conversión.
          </p>
        </div>

        {/* Feature (solo Automatización por ahora) */}
        <div className="mt-14 grid items-center gap-10 md:mt-16 md:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Automatización de procesos
            </h3>

            <p className="mt-4 text-[16px] leading-relaxed text-foreground/76 md:text-[17px]">
              Presupuestos, facturas, seguimiento y operaciones internas
              conectadas. Quitamos el copiar/pegar y dejamos un sistema que
              escala sin fricción.
            </p>

            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-foreground/78 md:text-[16px]">
              <Bullet>
                Presupuestos y documentos automáticos (sin errores tontos)
              </Bullet>
              <Bullet>Facturas, emails y tareas “a un clic”</Bullet>
              <Bullet>
                Integración con tu stack (Sheets / CRM / Email / ERP)
              </Bullet>
            </ul>
          </div>

          {/* Media */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-background/15 backdrop-blur-xl shadow-[0_22px_90px_rgba(0,0,0,0.35)]">
              {/* halo sutil naranja */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.18),transparent_60%)] blur-2xl" />
                <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.10),transparent_60%)] blur-2xl" />
              </div>

              {/* grid MUY suave */}
              <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />

              {/* Media */}
              <div className="relative">
                <img
                  src="/AutomatizacionGif.gif"
                  alt="Automatización de procesos"
                  className="h-auto w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background/60" />
              </div>

              {/* Caption minimal (mejor) */}
              <div className="relative border-t border-foreground/10 px-6 py-5">
                <div className="mt-2 text-[15px] font-medium leading-relaxed text-foreground/80">
                  Menos errores, menos trabajo manual y más velocidad en el día
                  a día.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculadora */}
        <ServicesCalculator />
      </div>
    </section>
  );
}
