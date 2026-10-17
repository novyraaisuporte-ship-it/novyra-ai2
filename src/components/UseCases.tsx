import { useRef, useState } from "react";
import { LuCheck, LuReceiptText, LuStethoscope, LuStore, LuUtensilsCrossed, LuWrench } from "react-icons/lu";
import type { IconType } from "react-icons";
import { SEGMENTS } from "../config/content";
import { ChatBubble } from "./ChatBubble";
import { Reveal } from "./Reveal";

const ICONS: IconType[] = [LuStore, LuWrench, LuUtensilsCrossed, LuStethoscope, LuReceiptText];

export function UseCases() {
  const [sel, setSel] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const items = SEGMENTS.items;
  const current = items[sel];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? (i + 1) % items.length
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? (i - 1 + items.length) % items.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? items.length - 1
              : -1;
    if (next < 0) return;
    e.preventDefault();
    setSel(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="aplicacoes" className="section cases" aria-labelledby="cases-title">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {SEGMENTS.eyebrow}
        </Reveal>
        <Reveal as="h2" id="cases-title" className="h2 cases__title" delay={80}>
          {SEGMENTS.title}
        </Reveal>

        <Reveal className="cases__body" delay={120}>
          <div className="cases__tabs" role="tablist" aria-label="Segmentos" aria-orientation="vertical">
            {items.map((s, i) => {
              const Icon = ICONS[i];
              const on = i === sel;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`tab-${s.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${s.id}`}
                  tabIndex={on ? 0 : -1}
                  className={`tab${on ? " is-on" : ""}`}
                  onClick={() => setSel(i)}
                  onKeyDown={(e) => onKey(e, i)}
                >
                  <Icon aria-hidden="true" />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>

          <div
            key={current.id}
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="cases__panel"
            tabIndex={0}
          >
            <p className="cases__kicker">Exemplo de pergunta</p>
            <ChatBubble from="client">{current.question}</ChatBubble>
            <h3 className="cases__panel-title">{current.label}</h3>
            <ul className="cases__uses">
              {current.uses.map((u) => (
                <li key={u}>
                  <LuCheck aria-hidden="true" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
            {current.caution && <p className="cases__caution">{current.caution}</p>}
          </div>
        </Reveal>

        <Reveal as="p" className="fine" delay={160}>
          {SEGMENTS.note}
        </Reveal>
      </div>
    </section>
  );
}
