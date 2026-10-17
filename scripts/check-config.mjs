// Impede a publicação com um link de checkout ausente, inválido ou de exemplo.
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../src/config/site.ts", import.meta.url), "utf8");
const match = src.match(/checkoutUrl:\s*["'`]([^"'`]*)["'`]/);
const url = match?.[1] ?? "";
const PLACEHOLDER = /(example\.|placeholder|seu-link|xxxx|todo|localhost)/i;

let ok = false;
try {
  const u = new URL(url);
  ok = u.protocol === "https:" && !PLACEHOLDER.test(url);
} catch {
  ok = false;
}

if (!ok) {
  console.error(
    `\n✖ SITE_CONFIG.checkoutUrl inválido ou de exemplo: "${url}"\n` +
      "  Defina o link oficial do gateway (https) em src/config/site.ts antes de publicar.\n",
  );
  process.exit(1);
}
console.log(`✔ checkoutUrl configurado: ${new URL(url).origin}/…`);

// Mídia: imagens/posters são obrigatórios; vídeos ausentes só geram aviso (a página usa a imagem de fallback).
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
const pub = fileURLToPath(new URL("../public", import.meta.url));
let mediaOk = true;
for (const m of src.matchAll(/["'`](\/(?:images|videos)\/[^"'`]+)["'`]/g)) {
  const rel = m[1];
  if (existsSync(pub + rel)) continue;
  if (/\.(mp4|webm)$/i.test(rel)) {
    console.warn(`⚠ Vídeo não encontrado: public${rel} — a página usará a imagem de fallback.`);
  } else {
    console.error(`✖ Imagem referenciada em SITE_CONFIG não existe: public${rel}`);
    mediaOk = false;
  }
}
if (!mediaOk) process.exit(1);
console.log("✔ mídia verificada");
