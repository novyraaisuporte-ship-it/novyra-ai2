import { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { OFFER } from "../config/content";
import { SITE_CONFIG } from "../config/site";
import { useInView } from "../hooks/useInView";
import { useSpotlight } from "../hooks/useSpotlight";
import { track } from "../lib/analytics";
import { formatBRL, withPrice } from "../lib/checkout";
import { CheckoutButton } from "./CheckoutButton";
import { Reveal } from "./Reveal";
import { StageVideo } from "./StageVideo";

export function OfferSection() {
  const { originalPrice: original, promotionalPrice: promotional, includedFeatures } = SITE_CONFIG.offer;
  const video = SITE_CONFIG.media.offerAnimation;
  const [int, dec] = promotional.toFixed(2).split(".");
  const spot = useSpotlight<HTMLDivElement>();
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.35 });

  useEffect(() => {
    if (inView) track("offer_view");
  }, [inView]);

  return (
    <section id="oferta" ref={ref} className="section offer" aria-labelledby="offer-title">
      <div className="offer__glow" aria-hidden="true" />
      <div className="container offer__inner">
        <div className="offer__head">
          <Reveal as="p" className="eyebrow">
            {OFFER.eyebrow}
          </Reveal>
          <Reveal as="h2" id="offer-title" className="h2 offer__title" delay={80}>
            {OFFER.title}
          </Reveal>
        </div>

        <div className="offer__grid" style={{ "--frame": video.frameAspect } as React.CSSProperties}>
          <Reveal className="offer__media" delay={120}>
            <StageVideo
              className="offer-stage"
              src={video.src}
              poster={video.poster}
              fallback={video.fallback}
              fallbackSize={video.fallbackSize}
              fallbackAlt="Arte promocional da Novyra AI: automatize seu atendimento no WhatsApp, de R$ 350,00 por R$ 297,00."
              label={OFFER.videoLabel}
              mode="inview"
              maxPlays={3}
            />
            <p className="offer__caption">{OFFER.videoCaption}</p>
          </Reveal>

          <div className="offer__body">
            <Reveal as="h3" className="offer__lead" delay={160}>
              {OFFER.leadTitle}
            </Reveal>
            <Reveal as="p" className="lead offer__text" delay={220}>
              {OFFER.leadText}
            </Reveal>

            <Reveal delay={280} className="offer__cardwrap">
              <div ref={spot} className="offer-card">
                <p className="offer-card__badge">{OFFER.badge}</p>

                <div className="price">
                  <p className="price__old">
                    <span className="sr-only">Preço anterior: </span>
                    <s>{formatBRL(original)}</s>
                  </p>
                  <p className="price__new">
                    <span className="sr-only">Preço da oferta: {formatBRL(promotional)}</span>
                    <span className="price__vis" aria-hidden="true">
                      <span className="price__cur">R$</span>
                      <span className="price__int">{int}</span>
                      <span className="price__dec">,{dec}</span>
                    </span>
                  </p>
                </div>

                {includedFeatures.length > 0 && (
                  <ul className="offer-card__features">
                    {includedFeatures.map((f) => (
                      <li key={f}>
                        <LuCheck aria-hidden="true" /> {f}
                      </li>
                    ))}
                  </ul>
                )}

                <CheckoutButton location="oferta" size="lg" className="offer-card__cta">
                  {withPrice(OFFER.cta, promotional)}
                </CheckoutButton>
                <p className="offer-card__legal">{OFFER.legal}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
