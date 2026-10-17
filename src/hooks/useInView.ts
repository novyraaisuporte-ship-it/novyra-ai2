import { useEffect, useRef, useState } from "react";

/** Observa um elemento; por padrão dispara uma única vez e desconecta o observer. */
export function useInView<T extends Element>(options: IntersectionObserverInit & { once?: boolean } = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const { once = true, root = null, rootMargin = "0px 0px -8% 0px", threshold = 0.12 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, root, rootMargin, threshold]);

  return { ref, inView };
}
