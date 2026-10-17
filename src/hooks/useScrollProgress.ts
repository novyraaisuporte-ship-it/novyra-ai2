import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

interface Options {
  /** Fração da viewport onde o topo do elemento começa o progresso (0). Padrão 0.85. */
  start?: number;
  /** Fração da viewport onde a base do elemento completa o progresso (1). Padrão 0.5. */
  end?: number;
  /** Chamado a cada atualização (use para estados discretos, não para animação contínua). */
  onChange?: (progress: number) => void;
}

/**
 * Escreve o progresso de rolagem (0–1) na variável CSS `--p` do elemento.
 * Leve: só escuta o scroll enquanto o elemento está perto da viewport, usa rAF e listeners passivos.
 */
export function useScrollProgress<T extends HTMLElement>({ start = 0.85, end = 0.5, onChange }: Options = {}) {
  const ref = useRef<T>(null);
  const cb = useRef(onChange);
  cb.current = onChange;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const set = (p: number) => {
      el.style.setProperty("--p", p.toFixed(4));
      cb.current?.(p);
    };

    if (prefersReducedMotion()) {
      set(1);
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = vh * (start - end) + r.height;
      const p = Math.min(1, Math.max(0, (vh * start - r.top) / travel));
      set(p);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    let listening = false;
    const attach = () => {
      if (listening) return;
      listening = true;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      schedule();
    };
    const detach = () => {
      if (!listening) return;
      listening = false;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? attach() : (detach(), schedule())), {
      rootMargin: "20% 0px 20% 0px",
    });
    io.observe(el);
    schedule();

    return () => {
      io.disconnect();
      detach();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [start, end]);

  return ref;
}
