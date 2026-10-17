import { FINAL } from "../config/content";
import { CheckoutButton } from "./CheckoutButton";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="final" className="section final" aria-labelledby="final-title">
      <div className="final__glow" aria-hidden="true" />
      <div className="container final__inner">
        <Reveal>
          <Logo variant="lockup" className="final__logo" alt="Novyra AI" />
        </Reveal>
        <Reveal as="h2" id="final-title" className="h2 final__title" delay={80}>
          {FINAL.title}
        </Reveal>
        <Reveal as="p" className="lead final__sub" delay={160}>
          {FINAL.subtitle}
        </Reveal>
        <Reveal delay={240}>
          <CheckoutButton location="final">{FINAL.cta}</CheckoutButton>
        </Reveal>
        <Reveal as="p" className="final__sign" delay={320}>
          {FINAL.signature}
        </Reveal>
      </div>
    </section>
  );
}
