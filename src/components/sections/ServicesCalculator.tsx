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

function formatNumber(value: number, decimals = 1) {
  return new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value);
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

function pct(value: number, min: number, max: number) {
  return clamp01((value - min) / (max - min));
}

type SliderProps = {
  label: string;
  helper: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (v: number) => void;
};

function Slider({
  label,
  helper,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: SliderProps) {
  const p = pct(value, min, max);

  return (
    <div className="group rounded-2xl border border-foreground/10 bg-background/65 px-5 py-4 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[14px] font-medium tracking-[-0.01em] text-foreground/92">
            {label}
          </div>
          <div className="mt-1 text-xs leading-relaxed text-foreground/60">
            {helper}
          </div>
        </div>

        <div className="shrink-0 rounded-full border border-foreground/10 bg-background/75 px-3 py-1 text-[13px] font-semibold text-foreground/85 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
          {value}
          {suffix ?? ""}
        </div>
      </div>

      {/* Track premium (relleno) */}
      <div className="mt-4">
        <div className="relative h-9">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-foreground/10" />
          <div
            className="pointer-events-none absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-full"
            style={{
              width: `${p * 100}%`,
              background:
                "linear-gradient(90deg, rgba(226,110,55,0.95), rgba(226,110,55,0.55))",
              boxShadow: "0 0 24px rgba(226,110,55,0.22)",
            }}
          />

          <input
            aria-label={label}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className={[
              "relative z-10 h-9 w-full appearance-none bg-transparent",
              // Webkit track transparent (usamos nuestro track)
              "[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full",
              "[&::-webkit-slider-runnable-track]:bg-transparent",
              // Webkit thumb
              "[&::-webkit-slider-thumb]:appearance-none",
              "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full",
              "[&::-webkit-slider-thumb]:bg-[color:var(--genesis-orange)]",
              "[&::-webkit-slider-thumb]:shadow-[0_0_0_6px_rgba(226,110,55,0.16),0_10px_24px_rgba(0,0,0,0.18)]",
              "[&::-webkit-slider-thumb]:-mt-[6px]",
              // Firefox track transparent
              "[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent",
              // Firefox thumb
              "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0",
              "[&::-moz-range-thumb]:bg-[color:var(--genesis-orange)]",
              "[&::-moz-range-thumb]:shadow-[0_0_0_6px_rgba(226,110,55,0.16),0_10px_24px_rgba(0,0,0,0.18)]",
              // Focus
              "focus:outline-none",
            ].join(" ")}
          />
        </div>

        <div className="mt-1 flex justify-between text-[11px] text-foreground/45">
          <span>
            {min}
            {suffix ?? ""}
          </span>
          <span>
            {max}
            {suffix ?? ""}
          </span>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-foreground/10 bg-background/70 px-4 py-3">
      <span className="text-sm text-foreground/65">{label}</span>
      <span className="text-sm font-semibold text-foreground/88">{value}</span>
    </div>
  );
}

export default function ServicesCalculator() {
  const [timesPerWeek, setTimesPerWeek] = useState(5);
  const [minutesPerTask, setMinutesPerTask] = useState(180);
  const [costPerHour, setCostPerHour] = useState(25);

  const { hoursPerWeek, hoursPerMonth, weeklyCost, monthlySavings } =
    useMemo(() => {
      const hoursPerWeek = (timesPerWeek * minutesPerTask) / 60;
      const weeklyCost = hoursPerWeek * costPerHour;
      const monthlySavings = weeklyCost * WEEKS_PER_MONTH;
      const hoursPerMonth = hoursPerWeek * WEEKS_PER_MONTH;

      return { hoursPerWeek, hoursPerMonth, weeklyCost, monthlySavings };
    }, [timesPerWeek, minutesPerTask, costPerHour]);

  return (
    <section aria-label="Calculadora de ahorro" className="mt-16 md:mt-20">
      {/* Header (sin caja) */}
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Estima tu ahorro mensual
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/70 md:text-[16px]">
          Ajusta 3 números y verás una estimación realista del tiempo y coste
          que puedes recuperar automatizando tareas repetitivas.
        </p>
      </div>

      {/* Panel */}
      <div className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-[34px] border border-foreground/10 bg-background/55 p-6 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.12)] md:mt-12 md:p-10">
        {/* Glow + textura */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 -top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.16),transparent_60%)] blur-3xl" />
          <div className="absolute -right-28 -bottom-36 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.12),transparent_60%)] blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(226,110,55,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="relative grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          {/* Controls */}
          <div className="space-y-5">
            <Slider
              label="Veces por semana"
              helper="¿Cuántas veces se repite esa tarea cada semana?"
              value={timesPerWeek}
              min={1}
              max={20}
              step={1}
              onChange={setTimesPerWeek}
            />

            <Slider
              label="Tiempo por tarea"
              helper="Tiempo medio que tardas ahora."
              value={minutesPerTask}
              min={5}
              max={240}
              step={5}
              suffix=" min"
              onChange={setMinutesPerTask}
            />

            <Slider
              label="Coste por hora"
              helper="Tu coste/hora (o el de quien hace la tarea)."
              value={costPerHour}
              min={10}
              max={80}
              step={1}
              suffix="€"
              onChange={setCostPerHour}
            />
          </div>

          {/* Result */}
          <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/60 p-6 backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,0.10)] md:p-7">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.14),transparent_60%)] blur-2xl" />
            </div>

            <div className="relative">
              <div className="text-sm font-medium text-foreground/70">
                Ahorro mensual estimado
              </div>

              <div
                className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
                aria-live="polite"
              >
                {formatEUR(monthlySavings)}
              </div>

              <div className="mt-5 grid gap-3">
                <StatRow
                  label="Tiempo recuperado / mes"
                  value={<>~ {formatNumber(hoursPerMonth, 1)} h</>}
                />
                <StatRow
                  label="Coste actual / semana"
                  value={formatEUR(weeklyCost)}
                />
                <StatRow
                  label="Horas invertidas / semana"
                  value={<>{formatNumber(hoursPerWeek, 1)} h</>}
                />
              </div>

              <div className="mt-5 text-[12px] leading-relaxed text-foreground/50">
                *Estimación orientativa. El ahorro real depende del proceso,
                herramientas y nivel de automatización.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
