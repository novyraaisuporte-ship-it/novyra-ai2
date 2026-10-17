import { LuListChecks, LuMessageCircleQuestion, LuClock, LuSlidersHorizontal } from "react-icons/lu";
import type { IconType } from "react-icons";
import { BENEFITS } from "../config/content";
import { Reveal } from "./Reveal";

const ICONS: IconType[] = [LuMessageCircleQuestion, LuListChecks, LuClock, LuSlidersHorizontal];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section benefits" aria-labelledby="benefits-title">
      <div className="container benefits__grid">
        <div className="benefits__head">
          <Reveal as="p" className="eyebrow">
            {BENEFITS.eyebrow}
          </Reveal>
          <Reveal as="h2" id="benefits-title" className="h2" delay={80}>
            {BENEFITS.title}
          </Reveal>
        </div>

        <ul className="benefits__list">
          {BENEFITS.items.map((b, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal as="li" key={b.title} delay={i * 90} className="benefit">
                <span className="benefit__idx" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="benefit__icon" aria-hidden="true">
                  <Icon />
                </span>
                <div className="benefit__body">
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
