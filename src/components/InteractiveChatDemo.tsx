import { useCallback, useEffect, useRef, useState } from "react";
import { LuPlay, LuRotateCcw, LuInfo } from "react-icons/lu";
import { DEMO } from "../config/content";
import { prefersReducedMotion } from "../hooks/useReducedMotion";
import { track } from "../lib/analytics";
import { ChatBubble, TypingBubble } from "./ChatBubble";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

type Status = "idle" | "running" | "done";

export function InteractiveChatDemo() {
  const [status, setStatus] = useState<Status>("idle");
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const timers = useRef<number[]>([]);
  const logRef = useRef<HTMLDivElement>(null);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };
  useEffect(() => clearTimers, []); // limpeza ao desmontar

  // Rola apenas o container da conversa (nunca a página inteira).
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [shown, typing]);

  const start = useCallback(() => {
    clearTimers();
    setShown(0);
    setTyping(false);
    setStatus("running");
    track("demo_started");

    const k = prefersReducedMotion() ? 0.5 : 1;
    const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms * k));
    let t = 400;
    DEMO.script.forEach((m, i) => {
      if (m.from === "assistant") {
        at(t, () => setTyping(true));
        t += Math.min(1500, 700 + m.text.length * 10);
        at(t, () => {
          setTyping(false);
          setShown(i + 1);
        });
        t += 700;
      } else {
        t += 500;
        at(t, () => setShown(i + 1));
        t += 600;
      }
    });
    at(t, () => {
      setStatus("done");
      track("demo_completed");
    });
  }, []);

  const running = status === "running";

  return (
    <section id="demo" className="section demo" aria-labelledby="demo-title">
      <div className="container demo__grid">
        <div className="demo__copy">
          <Reveal as="p" className="eyebrow">
            {DEMO.eyebrow}
          </Reveal>
          <Reveal as="h2" id="demo-title" className="h2" delay={80}>
            {DEMO.title}
          </Reveal>
          <Reveal as="p" className="lead" delay={160}>
            {DEMO.text}
          </Reveal>
          <Reveal delay={240} className="demo__actions">
            <button type="button" className="btn btn--primary btn--lg" onClick={start} disabled={running}>
              {status === "done" ? <LuRotateCcw aria-hidden="true" /> : <LuPlay aria-hidden="true" />}
              <span>{running ? DEMO.running : status === "done" ? DEMO.restart : DEMO.start}</span>
            </button>
            <p className="demo__disclaimer">
              <LuInfo aria-hidden="true" />
              <span>{DEMO.disclaimer}</span>
            </p>
          </Reveal>
        </div>

        <Reveal className="demo__stage" delay={120}>
          <div className="chat">
            <div className="chat__head">
              <Logo variant="symbol" className="chat__avatar" alt="" />
              <div className="chat__title">
                <strong>Atendimento Novyra AI</strong>
                <small className={`chat__status chat__status--${status}`}>
                  <i aria-hidden="true" />
                  {status === "running" ? DEMO.statusRunning : status === "done" ? DEMO.statusDone : DEMO.statusIdle}
                </small>
              </div>
              <span className="badge">{DEMO.badge}</span>
            </div>

            <div
              ref={logRef}
              className="chat__log"
              role="log"
              aria-live="polite"
              aria-label="Conversa de demonstração (simulação)"
            >
              {shown === 0 && !typing && <p className="chat__empty">{DEMO.empty}</p>}
              {DEMO.script.slice(0, shown).map((m, i) => (
                <ChatBubble key={i} from={m.from} className="pop">
                  {m.text}
                </ChatBubble>
              ))}
              {typing && <TypingBubble className="pop" />}
            </div>

            <div className="chat__foot" aria-hidden="true">
              <span>Simulação · nenhuma mensagem é enviada</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
