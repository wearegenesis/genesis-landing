import Reveal from "@/components/ui/Reveal";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      {/* ✅ Accesible pero no visible */}
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
        className={[
          "w-full rounded-xl border border-foreground/10",
          "bg-background/70 dark:bg-background/30",
          "px-4 py-3 text-[14px] text-foreground placeholder:text-foreground/40",
          "shadow-[0_10px_28px_rgba(0,0,0,0.06)]",
          "backdrop-blur-xl",
          "outline-none transition",
          "focus:border-genesis-orange/55 focus:ring-4 focus:ring-genesis-orange/20",
        ].join(" ")}
      />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative pt-10 pb-2 md:pt-14 md:pb-2">
      {/* Background: cambio MUY diferente + transición suave */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Un solo gradient largo (evita bandas/cortes) */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,
              rgba(255,255,255,1)_0%,
              rgba(255,255,255,1)_22%,
              rgba(250,242,234,0.96)_44%,
              rgba(238,226,214,0.95)_58%,
              rgba(26,34,48,0.92)_80%,
              rgba(12,17,27,1)_100%
            )]
            dark:bg-[linear-gradient(180deg,
              rgba(0,0,0,1)_0%,
              rgba(0,0,0,1)_20%,
              rgba(10,10,10,1)_42%,
              rgba(10,15,23,1)_78%,
              rgba(7,11,18,1)_100%
            )]
          "
        />

        {/* Haze para matar cualquier “línea” en móvil */}
        <div
          className="
            absolute inset-x-0 top-[52%] h-[520px]
            bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.70),transparent_72%)]
            blur-3xl opacity-70
            dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),transparent_74%)]
          "
        />

        {/* Halos naranjas (dan vida al cambio) */}
        <div className="absolute -left-40 bottom-[-320px] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.20),transparent_62%)] blur-3xl opacity-65" />
        <div className="absolute -right-40 bottom-[-360px] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.14),transparent_64%)] blur-3xl opacity-55" />

        {/* Grid/ruido sutil */}
        <div
          className="
            absolute inset-0 opacity-22
            [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)]
            [background-size:22px_22px]
            dark:opacity-18
            dark:[background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]
          "
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Contacto
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-foreground/72 md:text-[18px]">
              Cuéntanos tu caso y te respondemos con claridad y siguiente paso.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 md:mt-10">
          <Reveal delayMs={120}>
            <div className="mx-auto max-w-3xl">
              {/* Card */}
              <div
                className="
                  relative overflow-hidden rounded-3xl
                  border border-foreground/10
                  bg-background/55 dark:bg-background/25
                  p-6 backdrop-blur-xl
                  shadow-[0_30px_120px_rgba(0,0,0,0.14)]
                  md:p-10
                "
              >
                {/* Glow interno */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-28 -top-28 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.14),transparent_60%)] blur-3xl" />
                  <div className="absolute -right-24 -bottom-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,110,55,0.10),transparent_62%)] blur-3xl" />
                </div>

                <form
                  className="relative space-y-5"
                  method="post"
                  action="/api/contact"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      label="Nombre"
                      name="name"
                      placeholder="Tu nombre"
                      autoComplete="name"
                    />
                    <Field
                      label="Empresa"
                      name="company"
                      placeholder="Nombre de tu empresa"
                      autoComplete="organization"
                    />
                  </div>

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                  />

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Mensaje
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="¿Qué quieres automatizar o mejorar?"
                      className={[
                        "w-full resize-none rounded-xl border border-foreground/10",
                        "bg-background/70 dark:bg-background/30",
                        "px-4 py-3 text-[14px] text-foreground placeholder:text-foreground/40",
                        "shadow-[0_10px_28px_rgba(0,0,0,0.06)]",
                        "backdrop-blur-xl",
                        "outline-none transition",
                        "focus:border-genesis-orange/55 focus:ring-4 focus:ring-genesis-orange/20",
                      ].join(" ")}
                    />
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      className="
                        inline-flex items-center justify-center rounded-full
                        bg-foreground px-8 py-3 text-sm font-semibold text-background
                        shadow-[0_18px_60px_rgba(0,0,0,0.18)]
                        transition hover:-translate-y-[1px]
                        focus-visible:outline-none focus-visible:ring-4
                        focus-visible:ring-genesis-orange/30
                      "
                    >
                      Enviar
                    </button>

                    <div className="mt-3 text-xs text-foreground/55">
                      Respuesta en 24–48h laborables.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
