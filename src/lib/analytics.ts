import { SITE_CONFIG } from "../config/site";

export type AnalyticsEvent =
  | "page_view"
  | "hero_cta_click"
  | "demo_started"
  | "demo_completed"
  | "offer_view"
  | "checkout_click"
  | "faq_open";

type Params = Record<string, string | number | boolean>;
type Listener = (event: AnalyticsEvent, params: Params) => void;

const listeners = new Set<Listener>();

/** Permite ligar qualquer plataforma (GA4, Meta, Plausible…) sem acoplar os componentes. */
export function onTrack(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Registra um evento. Não envie dados pessoais nos parâmetros.
 * Com `analytics.enabled = false` (padrão) nada sai do navegador.
 */
export function track(event: AnalyticsEvent, params: Params = {}): void {
  if (!SITE_CONFIG.analytics.enabled) {
    if (__DEV__) console.debug("[analytics:desativado]", event, params);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  listeners.forEach((l) => l(event, params));
}
