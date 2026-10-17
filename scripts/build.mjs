// Build/dev com esbuild: bundle de TSX + CSS, code splitting, cópia de /public e geração do index.html.
import * as esbuild from "esbuild";
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const dev = process.argv.includes("--dev");
const SITE_URL = (process.env.SITE_URL || "").replace(/\/$/, ""); // ex.: https://novyra.com.br

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(path.join(root, "public"), dist, { recursive: true });

const options = {
  absWorkingDir: root,
  entryPoints: ["src/main.tsx"],
  bundle: true,
  splitting: true,
  format: "esm",
  outdir: "dist/assets",
  entryNames: dev ? "[name]" : "[name]-[hash]",
  chunkNames: dev ? "chunks/[name]" : "chunks/[name]-[hash]",
  target: ["es2020", "chrome100", "safari15", "firefox100"],
  jsx: "automatic",
  minify: !dev,
  sourcemap: dev,
  metafile: true,
  legalComments: "none",
  define: {
    __DEV__: String(dev),
    "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production"),
  },
  nodePaths: process.env.NODE_PATH ? process.env.NODE_PATH.split(path.delimiter) : [],
  logLevel: "info",
};

function writeHtml(metafile) {
  const outputs = Object.keys(metafile.outputs);
  const js = outputs.find((f) => /assets\/main[^/]*\.js$/.test(f));
  const css = outputs.find((f) => /assets\/main[^/]*\.css$/.test(f));
  const rel = (f) => "/" + path.relative("dist", f).split(path.sep).join("/");
  let html = readFileSync(path.join(root, "index.html"), "utf8");
  const tags = [
    css && `<link rel="stylesheet" href="${rel(css)}" />`,
    js && `<script type="module" src="${rel(js)}"></script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
  html = html.replace("<!--APP_ASSETS-->", tags);
  // Canonical / URLs absolutas só existem quando a URL definitiva é informada (SITE_URL).
  html = SITE_URL
    ? html
        .replace("<!--CANONICAL-->", `<link rel="canonical" href="${SITE_URL}/" />\n    <meta property="og:url" content="${SITE_URL}/" />`)
        .replaceAll('content="/images/og-image.jpg"', `content="${SITE_URL}/images/og-image.jpg"`)
    : html.replace("<!--CANONICAL-->", "");
  writeFileSync(path.join(dist, "index.html"), html);
}

if (dev) {
  const ctx = await esbuild.context({
    ...options,
    plugins: [{ name: "html", setup: (b) => b.onEnd((r) => r.metafile && writeHtml(r.metafile)) }],
  });
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: dist, port: 5173, fallback: path.join(dist, "index.html") });
  console.log(`\n  Novyra AI (dev) → http://localhost:${port}\n`);
} else {
  const result = await esbuild.build(options);
  writeHtml(result.metafile);
  const kb = (n) => (n / 1024).toFixed(1) + " kB";
  for (const [f, o] of Object.entries(result.metafile.outputs)) {
    if (/\.(js|css)$/.test(f)) console.log(`  ${f.padEnd(52)} ${kb(o.bytes)}`);
  }
  console.log("\n✔ Build concluído em dist/");
}
