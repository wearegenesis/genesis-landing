"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        group fixed bottom-6 right-6 z-[60]
        grid h-11 w-11 place-items-center rounded-full
        bg-background/60 text-foreground
        ring-1 ring-foreground/15 backdrop-blur-md
        shadow-[0_12px_35px_rgba(0,0,0,0.28)]
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:bg-background/75 hover:ring-foreground/25
        hover:shadow-[0_18px_55px_rgba(0,0,0,0.35)]
        active:translate-y-0 active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-genesis-orange/60
        focus-visible:ring-offset-2 focus-visible:ring-offset-background
      "
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
      ) : (
        <MoonIcon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
