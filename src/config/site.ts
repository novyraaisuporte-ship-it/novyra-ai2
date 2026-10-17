/**
 * Configuração central da landing page.
 * Preços, checkout e dados institucionais ficam SOMENTE aqui.
 */

export interface FooterLink {
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  brand: "Novyra AI",
  tagline: "Ideias inteligentes. Resultados reais.",
  institutional: "Inteligência artificial e automação para o atendimento de empresas.",

  offer: {
    originalPrice: 350,
    promotionalPrice: 297,
    eligibility: "Primeira contratação",
    /**
     * PENDENTE DE CONFIRMAÇÃO: o que está incluído no plano.
     * Enquanto estiver vazio, nenhuma lista de funcionalidades é exibida na página.
     */
    includedFeatures: [] as string[],
  },

  /**
   * Mídia animada. Para trocar os vídeos, substitua os arquivos em /public/videos (mesmo nome)
   * ou altere os caminhos abaixo. Se um vídeo não existir ou falhar, a imagem `fallback` é exibida.
   */
  media: {
    logoAnimation: {
      src: "/videos/novyra-logo.mp4",
      poster: "/images/video-poster-logo.webp",
      fallback: "/images/logo-lockup-tagline.webp",
      fallbackSize: { width: 900, height: 680 },
      /**
       * O vídeo exportado do Google Flow gerou o slogan com erro de grafia ("INTELIYGENTES").
       * Com true, a faixa do slogan é mascarada no vídeo. Use false após exportar uma versão corrigida.
       */
      hideTagline: true,
    },
    offerAnimation: {
      src: "/videos/novyra-oferta.mp4",
      poster: "/images/video-poster-oferta.webp",
      fallback: "/images/novyra-oferta.webp",
      fallbackSize: { width: 1024, height: 1536 },
      /** Proporção da janela exibida do vídeo (largura / altura). Ajuste se trocar a composição. */
      frameAspect: "5 / 7",
    },
  },

  /** Destino do botão principal do hero: "checkout" abre o pagamento; "offer" rola até a seção de oferta. */
  heroCtaTarget: "checkout" as "checkout" | "offer",

  /** Único endereço de checkout usado por TODOS os botões de compra. */
  checkoutUrl: "https://pay.cakto.com.br/owstw3v_1208780",
  /** true = abre o checkout em nova aba; false = mesma aba. */
  checkoutOpensInNewTab: false,

  /** Analytics: desativado até receber uma integração real (ver src/lib/analytics.ts). */
  analytics: { enabled: false },

  /**
   * Links do rodapé. Só adicione quando existir uma página/destino válido.
   * Ex.: { label: "Privacidade", href: "/privacidade" }
   */
  footerLinks: [] as FooterLink[],
};

export type SiteConfig = typeof SITE_CONFIG;
