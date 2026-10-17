import { useEffect } from "react";
import { BenefitsSection } from "./BenefitsSection";
import { Differential } from "./Differential";
import { FAQSection } from "./FAQSection";
import { FinalCTA } from "./FinalCTA";
import { HowItWorks } from "./HowItWorks";
import { InteractiveChatDemo } from "./InteractiveChatDemo";
import { OfferSection } from "./OfferSection";
import { ProblemSection } from "./ProblemSection";
import { UseCases } from "./UseCases";

/** Seções abaixo da primeira tela: carregadas em um chunk separado (code splitting). */
export default function BelowFold() {
  // Se a página abriu com #hash (ex.: #oferta), rola até lá quando este chunk termina de carregar.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, []);

  return (
    <>
      <InteractiveChatDemo />
      <ProblemSection />
      <BenefitsSection />
      <HowItWorks />
      <UseCases />
      <Differential />
      <OfferSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
