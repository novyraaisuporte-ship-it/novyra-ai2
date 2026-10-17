import { LuBot, LuCheck, LuUserRound } from "react-icons/lu";
import { DIFFERENTIAL as D } from "../config/content";
import { Reveal } from "./Reveal";

export function Differential() {
  return (
    <section id="diferencial" className="section diff" aria-labelledby="diff-title">
      <div className="container">
        <div className="diff__grid">
          <div className="diff__copy">
            <Reveal as="p" className="eyebrow">
              {D.eyebrow}
            </Reveal>
            <Reveal as="h2" id="diff-title" className="h2" delay={80}>
              {D.title}
            </Reveal>
            <Reveal as="p" className="lead" delay={160}>
              {D.text}
            </Reveal>
            <ul className="diff__list">
              {D.requirements.map((r, i) => (
                <Reveal as="li" key={r} delay={220 + i * 70}>
                  <LuCheck aria-hidden="true" />
                  <span>{r}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="duo" delay={140}>
            <div className="duo__visual" role="img" aria-label={`${D.illustrative}: a automação encaminha a conversa para a equipe humana.`}>
              <div className="duo__panel duo__panel--ai" aria-hidden="true">
                <div className="duo__label">
                  <LuBot /> {D.aiLabel}
                </div>
                <div className="duo__tags">
                  <span>Contexto da conversa</span>
                  <span>Informações configuradas</span>
                </div>
                <div className="duo__bubble">{D.aiNote}</div>
              </div>

              <div className="duo__link" aria-hidden="true">
                <span className="duo__pulse" />
              </div>

              <div className="duo__panel duo__panel--human" aria-hidden="true">
                <div className="duo__label">
                  <LuUserRound /> {D.humanLabel}
                </div>
                <div className="duo__avatars">
                  <span>
                    <LuUserRound />
                  </span>
                  <span>
                    <LuUserRound />
                  </span>
                </div>
                <div className="duo__bubble duo__bubble--human">{D.humanNote}</div>
              </div>
            </div>
            <p className="fine duo__cap">{D.illustrative}</p>
          </Reveal>
        </div>

        <Reveal as="p" className="diff__quote">
          {D.message}
        </Reveal>
      </div>
    </section>
  );
}
