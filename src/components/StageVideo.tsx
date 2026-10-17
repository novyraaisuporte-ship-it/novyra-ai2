import { useCallback, useEffect, useRef, useState } from "react";
import { LuPause, LuPlay, LuRotateCcw } from "react-icons/lu";
import { useReducedMotion } from "../hooks/useReducedMotion";

type Status = "loading" | "playing" | "paused" | "ended" | "error" | "static";

interface Props {
  src: string;
  /** Primeiro quadro do vídeo: aparece enquanto o arquivo carrega, sem salto visual. */
  poster: string;
  /** Imagem original exibida quando o vídeo não existe, falha ou o movimento está reduzido. */
  fallback: string;
  fallbackSize: { width: number; height: number };
  fallbackAlt: string;
  /** Nome acessível do vídeo (o conteúdo importante também existe em HTML ao redor). */
  label: string;
  /** "once": toca uma vez ao entrar na tela. "inview": toca ao entrar na tela e repete até `maxPlays`. */
  mode: "once" | "inview";
  maxPlays?: number;
  /** true: o vídeo está na primeira tela, então começa a carregar de imediato. */
  priority?: boolean;
  className?: string;
  /** Visibilidade mínima (0–1) para iniciar a reprodução. */
  threshold?: number;
}

/** Conexão lenta ou "economia de dados": não baixa o vídeo, mostra a imagem. */
function saveDataEnabled(): boolean {
  const c = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  return !!c && (c.saveData === true || c.effectiveType === "slow-2g" || c.effectiveType === "2g");
}

/**
 * Vídeo de apresentação: mudo, sem loop infinito, controlado por IntersectionObserver,
 * com imagem de fallback e botão de pausar/reproduzir. Nunca deixa o espaço vazio.
 */
export function StageVideo({
  src,
  poster,
  fallback,
  fallbackSize,
  fallbackAlt,
  label,
  mode,
  maxPlays = 3,
  priority = false,
  className = "",
  threshold = 0.4,
}: Props) {
  const reduced = useReducedMotion();
  const [lowData] = useState(saveDataEnabled);
  const isStatic = reduced || lowData;

  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [attached, setAttached] = useState(priority);
  const [status, setStatus] = useState<Status>(isStatic ? "static" : "loading");
  const userPaused = useRef(false);
  const plays = useRef(0);

  const effective: Status = isStatic ? "static" : status;
  // MP4 (H.264) primeiro; versão WebM irmã como alternativa para navegadores sem H.264.
  const sources = [{ src, type: "video/mp4" }, ...(src.endsWith(".mp4") ? [{ src: src.replace(/\.mp4$/, ".webm"), type: "video/webm" }] : [])];

  const play = useCallback(() => {
    const v = videoRef.current;
    if (!v || !v.paused) return; // evita reproduções concorrentes
    v.muted = true;
    const p = v.play();
    if (p) p.catch(() => setStatus((s) => (s === "error" ? s : "paused"))); // autoplay bloqueado → poster + botão
  }, []);

  // Anexa o arquivo só quando a seção está próxima (evita baixar os dois vídeos de uma vez).
  useEffect(() => {
    if (isStatic || attached) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAttached(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isStatic, attached]);

  // Reproduz ao ficar visível, pausa ao sair.
  useEffect(() => {
    if (isStatic || !attached) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        const v = videoRef.current;
        if (!v) return;
        if (e.isIntersecting) {
          if (userPaused.current) return;
          if (v.ended) {
            if (mode === "inview" && plays.current < maxPlays) {
              v.currentTime = 0;
              play();
            }
          } else {
            play();
          }
        } else if (!v.paused) {
          v.pause();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isStatic, attached, mode, maxPlays, threshold, play]);

  const onToggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!v.paused && !v.ended) {
      userPaused.current = true;
      v.pause();
    } else {
      userPaused.current = false;
      if (v.ended) v.currentTime = 0;
      play();
    }
  };

  const showFallback = effective === "static" || effective === "error";
  const playing = effective === "playing";
  const ctlLabel = playing ? "Pausar animação" : effective === "ended" ? "Reproduzir animação novamente" : "Reproduzir animação";

  return (
    <div ref={wrapRef} className={`sv ${className}`.trim()} data-status={effective}>
      {showFallback ? (
        <img
          className="sv__fallback"
          src={fallback}
          alt={fallbackAlt}
          width={fallbackSize.width}
          height={fallbackSize.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
        />
      ) : (
        <>
          <video
            key={attached ? "loaded" : "idle"}
            ref={videoRef}
            className="sv__video"
            poster={poster}
            aria-label={label}
            muted
            playsInline
            preload={attached ? "auto" : "none"}
            disablePictureInPicture
            disableRemotePlayback
            onPlay={(e) => {
              if (e.currentTarget.currentTime < 0.1) plays.current += 1;
            }}
            onPlaying={() => setStatus("playing")}
            onPause={(e) => !e.currentTarget.ended && setStatus("paused")}
            onEnded={() => setStatus("ended")}
          >
            {attached &&
              sources.map((s, i) => (
                // Com <source>, o erro dispara no elemento <source>; só o último falhando significa "sem vídeo".
                <source key={s.src} src={s.src} type={s.type} onError={i === sources.length - 1 ? () => setStatus("error") : undefined} />
              ))}
          </video>
          <button type="button" className="sv__ctl" onClick={onToggle} aria-label={ctlLabel} title={ctlLabel}>
            {playing ? <LuPause aria-hidden="true" /> : effective === "ended" ? <LuRotateCcw aria-hidden="true" /> : <LuPlay aria-hidden="true" />}
          </button>
        </>
      )}
    </div>
  );
}
