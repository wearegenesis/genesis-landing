"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    num: 1,
    title: "Diagnóstico",
    description:
      "Entendemos tu operación, detectamos cuellos de botella y definimos el caso de uso con impacto.",
  },
  {
    num: 2,
    title: "Implementación",
    description:
      "Construimos e integramos la solución con tu stack. Entregamos rápido y dejamos todo medible.",
  },
  {
    num: 3,
    title: "Mantenimiento",
    description:
      "Ajustamos, ampliamos y mantenemos. La automatización mejora con datos y feedback real.",
  },
];

function Step({ num, title, description }: (typeof STEPS)[number]) {
  return (
    <div className="rounded-2xl px-4 py-3 text-center">
      {/* Número */}
      <div className="relative mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-background text-[13px] font-semibold text-genesis-orange shadow-[0_12px_30px_rgba(226,110,55,0.12)] ring-4 ring-genesis-orange/10">
        <div className="absolute inset-0 rounded-full border-2 border-genesis-orange/70" />
        {num}
      </div>

      {/* Texto */}
      <div className="text-[16px] font-semibold tracking-tight text-foreground md:text-[17px]">
        {title}
      </div>
      <p className="mx-auto mt-2 max-w-[18rem] text-[13.5px] leading-relaxed text-foreground/72 md:text-[14px]">
        {description}
      </p>
    </div>
  );
}

function TimelineCard() {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-foreground/10 bg-background/25 px-6 py-10 backdrop-blur-xl shadow-[0_30px_110px_rgba(0,0,0,0.08)] md:px-12 md:py-12">
      {/* Halos sutiles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.10),transparent_65%)] blur-2xl" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.08),transparent_65%)] blur-2xl" />
      </div>

      {/* Grid muy suave */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:22px_22px] dark:[background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]" />

      <div className="relative">
        {/* Barra base + degradado (solo desktop) */}
        <div className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[28px] hidden h-[6px] rounded-full bg-foreground/10 md:block" />
        <div className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[28px] hidden h-[6px] rounded-full bg-gradient-to-r from-genesis-orange/35 via-genesis-orange/90 to-genesis-orange/35 shadow-[0_10px_30px_rgba(226,110,55,0.12)] md:block" />

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {STEPS.map((s) => (
            <Step key={s.num} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative pt-16 pb-24 md:pt-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Nuestro proceso, sencillo y simple
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-foreground/78 md:text-[18px]">
              De la idea al sistema funcionando. Claridad, implementación rápida
              y mejora continua con métricas.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-14">
          <Reveal delayMs={120}>
            <TimelineCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
