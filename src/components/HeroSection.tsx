import { Fragment, useEffect, useRef } from "react";
import { LuArrowRight } from "react-icons/lu";
import { HERO } from "../config/content";
import { SITE_CONFIG } from "../config/site";
import { prefersReducedMotion } from "../hooks/useReducedMotion";
import { track } from "../lib/analytics";
import { CheckoutButton } from "./CheckoutButton";
import { StageVideo } from "./StageVideo";

function TitleLines() {
  const hl = new Set(HERO.highlight.split(" "));
  let n = 0;
  return (
    <>
      {HERO.title.map((line, li) => (
        <span className="hero__line" key={li} aria-hidden="true">
          {line.split(" ").map((word, wi) => {
            const clean = word.replace(/[.,]/g, "");
            const idx = n++;
            return (
              <Fragment key={wi}>
                <span className="w" style={{ "--i": idx } as React.CSSProperties}>
                  <span className={hl.has(clean) ? "w__in hl" : "w__in"}>{word}</span>
                </span>{" "}
              </Fragment>
            );
          })}
        </span>
      ))}
    </>
  );
}

/** Botão principal do hero: vai ao checkout ou à seção de oferta, conforme SITE_CONFIG.heroCtaTarget. */
function HeroPrimaryCta() {
  if (SITE_CONFIG.heroCtaTarget === "offer") {
    return (
      <a className="btn btn--primary btn--lg" href="#oferta" onClick={() => track("hero_cta_click", { cta: "primary" })}>
        <span>{HERO.primaryCta}</span>
        <LuArrowRight className="btn__icon" aria-hidden="true" />
      </a>
    );
  }
  return (
    <CheckoutButton location="hero" isHeroCta>
      {HERO.primaryCta}
    </CheckoutButton>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const logo = SITE_CONFIG.media.logoAnimation;

  // Parallax sutil de saída: só enquanto o hero está visível; escreve --sy e o CSS usa transform/opacity.
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let raf = 0;
    let visible = true;
    const update = () => {
      raf = 0;
      el.style.setProperty("--sy", String(Math.min(window.scrollY, window.innerHeight)));
    };
    const onScroll = () => {
      if (visible && !raf) raf = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="topo" ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="beam beam--a" />
        <span className="hero__vignette" />
      </div>

      <div className="container hero__inner">
        <div className="hero__brand">
          <StageVideo
            className={`brand-stage${logo.hideTagline ? " hide-tagline" : ""}`}
            src={logo.src}
            poster={logo.poster}
            fallback={logo.fallback}
            fallbackSize={logo.fallbackSize}
            fallbackAlt="Logo da Novyra AI: símbolo N prateado com luz azul e o nome NOVYRA AI."
            label={HERO.videoLabel}
            mode="once"
            priority
            threshold={0.25}
          />
        </div>

        <div className="hero__copy">
          <p className="eyebrow hero-in" style={{ "--d": "300ms" } as React.CSSProperties}>
            {HERO.eyebrow}
          </p>
          <h1 id="hero-title" className="hero__title" aria-label={HERO.title.join(" ")}>
            <TitleLines />
          </h1>
          <p className="lead hero__sub hero-in" style={{ "--d": "950ms" } as React.CSSProperties}>
            {HERO.subtitle}
          </p>
          <div className="hero__actions hero-in" style={{ "--d": "1100ms" } as React.CSSProperties}>
            <HeroPrimaryCta />
            <a className="btn btn--ghost btn--lg" href="#demo" onClick={() => track("hero_cta_click", { cta: "secondary" })}>
              {HERO.secondaryCta}
            </a>
          </div>
          <p className="hero__note hero-in" style={{ "--d": "1250ms" } as React.CSSProperties}>
            {HERO.note}
          </p>
        </div>
      </div>

      <a className="hero__scroll" href="#demo" aria-label="Rolar para a demonstração">
        <span />
      </a>
    </section>
  );
}
