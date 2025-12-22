import ServicesCalculator from "./ServicesCalculator";

function IconChat() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 12c0 4.418-3.582 8-8 8-1.25 0-2.433-.287-3.487-.798L4 20l.94-3.132A7.962 7.962 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h8M8 9h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAutomation() {
  return (
    <svg
      width="26"
      height="26"
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

function IconWeb() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 8h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 6.2h.01M9.2 6.2h.01M11.4 6.2h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

type CardProps = {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
  floatClass?: string;
};

function ServiceCard({
  title,
  description,
  bullets,
  icon,
  floatClass,
}: CardProps) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-3xl border border-foreground/10",
        "bg-background/25 backdrop-blur-xl",
        "shadow-[0_18px_80px_rgba(0,0,0,0.25)]",
        "transition-transform duration-300 will-change-transform",
        "hover:-translate-y-1",
        floatClass ?? "",
      ].join(" ")}
    >
      {/* marco “premium” sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(244,121,32,0.18),transparent_60%)]" />
      </div>

      {/* zona visual */}
      <div className="relative p-5">
        <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/30">
          <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:14px_14px]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(244,121,32,0.10),transparent_55%,rgba(244,121,32,0.06))]" />
          <div className="flex aspect-[16/9] items-center justify-center text-foreground/80">
            <div className="flex items-center justify-center rounded-2xl border border-foreground/10 bg-background/40 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
              {icon}
            </div>
          </div>
        </div>
      </div>

      {/* texto */}
      <div className="px-6 pb-6">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/65">
          {description}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-foreground/70">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-genesis-orange/80" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Cómo te ayudamos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/60 md:text-base">
            Automatizamos la atención al cliente, reducimos tareas repetitivas y
            montamos landing pages que convierten. Todo integrado, todo medible.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Agentes IA (WhatsApp / atención al cliente)"
            description="Responde 24/7, filtra leads, agenda citas y guía al cliente sin depender de estar pegado al móvil."
            bullets={[
              "Atención al cliente automática 24/7",
              "Derivación a humano cuando toca",
              "Preguntas frecuentes + captación de datos",
            ]}
            icon={<IconChat />}
            floatClass="genesis-float-card-1"
          />

          <ServiceCard
            title="Automatización de procesos"
            description="Presupuestos, facturas y flujos internos sin copiar/pegar. Menos errores, más velocidad."
            bullets={[
              "Presupuestos automáticos (ej. mudanzas/transportes)",
              "Facturas y emails a un clic",
              "Integración con tu stack",
            ]}
            icon={<IconAutomation />}
            floatClass="genesis-float-card-2"
          />

          <ServiceCard
            title="Webs que captan clientes"
            description="Landing pages rápidas y claras, conectadas a tus automatizaciones para convertir visitas en ventas."
            bullets={[
              "Copy + estructura pensada para conversión",
              "Formulario conectado a CRM/WhatsApp",
              "SEO básico y analítica",
            ]}
            icon={<IconWeb />}
            floatClass="genesis-float-card-3"
          />
        </div>

        {/* bloque ahorro: original (no clon Naxia) */}
        <ServicesCalculator />
      </div>
    </section>
  );
}
