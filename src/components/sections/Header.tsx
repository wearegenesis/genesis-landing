"use client";

import { useEffect, useState } from "react";
import Brand from "../ui/Brand";

const nav = [
  { href: "#services", label: "Servicios" },
  { href: "#process", label: "Proceso" },
  { href: "#contact", label: "Contacto" },
];

function MenuIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil con ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Evita scroll del body cuando el menú está abierto
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const navLinkClass =
    "relative text-sm md:text-[15px] font-medium tracking-[0.01em] " +
    "text-foreground/78 transition-colors duration-200 " +
    "hover:text-foreground " +
    "after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 " +
    "after:bg-genesis-orange/80 after:transition-all after:duration-200 " +
    "hover:after:w-full " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-genesis-orange/60 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const headerBg = scrolled
    ? "bg-[color:var(--glass)] backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
    : "bg-transparent";

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-300",
          headerBg,
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Brand un pelín más “presencia” */}
          <div className="text-foreground/90 hover:text-foreground transition-colors">
            <Brand />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="
              md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full
              border border-foreground/12 bg-[color:var(--glass)] text-foreground/80
              backdrop-blur
              transition-all duration-200
              hover:border-foreground/22 hover:text-foreground hover:-translate-y-[1px]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-genesis-orange/60
              focus-visible:ring-offset-2 focus-visible:ring-offset-background
            "
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile overlay + panel */}
      <div
        className={[
          "fixed inset-0 z-[55] md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        {/* overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className={[
            "absolute inset-0 transition-opacity duration-200",
            mobileOpen ? "opacity-100 bg-black/40" : "opacity-0 bg-black/0",
          ].join(" ")}
        />

        {/* panel */}
        <div
          className={[
            "absolute left-1/2 top-[76px] w-[min(92vw,560px)] -translate-x-1/2",
            "rounded-2xl border border-foreground/12 bg-[color:var(--glass)] backdrop-blur-xl",
            "shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
            "transition-all duration-200",
            mobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2",
          ].join(" ")}
        >
          <nav className="flex flex-col p-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                  group flex items-center justify-between rounded-xl px-4 py-3
                  text-[15px] font-medium tracking-[0.01em] text-foreground/86
                  transition-all duration-200
                  hover:bg-foreground/5 hover:text-foreground
                  active:scale-[0.99]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-genesis-orange/60
                "
              >
                <span className="relative">
                  {item.label}
                  <span
                    className="
                      pointer-events-none absolute left-0 -bottom-2 h-px w-0
                      bg-genesis-orange/70 transition-all duration-200
                      group-hover:w-full
                    "
                  />
                </span>
                <span className="text-foreground/40 transition-colors group-hover:text-foreground/60">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          <div className="px-6 pb-5 pt-1">
            <div className="h-px w-full bg-foreground/10" />
            <p className="mt-4 text-xs text-foreground/50">
              Pulsa ESC o toca fuera para cerrar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
