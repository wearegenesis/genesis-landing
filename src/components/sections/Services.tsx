import React from "react";
import ServicesCalculator from "./ServicesCalculator";
import Reveal from "../ui/Reveal";

function Bullet({ children }: { children: React.ReactNode }) {
  // ✅ OJO: ya NO devolvemos <li>, devolvemos un contenedor
  return (
    <div className="flex gap-3">
      <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-genesis-orange/90 shadow-[0_0_18px_rgba(226,110,55,0.22)]" />
      <span>{children}</span>
    </div>
  );
}

type FeatureProps = {
  title: string;
  description: string;
  bullets: React.ReactNode[];
  gifSrc: string;
  gifAlt: string;
  caption: string;
  reverse?: boolean;
  floatClass?: string;
};

function Feature({
  title,
  description,
  bullets,
  gifSrc,
  gifAlt,
  caption,
  reverse,
  floatClass,
}: FeatureProps) {
  const textVariant: "left" | "right" = reverse ? "right" : "left";
  const mediaVariant: "left" | "right" = reverse ? "left" : "right";

  return (
    <div
      className={[
        "grid items-center gap-12",
        "md:grid-cols-[1.05fr_0.95fr]",
        reverse
          ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1"
          : "",
      ].join(" ")}
    >
      {/* Copy */}
      <Reveal variant={textVariant} delayMs={40}>
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h3>

          <p className="mt-4 text-[16px] leading-relaxed text-foreground/82 md:text-[17px]">
            {description}
          </p>

          <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-foreground/82 md:text-[16px]">
            {bullets.map((b, i) => (
              <Reveal key={i} as="li" delayMs={140 + i * 80}>
                <Bullet>{b}</Bullet>
              </Reveal>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Media (flotando) */}
      <Reveal variant={mediaVariant} delayMs={90}>
        <div
          className={["relative will-change-transform", floatClass ?? ""].join(
            " "
          )}
        >
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
                src={gifSrc}
                alt={gifAlt}
                className="h-auto w-full object-cover"
                loading="lazy"
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background/60" />
            </div>

            {/* Caption */}
            <div className="relative border-t border-foreground/10 px-6 py-5">
              <div className="text-[15px] font-medium leading-relaxed text-foreground/84">
                {caption}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal
            as="h2"
            className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl"
          >
            Cómo te ayudamos
          </Reveal>

          <Reveal
            delayMs={90}
            className="mt-4 text-[16px] leading-relaxed text-foreground/82 md:text-[18px]"
          >
            Montamos automatización e IA aplicada para que tu negocio gane
            velocidad: menos tareas repetitivas, más control y más conversión.
          </Reveal>
        </div>

        {/* FEATURES */}
        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          <Feature
            title="Automatización de procesos"
            description="Presupuestos, facturas, seguimiento y operaciones internas conectadas. Quitamos el copiar/pegar y dejamos un sistema que escala sin fricción."
            bullets={[
              "Presupuestos y documentos automáticos (sin errores tontos)",
              "Facturas, emails y tareas “a un clic”",
              "Integración con tu stack (Sheets / CRM / Email / ERP)",
            ]}
            gifSrc="/AutomatizacionGif.gif"
            gifAlt="Automatización de procesos"
            caption="Menos errores, menos trabajo manual y más velocidad en el día a día."
            floatClass="genesis-float-1"
          />

          <Feature
            reverse
            title="Agentes IA (WhatsApp / atención al cliente)"
            description="Tu atención al cliente siempre activa: responde, filtra leads y agenda citas sin que estés pegado al móvil."
            bullets={[
              "Respuestas automáticas + cualificación de leads",
              "Agenda de citas y seguimiento",
              "Derivación a humano con contexto cuando toca",
            ]}
            gifSrc="/AgenteIA6.gif"
            gifAlt="Agentes IA para atención al cliente"
            caption="Respuestas consistentes, seguimiento y handoff a humano sin perder contexto."
            floatClass="genesis-float-2"
          />

          <Feature
            title="Webs que captan clientes"
            description="Landing pages rápidas y claras para convertir visitas en clientes, con formularios conectados y medición para optimizar."
            bullets={[
              "Estructura + copy orientado a conversión",
              "Formulario conectado a CRM/WhatsApp",
              "SEO básico + analítica (GA4 / eventos)",
            ]}
            gifSrc="/WebGif.gif"
            gifAlt="Webs que captan clientes"
            caption="Páginas que se entienden en segundos y convierten con una estructura pensada para ventas."
            floatClass="genesis-float-3"
          />
        </div>

        {/* Calculadora */}
        <Reveal delayMs={120}>
          <div className="mt-20 md:mt-24">
            <ServicesCalculator />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
