import { SITE_CONFIG } from "../config/site";
import { CHECKOUT_READY } from "../lib/checkout";

/** Aparece somente em desenvolvimento: lista pendências de configuração. Removido do build de produção. */
export function DevNotice() {
  if (!__DEV__) return null;
  const pend: string[] = [];
  if (!CHECKOUT_READY) pend.push("checkoutUrl não configurado — botões de compra desativados");
  if (SITE_CONFIG.offer.includedFeatures.length === 0) pend.push("O que o plano inclui: não definido (nada é exibido)");
  if (!SITE_CONFIG.analytics.enabled) pend.push("Analytics desativado");
  if (SITE_CONFIG.footerLinks.length === 0) pend.push("Links do rodapé (Privacidade/Termos/Contato) ausentes");
  if (!pend.length) return null;
  return (
    <aside className="dev-notice" aria-label="Pendências de configuração (apenas em desenvolvimento)">
      <strong>DEV · pendências</strong>
      <ul>
        {pend.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </aside>
  );
}
