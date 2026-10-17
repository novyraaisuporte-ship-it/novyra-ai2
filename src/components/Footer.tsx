import { SITE_CONFIG } from "../config/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const links = SITE_CONFIG.footerLinks;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo variant="symbol" className="footer__symbol" alt="Novyra AI" />
          <p>{SITE_CONFIG.institutional}</p>
        </div>

        {links.length > 0 && (
          <nav aria-label="Links institucionais" className="footer__links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        )}

        <p className="footer__copy">
          © {year} {SITE_CONFIG.brand}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
