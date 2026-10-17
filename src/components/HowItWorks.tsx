import { useState } from "react";
import { LuClipboardList, LuSettings2, LuInbox } from "react-icons/lu";
import type { IconType } from "react-icons";
import { HOW } from "../config/content";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { Reveal } from "./Reveal";

const ICONS: IconType[] = [LuClipboardList, LuSettings2, LuInbox];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const ref = useScrollProgress<HTMLDivElement>({
    start: 0.8,
    end: 0.45,
    onChange: (p) => setActive(Math.min(HOW.steps.length - 1, Math.floor(p * 3.2))),
  });

  return (
    <section id="como-funciona" className="section how" aria-labelledby="how-title">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {HOW.eyebrow}
        </Reveal>
        <Reveal as="h2" id="how-title" className="h2 how__title" delay={80}>
          {HOW.title}
        </Reveal>

        <div ref={ref} className="steps">
          <div className="steps__track" aria-hidden="true">
            <span className="steps__fill" />
          </div>
          <ol className="steps__list">
            {HOW.steps.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <li key={s.title} className={`step${i <= active ? " is-active" : ""}`}>
                  <span className="step__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="step__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>
                    <span className="sr-only">Etapa {i + 1}: </span>
                    {s.title}
                  </h3>
                  <p>{s.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
