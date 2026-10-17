import { useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { NAV_LINKS } from "../config/content";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > 8);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Menu mobile: Esc fecha, rolagem do body travada, foco gerenciado e fechamento ao ampliar a tela.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a[href]")].filter(
          (el): el is HTMLElement => !!el,
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const mq = window.matchMedia("(min-width: 900px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="container header__bar">
        <a className="header__brand" href="#topo" aria-label="Novyra AI — voltar ao início" onClick={close}>
          <Logo variant="symbol" className="header__symbol" priority alt="" />
          <Logo variant="wordmark" className="header__wordmark" priority alt="" />
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="header__link">
              {l.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary btn--sm header__cta" href="#oferta">
          Conhecer a oferta
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
        </button>
      </div>

      <div id="menu-mobile" ref={panelRef} className="mobile-menu" aria-hidden={!open} inert={!open}>
        <nav aria-label="Navegação mobile" className="mobile-menu__nav">
          {NAV_LINKS.map((l, i) => (
            <a key={l.href} href={l.href} onClick={close} style={{ "--i": i } as React.CSSProperties}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary btn--lg mobile-menu__cta" href="#oferta" onClick={close}>
          Conhecer a oferta
        </a>
      </div>
    </header>
  );
}
