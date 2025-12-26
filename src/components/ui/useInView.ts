"use client";

import { useEffect, useState } from "react";

type Options = IntersectionObserverInit & { once?: boolean };

export function useInView<T extends Element>(
  ref: React.RefObject<T>,
  options: Options = {}
) {
  const {
    once = true,
    root = null,
    rootMargin = "0px 0px -20% 0px",
    threshold = 0.12,
  } = options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, once, root, rootMargin, threshold]);

  return inView;
}
