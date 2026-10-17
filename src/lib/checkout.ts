import { SITE_CONFIG } from "../config/site";

const PLACEHOLDER = /(example\.|placeholder|seu-link|xxxx|todo|localhost)/i;

export function isValidCheckoutUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "https:" && !PLACEHOLDER.test(url);
  } catch {
    return false;
  }
}

export const CHECKOUT_URL = SITE_CONFIG.checkoutUrl;
export const CHECKOUT_READY = isValidCheckoutUrl(CHECKOUT_URL);

if (__DEV__ && !CHECKOUT_READY) {
  console.warn(
    "[Novyra] SITE_CONFIG.checkoutUrl não está configurado. Os botões de compra ficam desativados até que o link oficial seja informado.",
  );
}

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
/** Formata em reais: R$ 297,00 (com espaço comum, não NBSP). */
export const formatBRL = (value: number): string => brl.format(value).replace(/ /g, " ");

/** Substitui {{price}} pelo preço promocional configurado (evita duplicar o valor nos textos). */
export const withPrice = (text: string, price: number): string => text.replaceAll("{{price}}", formatBRL(price));
