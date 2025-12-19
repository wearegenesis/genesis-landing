"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

export default function Brand() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = mounted ? resolvedTheme === "dark" : true;

  const markSrc = isDark
    ? "/brand/genesis-mark-white.svg"
    : "/brand/genesis-mark-black.svg";

  const letters = useMemo(() => ["G", "É", "N", "E", "S", "I", "S"], []);

  // Wave muy sutil (nada “infantil”), solo para dar vida
  const waveClass = (i: number) => {
    if (i % 3 === 1) return "group-hover:-translate-y-[1px]";
    return "group-hover:-translate-y-[2px]";
  };

  // Glow MUY suave: en claro casi no se ve
  const glow = isDark
    ? "radial-gradient(42px 42px at 50% 50%, rgba(226,110,55,0.14), transparent 70%)"
    : "radial-gradient(42px 42px at 50% 50%, rgba(226,110,55,0.06), transparent 70%)";

  // Skeleton para evitar parpadeo de theme
  if (!mounted) {
    return (
      <Link href="/" className="inline-flex items-center gap-3">
        <span className="h-11 w-11 rounded-full bg-foreground/10" />
        <span className="h-4 w-32 rounded bg-foreground/10" />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Génesis"
      title="Génesis"
      className="
        group inline-flex items-center gap-3
        select-none
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-genesis-orange/60
        focus-visible:ring-offset-2 focus-visible:ring-offset-background
      "
    >
      {/* MARK (más grande, mejor presencia) */}
      <span className="relative inline-flex items-center justify-center">
        <span
          className="
            pointer-events-none absolute -inset-3 rounded-full
            opacity-0 blur-2xl transition-opacity duration-300
            group-hover:opacity-100
          "
          style={{ background: glow }}
        />
        <Image
          src={markSrc}
          alt="Génesis"
          width={192}
          height={192}
          priority
          className="
            relative
            h-11 w-11 md:h-12 md:w-12
            transition-transform duration-300
            group-hover:scale-[1.05]
          "
        />
      </span>

      {/* WORDMARK (más pro: tamaño + tracking + underline fino) */}
      <span className="relative -translate-y-[0.5px]">
        <span className="sr-only">GÉNESIS</span>

        <span
          aria-hidden="true"
          className="
            flex items-center
            text-[15px] md:text-[16px]
            font-semibold uppercase
            text-foreground/90
            leading-none
            transition-colors duration-200
            group-hover:text-foreground
          "
          style={{ letterSpacing: "0.22em" }}
        >
          {letters.map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className={[
                "inline-block transition-transform duration-300",
                waveClass(i),
              ].join(" ")}
              style={{ transitionDelay: `${i * 16}ms` }}
            >
              {ch}
            </span>
          ))}
        </span>

        {/* underline premium (muy fino) */}
        <span
          className="
            pointer-events-none absolute left-0 -bottom-3 h-px w-0
            bg-genesis-orange/60
            transition-all duration-300
            group-hover:w-full
          "
        />
      </span>
    </Link>
  );
}
