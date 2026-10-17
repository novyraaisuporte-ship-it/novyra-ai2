import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
import { SITE_CONFIG } from "../config/site";
import { track } from "../lib/analytics";
import { CHECKOUT_READY, CHECKOUT_URL } from "../lib/checkout";

interface Props {
  /** Onde o botão está (hero, oferta, final…): vai para o evento checkout_click. */
  location: string;
  children: ReactNode;
  size?: "md" | "lg";
  className?: string;
  /** Marca o clique também como hero_cta_click. */
  isHeroCta?: boolean;
}

/** TODOS os botões de compra usam este componente → mesma URL central (SITE_CONFIG.checkoutUrl). */
export function CheckoutButton({ location, children, size = "lg", className = "", isHeroCta = false }: Props) {
  const cls = `btn btn--primary btn--${size} ${className}`.trim();

  if (!CHECKOUT_READY) {
    return (
      <button type="button" className={`${cls} is-disabled`} disabled title="Link de checkout ainda não configurado">
        <span>{children}</span>
      </button>
    );
  }

  const newTab = SITE_CONFIG.checkoutOpensInNewTab;
  return (
    <a
      className={cls}
      href={CHECKOUT_URL}
      data-checkout="true"
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : "noopener"}
      onClick={() => {
        if (isHeroCta) track("hero_cta_click", { cta: "primary" });
        track("checkout_click", { location });
      }}
    >
      <span>{children}</span>
      <LuArrowRight className="btn__icon" aria-hidden="true" />
    </a>
  );
}
