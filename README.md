# Novyra AI — landing page

React + TypeScript, build com esbuild. `npm install` · `npm run dev` · `npm run build` (gera `dist/`) · `npm run preview`.

## Onde configurar cada coisa
| O quê | Onde |
|---|---|
| Checkout (único para todos os botões de compra) | `src/config/site.ts` → `checkoutUrl` |
| Preço anterior / promocional | `src/config/site.ts` → `offer` |
| Destino do botão principal do hero (`"checkout"` ou `"offer"`) | `src/config/site.ts` → `heroCtaTarget` |
| Vídeos, posters e imagens de fallback | `src/config/site.ts` → `media` |
| Textos | `src/config/content.ts` |
| Links do rodapé, itens incluídos no plano, analytics | `src/config/site.ts` |

## Mídia
- Vídeos em `public/videos/` (`novyra-logo.mp4`, `novyra-oferta.mp4`, e as versões `.webm` com o mesmo nome). Para trocar, substitua os arquivos mantendo o nome. O `.webm` é opcional (alternativa para navegadores sem H.264).
- Exporte **sem áudio** e em 1280×720 (H.264, `-movflags +faststart`). Os vídeos tocam sempre mudos.
- Imagens em `public/images/`: `video-poster-*.webp` (primeiro quadro do vídeo), `logo-lockup-tagline.webp` (fallback da logo), `novyra-oferta.webp` (fallback da oferta).
- Originais intactos em `media-originals/` (não são publicados).
- Se um vídeo faltar ou falhar, a imagem de fallback aparece automaticamente. Com "reduzir movimento" ou economia de dados, nenhum vídeo é baixado.
- `media.logoAnimation.hideTagline`: mascara a faixa do slogan no vídeo da logo (a exportação atual tem o erro "INTELIYGENTES"). Ponha `false` ao trocar por um vídeo corrigido.
- `media.offerAnimation.frameAspect`: proporção da janela exibida do vídeo da oferta.

## Publicação
`npm run build` falha se `checkoutUrl` estiver vazio ou for de exemplo, e se uma imagem referenciada não existir. Publique a pasta `dist/`. Opcional: `SITE_URL=https://seu-dominio npm run build` para gerar canonical e Open Graph absolutos.
