import * as esbuild from "esbuild";
import { fileURLToPath } from "node:url";
import path from "node:path";
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const ctx = await esbuild.context({});
const { port } = await ctx.serve({ servedir: dist, port: Number(process.env.PORT) || 4173 });
console.log(`Preview → http://localhost:${port}`);
