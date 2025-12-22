"use client";

import { useMemo, useState } from "react";

const WEEKS_PER_MONTH = 52 / 12; // 4.333...

function formatEUR(value: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ServicesCalculator() {
  const [timesPerWeek, setTimesPerWeek] = useState(5);
  const [minutesPerTask, setMinutesPerTask] = useState(180);
  const [costPerHour, setCostPerHour] = useState(25);

  const monthlySavings = useMemo(() => {
    const hoursPerWeek = (timesPerWeek * minutesPerTask) / 60;
    const weeklyCost = hoursPerWeek * costPerHour;
    return weeklyCost * WEEKS_PER_MONTH;
  }, [timesPerWeek, minutesPerTask, costPerHour]);

  return (
    <div className="mt-14">
      <div className="mx-auto max-w-5xl rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur-xl md:p-8">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-foreground/50">
            CALCULADORA RÁPIDA
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Estima tu ahorro mensual
          </h3>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/60">
            Ajusta 3 números y verás una estimación realista del tiempo (y
            dinero) que puedes recuperar automatizando tareas repetitivas.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {/* Veces / semana */}
          <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-foreground">
                Veces por semana
              </span>
              <span className="text-lg font-semibold text-foreground">
                {timesPerWeek}
              </span>
            </div>
            <input
              aria-label="Veces por semana"
              className="mt-4 w-full accent-[color:var(--genesis-orange)]"
              type="range"
              min={1}
              max={20}
              step={1}
              value={timesPerWeek}
              onChange={(e) => setTimesPerWeek(Number(e.target.value))}
            />
            <p className="mt-2 text-xs text-foreground/55">
              ¿Cuántas veces se repite esa tarea cada semana?
            </p>
          </div>

          {/* Minutos por tarea */}
          <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-foreground">
                Tiempo por tarea (min)
              </span>
              <span className="text-lg font-semibold text-foreground">
                {minutesPerTask}
              </span>
            </div>
            <input
              aria-label="Minutos por tarea"
              className="mt-4 w-full accent-[color:var(--genesis-orange)]"
              type="range"
              min={5}
              max={240}
              step={5}
              value={minutesPerTask}
              onChange={(e) => setMinutesPerTask(Number(e.target.value))}
            />
            <p className="mt-2 text-xs text-foreground/55">
              Tiempo medio (en minutos) que tardas ahora.
            </p>
          </div>

          {/* Coste/hora */}
          <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-foreground">
                Coste por hora (€)
              </span>
              <span className="text-lg font-semibold text-foreground">
                {costPerHour}€
              </span>
            </div>
            <input
              aria-label="Coste por hora"
              className="mt-4 w-full accent-[color:var(--genesis-orange)]"
              type="range"
              min={10}
              max={80}
              step={1}
              value={costPerHour}
              onChange={(e) => setCostPerHour(Number(e.target.value))}
            />
            <p className="mt-2 text-xs text-foreground/55">
              Tu coste/hora (o el de quien hace la tarea).
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center">
          <div className="text-sm text-foreground/60">
            {timesPerWeek} × {minutesPerTask} min × {costPerHour}€ / hora
          </div>
          <div className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {formatEUR(monthlySavings)}
          </div>
          <div className="text-xs font-medium tracking-[0.22em] text-foreground/50">
            AHORRO MENSUAL ESTIMADO
          </div>
        </div>
      </div>
    </div>
  );
}
