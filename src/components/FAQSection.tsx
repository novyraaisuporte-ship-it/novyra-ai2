import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { FAQ } from "../config/content";
import { SITE_CONFIG } from "../config/site";
import { track } from "../lib/analytics";
import { withPrice } from "../lib/checkout";
import { Reveal } from "./Reveal";

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);
  const price = SITE_CONFIG.offer.promotionalPrice;

  const toggle = (id: string) => {
    const next = open === id ? null : id;
    setOpen(next);
    if (next) track("faq_open", { id: next });
  };

  return (
    <section id="duvidas" className="section faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__head">
          <Reveal as="p" className="eyebrow">
            {FAQ.eyebrow}
          </Reveal>
          <Reveal as="h2" id="faq-title" className="h2" delay={80}>
            {FAQ.title}
          </Reveal>
        </div>

        <Reveal className="faq__list" delay={120}>
          {FAQ.items.map((item) => {
            const isOpen = open === item.id;
            return (
              <div key={item.id} className={`faq__item${isOpen ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    className="faq__q"
                    id={`faq-q-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${item.id}`}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{withPrice(item.q, price)}</span>
                    <LuPlus className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-a-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-q-${item.id}`}
                  className="faq__a"
                  inert={!isOpen}
                >
                  <div className="faq__a-inner">
                    <p>{withPrice(item.a, price)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
