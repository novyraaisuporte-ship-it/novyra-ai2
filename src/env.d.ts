/** Definido em tempo de build (scripts/build.mjs). */
declare const __DEV__: boolean;

interface Window {
  dataLayer?: Record<string, unknown>[];
}
