import {
  BENEFITS,
  CheckoutButton,
  DEMO,
  DIFFERENTIAL,
  FAQ,
  FINAL,
  HOW,
  Logo,
  LuBot,
  LuCheck,
  LuClipboardList,
  LuClock,
  LuInbox,
  LuInfo,
  LuListChecks,
  LuMessageCircleQuestion,
  LuPlay,
  LuPlus,
  LuReceiptText,
  LuRotateCcw,
  LuSettings2,
  LuSlidersHorizontal,
  LuStethoscope,
  LuStore,
  LuUserRound,
  LuUtensilsCrossed,
  LuWrench,
  OFFER,
  PROBLEM,
  SEGMENTS,
  SITE_CONFIG,
  StageVideo,
  __toESM,
  formatBRL,
  prefersReducedMotion,
  require_jsx_runtime,
  require_react,
  track,
  withPrice
} from "./chunk.js";

// src/components/BelowFold.tsx
var import_react9 = __toESM(require_react(), 1);

// src/hooks/useInView.ts
var import_react = __toESM(require_react(), 1);
function useInView(options = {}) {
  const ref = (0, import_react.useRef)(null);
  const [inView, setInView] = (0, import_react.useState)(false);
  const { once = true, root = null, rootMargin = "0px 0px -8% 0px", threshold = 0.12 } = options;
  (0, import_react.useEffect)(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, root, rootMargin, threshold]);
  return { ref, inView };
}

// src/components/Reveal.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function Reveal({ as: Tag = "div", delay = 0, className = "", children, id }) {
  const { ref, inView } = useInView();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Tag,
    {
      ref,
      id,
      className: `reveal${inView ? " is-in" : ""} ${className}`.trim(),
      style: { "--d": `${delay}ms` },
      children
    }
  );
}

// src/components/BenefitsSection.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var ICONS = [LuMessageCircleQuestion, LuListChecks, LuClock, LuSlidersHorizontal];
function BenefitsSection() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("section", { id: "beneficios", className: "section benefits", "aria-labelledby": "benefits-title", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "container benefits__grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "benefits__head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Reveal, { as: "p", className: "eyebrow", children: BENEFITS.eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Reveal, { as: "h2", id: "benefits-title", className: "h2", delay: 80, children: BENEFITS.title })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "benefits__list", children: BENEFITS.items.map((b, i) => {
      const Icon = ICONS[i];
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Reveal, { as: "li", delay: i * 90, className: "benefit", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "benefit__idx", "aria-hidden": "true", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "benefit__icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "benefit__body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: b.title }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: b.text })
        ] })
      ] }, b.title);
    }) })
  ] }) });
}

// src/components/Differential.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function Differential() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", { id: "diferencial", className: "section diff", "aria-labelledby": "diff-title", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "diff__grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "diff__copy", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Reveal, { as: "p", className: "eyebrow", children: DIFFERENTIAL.eyebrow }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Reveal, { as: "h2", id: "diff-title", className: "h2", delay: 80, children: DIFFERENTIAL.title }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Reveal, { as: "p", className: "lead", delay: 160, children: DIFFERENTIAL.text }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: "diff__list", children: DIFFERENTIAL.requirements.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Reveal, { as: "li", delay: 220 + i * 70, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LuCheck, { "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: r })
        ] }, r)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Reveal, { className: "duo", delay: 140, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "duo__visual", role: "img", "aria-label": `${DIFFERENTIAL.illustrative}: a automa\xE7\xE3o encaminha a conversa para a equipe humana.`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "duo__panel duo__panel--ai", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "duo__label", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LuBot, {}),
              " ",
              DIFFERENTIAL.aiLabel
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "duo__tags", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Contexto da conversa" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Informa\xE7\xF5es configuradas" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "duo__bubble", children: DIFFERENTIAL.aiNote })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "duo__link", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "duo__pulse" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "duo__panel duo__panel--human", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "duo__label", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LuUserRound, {}),
              " ",
              DIFFERENTIAL.humanLabel
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "duo__avatars", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LuUserRound, {}) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LuUserRound, {}) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "duo__bubble duo__bubble--human", children: DIFFERENTIAL.humanNote })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "fine duo__cap", children: DIFFERENTIAL.illustrative })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Reveal, { as: "p", className: "diff__quote", children: DIFFERENTIAL.message })
  ] }) });
}

// src/components/FAQSection.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function FAQSection() {
  const [open, setOpen] = (0, import_react2.useState)(null);
  const price = SITE_CONFIG.offer.promotionalPrice;
  const toggle = (id) => {
    const next = open === id ? null : id;
    setOpen(next);
    if (next) track("faq_open", { id: next });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { id: "duvidas", className: "section faq", "aria-labelledby": "faq-title", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "container faq__grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "faq__head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Reveal, { as: "p", className: "eyebrow", children: FAQ.eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Reveal, { as: "h2", id: "faq-title", className: "h2", delay: 80, children: FAQ.title })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Reveal, { className: "faq__list", delay: 120, children: FAQ.items.map((item) => {
      const isOpen = open === item.id;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: `faq__item${isOpen ? " is-open" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "button",
          {
            type: "button",
            className: "faq__q",
            id: `faq-q-${item.id}`,
            "aria-expanded": isOpen,
            "aria-controls": `faq-a-${item.id}`,
            onClick: () => toggle(item.id),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: withPrice(item.q, price) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LuPlus, { className: "faq__icon", "aria-hidden": "true" })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "div",
          {
            id: `faq-a-${item.id}`,
            role: "region",
            "aria-labelledby": `faq-q-${item.id}`,
            className: "faq__a",
            inert: !isOpen,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "faq__a-inner", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: withPrice(item.a, price) }) })
          }
        )
      ] }, item.id);
    }) })
  ] }) });
}

// src/components/FinalCTA.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function FinalCTA() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { id: "final", className: "section final", "aria-labelledby": "final-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "final__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "container final__inner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Logo, { variant: "lockup", className: "final__logo", alt: "Novyra AI" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Reveal, { as: "h2", id: "final-title", className: "h2 final__title", delay: 80, children: FINAL.title }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Reveal, { as: "p", className: "lead final__sub", delay: 160, children: FINAL.subtitle }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Reveal, { delay: 240, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CheckoutButton, { location: "final", children: FINAL.cta }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Reveal, { as: "p", className: "final__sign", delay: 320, children: FINAL.signature })
    ] })
  ] });
}

// src/components/HowItWorks.tsx
var import_react4 = __toESM(require_react(), 1);

// src/hooks/useScrollProgress.ts
var import_react3 = __toESM(require_react(), 1);
function useScrollProgress({ start = 0.85, end = 0.5, onChange } = {}) {
  const ref = (0, import_react3.useRef)(null);
  const cb = (0, import_react3.useRef)(onChange);
  cb.current = onChange;
  (0, import_react3.useEffect)(() => {
    const el = ref.current;
    if (!el) return;
    const set = (p) => {
      el.style.setProperty("--p", p.toFixed(4));
      cb.current?.(p);
    };
    if (prefersReducedMotion()) {
      set(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = vh * (start - end) + r.height;
      const p = Math.min(1, Math.max(0, (vh * start - r.top) / travel));
      set(p);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    let listening = false;
    const attach = () => {
      if (listening) return;
      listening = true;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      schedule();
    };
    const detach = () => {
      if (!listening) return;
      listening = false;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting ? attach() : (detach(), schedule()), {
      rootMargin: "20% 0px 20% 0px"
    });
    io.observe(el);
    schedule();
    return () => {
      io.disconnect();
      detach();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [start, end]);
  return ref;
}

// src/components/HowItWorks.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var ICONS2 = [LuClipboardList, LuSettings2, LuInbox];
function HowItWorks() {
  const [active, setActive] = (0, import_react4.useState)(0);
  const ref = useScrollProgress({
    start: 0.8,
    end: 0.45,
    onChange: (p) => setActive(Math.min(HOW.steps.length - 1, Math.floor(p * 3.2)))
  });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { id: "como-funciona", className: "section how", "aria-labelledby": "how-title", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Reveal, { as: "p", className: "eyebrow", children: HOW.eyebrow }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Reveal, { as: "h2", id: "how-title", className: "h2 how__title", delay: 80, children: HOW.title }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { ref, className: "steps", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "steps__track", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "steps__fill" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ol", { className: "steps__list", children: HOW.steps.map((s, i) => {
        const Icon = ICONS2[i];
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { className: `step${i <= active ? " is-active" : ""}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "step__num", "aria-hidden": "true", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "step__icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("h3", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "sr-only", children: [
              "Etapa ",
              i + 1,
              ": "
            ] }),
            s.title
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: s.text })
        ] }, s.title);
      }) })
    ] })
  ] }) });
}

// src/components/InteractiveChatDemo.tsx
var import_react5 = __toESM(require_react(), 1);

// src/components/ChatBubble.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function ChatBubble({ from, children, className = "", style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: `bubble bubble--${from} ${className}`.trim(), style, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bubble__who", children: from === "client" ? "Cliente" : "Novyra AI" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children })
  ] });
}
function TypingBubble({ className = "", style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: `bubble bubble--assistant bubble--typing ${className}`.trim(), style, "aria-label": "Novyra AI digitando", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bubble__who", children: "Novyra AI" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "typing", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", {}),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", {}),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", {})
    ] })
  ] });
}

// src/components/InteractiveChatDemo.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function InteractiveChatDemo() {
  const [status, setStatus] = (0, import_react5.useState)("idle");
  const [shown, setShown] = (0, import_react5.useState)(0);
  const [typing, setTyping] = (0, import_react5.useState)(false);
  const timers = (0, import_react5.useRef)([]);
  const logRef = (0, import_react5.useRef)(null);
  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };
  (0, import_react5.useEffect)(() => clearTimers, []);
  (0, import_react5.useEffect)(() => {
    const el = logRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [shown, typing]);
  const start = (0, import_react5.useCallback)(() => {
    clearTimers();
    setShown(0);
    setTyping(false);
    setStatus("running");
    track("demo_started");
    const k = prefersReducedMotion() ? 0.5 : 1;
    const at = (ms, fn) => timers.current.push(window.setTimeout(fn, ms * k));
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { id: "demo", className: "section demo", "aria-labelledby": "demo-title", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "container demo__grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "demo__copy", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Reveal, { as: "p", className: "eyebrow", children: DEMO.eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Reveal, { as: "h2", id: "demo-title", className: "h2", delay: 80, children: DEMO.title }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Reveal, { as: "p", className: "lead", delay: 160, children: DEMO.text }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Reveal, { delay: 240, className: "demo__actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("button", { type: "button", className: "btn btn--primary btn--lg", onClick: start, disabled: running, children: [
          status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LuRotateCcw, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LuPlay, { "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: running ? DEMO.running : status === "done" ? DEMO.restart : DEMO.start })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "demo__disclaimer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LuInfo, { "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: DEMO.disclaimer })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Reveal, { className: "demo__stage", delay: 120, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "chat", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "chat__head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Logo, { variant: "symbol", className: "chat__avatar", alt: "" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "chat__title", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { children: "Atendimento Novyra AI" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("small", { className: `chat__status chat__status--${status}`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { "aria-hidden": "true" }),
            status === "running" ? DEMO.statusRunning : status === "done" ? DEMO.statusDone : DEMO.statusIdle
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "badge", children: DEMO.badge })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "div",
        {
          ref: logRef,
          className: "chat__log",
          role: "log",
          "aria-live": "polite",
          "aria-label": "Conversa de demonstra\xE7\xE3o (simula\xE7\xE3o)",
          children: [
            shown === 0 && !typing && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "chat__empty", children: DEMO.empty }),
            DEMO.script.slice(0, shown).map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ChatBubble, { from: m.from, className: "pop", children: m.text }, i)),
            typing && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TypingBubble, { className: "pop" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "chat__foot", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Simula\xE7\xE3o \xB7 nenhuma mensagem \xE9 enviada" }) })
    ] }) })
  ] }) });
}

// src/components/OfferSection.tsx
var import_react7 = __toESM(require_react(), 1);

// src/hooks/useSpotlight.ts
var import_react6 = __toESM(require_react(), 1);
function useSpotlight() {
  const ref = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${(e.clientX - r.left) / r.width * 100}%`);
        el.style.setProperty("--my", `${(e.clientY - r.top) / r.height * 100}%`);
      });
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      el.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

// src/components/OfferSection.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
function OfferSection() {
  const { originalPrice: original, promotionalPrice: promotional, includedFeatures } = SITE_CONFIG.offer;
  const video = SITE_CONFIG.media.offerAnimation;
  const [int, dec] = promotional.toFixed(2).split(".");
  const spot = useSpotlight();
  const { ref, inView } = useInView({ threshold: 0.35 });
  (0, import_react7.useEffect)(() => {
    if (inView) track("offer_view");
  }, [inView]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { id: "oferta", ref, className: "section offer", "aria-labelledby": "offer-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "offer__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "container offer__inner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "offer__head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Reveal, { as: "p", className: "eyebrow", children: OFFER.eyebrow }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Reveal, { as: "h2", id: "offer-title", className: "h2 offer__title", delay: 80, children: OFFER.title })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "offer__grid", style: { "--frame": video.frameAspect }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Reveal, { className: "offer__media", delay: 120, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            StageVideo,
            {
              className: "offer-stage",
              src: video.src,
              poster: video.poster,
              fallback: video.fallback,
              fallbackSize: video.fallbackSize,
              fallbackAlt: "Arte promocional da Novyra AI: automatize seu atendimento no WhatsApp, de R$ 350,00 por R$ 297,00.",
              label: OFFER.videoLabel,
              mode: "inview",
              maxPlays: 3
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "offer__caption", children: OFFER.videoCaption })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "offer__body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Reveal, { as: "h3", className: "offer__lead", delay: 160, children: OFFER.leadTitle }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Reveal, { as: "p", className: "lead offer__text", delay: 220, children: OFFER.leadText }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Reveal, { delay: 280, className: "offer__cardwrap", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { ref: spot, className: "offer-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "offer-card__badge", children: OFFER.badge }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "price", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "price__old", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "sr-only", children: "Pre\xE7o anterior: " }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("s", { children: formatBRL(original) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "price__new", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "sr-only", children: [
                  "Pre\xE7o da oferta: ",
                  formatBRL(promotional)
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "price__vis", "aria-hidden": "true", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "price__cur", children: "R$" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "price__int", children: int }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "price__dec", children: [
                    ",",
                    dec
                  ] })
                ] })
              ] })
            ] }),
            includedFeatures.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("ul", { className: "offer-card__features", children: includedFeatures.map((f) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(LuCheck, { "aria-hidden": "true" }),
              " ",
              f
            ] }, f)) }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CheckoutButton, { location: "oferta", size: "lg", className: "offer-card__cta", children: withPrice(OFFER.cta, promotional) }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "offer-card__legal", children: OFFER.legal })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}

// src/components/ProblemSection.tsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
function Situation({ index, text }) {
  const ref = useScrollProgress({ start: 0.95, end: 0.6 });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { ref, className: "sit", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "sit__n", "aria-hidden": "true", children: String(index + 1).padStart(2, "0") }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "sit__t", children: text }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "sit__line", "aria-hidden": "true" })
  ] });
}
function ProblemSection() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { id: "desafio", className: "section problem", "aria-labelledby": "problem-title", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Reveal, { as: "p", className: "eyebrow", children: PROBLEM.eyebrow }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Reveal, { as: "h2", id: "problem-title", className: "display", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: PROBLEM.title[0] }),
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "dim", children: PROBLEM.title[1] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { className: "sits", children: PROBLEM.situations.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Situation, { index: i, text: s }, i)) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Reveal, { as: "p", className: "lead problem__support", children: PROBLEM.support })
  ] }) });
}

// src/components/UseCases.tsx
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var ICONS3 = [LuStore, LuWrench, LuUtensilsCrossed, LuStethoscope, LuReceiptText];
function UseCases() {
  const [sel, setSel] = (0, import_react8.useState)(0);
  const tabs = (0, import_react8.useRef)([]);
  const items = SEGMENTS.items;
  const current = items[sel];
  const onKey = (e, i) => {
    const next = e.key === "ArrowDown" || e.key === "ArrowRight" ? (i + 1) % items.length : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (i - 1 + items.length) % items.length : e.key === "Home" ? 0 : e.key === "End" ? items.length - 1 : -1;
    if (next < 0) return;
    e.preventDefault();
    setSel(next);
    tabs.current[next]?.focus();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", { id: "aplicacoes", className: "section cases", "aria-labelledby": "cases-title", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Reveal, { as: "p", className: "eyebrow", children: SEGMENTS.eyebrow }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Reveal, { as: "h2", id: "cases-title", className: "h2 cases__title", delay: 80, children: SEGMENTS.title }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Reveal, { className: "cases__body", delay: 120, children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "cases__tabs", role: "tablist", "aria-label": "Segmentos", "aria-orientation": "vertical", children: items.map((s, i) => {
        const Icon = ICONS3[i];
        const on = i === sel;
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "button",
          {
            ref: (el) => {
              tabs.current[i] = el;
            },
            role: "tab",
            type: "button",
            id: `tab-${s.id}`,
            "aria-selected": on,
            "aria-controls": `panel-${s.id}`,
            tabIndex: on ? 0 : -1,
            className: `tab${on ? " is-on" : ""}`,
            onClick: () => setSel(i),
            onKeyDown: (e) => onKey(e, i),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { "aria-hidden": "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: s.label })
            ]
          },
          s.id
        );
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "div",
        {
          role: "tabpanel",
          id: `panel-${current.id}`,
          "aria-labelledby": `tab-${current.id}`,
          className: "cases__panel",
          tabIndex: 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "cases__kicker", children: "Exemplo de pergunta" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ChatBubble, { from: "client", children: current.question }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "cases__panel-title", children: current.label }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", { className: "cases__uses", children: current.uses.map((u) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LuCheck, { "aria-hidden": "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: u })
            ] }, u)) }),
            current.caution && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "cases__caution", children: current.caution })
          ]
        },
        current.id
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Reveal, { as: "p", className: "fine", delay: 160, children: SEGMENTS.note })
  ] }) });
}

// src/components/BelowFold.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function BelowFold() {
  (0, import_react9.useEffect)(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(InteractiveChatDemo, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ProblemSection, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(BenefitsSection, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(HowItWorks, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(UseCases, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Differential, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(OfferSection, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FAQSection, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FinalCTA, {})
  ] });
}
export {
  BelowFold as default
};
//# sourceMappingURL=BelowFold.js.map
