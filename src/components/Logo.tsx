import { useState } from "react";
import { SITE_CONFIG } from "../config/site";

type Variant = "symbol" | "wordmark" | "lockup";

const FILES: Record<Variant, { src: string; w: number; h: number }> = {
  symbol: { src: "/images/logo-symbol.webp", w: 480, h: 409 },
  wordmark: { src: "/images/logo-wordmark.webp", w: 720, h: 163 },
  lockup: { src: "/images/logo-lockup.webp", w: 900, h: 612 },
};

interface Props {
  variant: Variant;
  className?: string;
  /** true apenas para imagens da primeira tela. */
  priority?: boolean;
  /** Use alt="" quando o texto da marca já estiver no nome acessível do link/botão. */
  alt?: string;
}

/** Logo original (apenas recortes dos arquivos fornecidos, sem alterar proporções). Com fallback em texto. */
export function Logo({ variant, className = "", priority = false, alt = SITE_CONFIG.brand }: Props) {
  const [failed, setFailed] = useState(false);
  const f = FILES[variant];
  if (failed) {
    return (
      <span className={`logo-fallback ${className}`} role={alt ? "img" : undefined} aria-label={alt || undefined}>
        NOVYRA AI
      </span>
    );
  }
  return (
    <img
      className={className}
      src={f.src}
      width={f.w}
      height={f.h}
      alt={alt}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
      draggable={false}
    />
  );
}
