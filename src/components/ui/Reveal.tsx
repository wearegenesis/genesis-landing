"use client";

import React, { JSX, useRef } from "react";
import { useInView } from "./useInView";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "fade" | "left" | "right";
  delayMs?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
};

export default function Reveal({
  children,
  className = "",
  variant = "up",
  delayMs = 0,
  once = false,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref as any, { once });

  const variantClass =
    variant === "fade"
      ? "reveal--fade"
      : variant === "left"
      ? "reveal--left"
      : variant === "right"
      ? "reveal--right"
      : "";

  const Comp: any = as;

  return (
    <Comp
      ref={ref}
      className={`reveal ${variantClass} ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Comp>
  );
}
