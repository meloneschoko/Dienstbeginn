import { cp, mkdir, copyFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(root, ".vercel/output");
const fn = resolve(output, "functions/api/nato-leaderboard.func");
await mkdir(fn, { recursive: true });
await cp(resolve(root, "public"), resolve(output, "static"), { recursive: true });
await copyFile(resolve(root, "legacy/site.html"), resolve(output, "static/index.html"));
await copyFile(resolve(root, "server/nato-leaderboard.mjs"), resolve(fn, "index.mjs"));
await writeFile(resolve(fn, ".vc-config.json"), JSON.stringify({
  runtime: "nodejs22.x", handler: "index.mjs", launcherType: "Nodejs", maxDuration: 15
}, null, 2));
await writeFile(resolve(output, "config.json"), JSON.stringify({
  version: 3,
  routes: [
    { src: "/(.*)", headers: { "X-Content-Type-Options": "nosniff", "Referrer-Policy": "strict-origin-when-cross-origin" }, continue: true },
    { src: "/(?:index.html|sw.js)?", headers: { "Cache-Control": "public, max-age=0, must-revalidate" }, continue: true },
    { src: "/", dest: "/index.html" },
    { handle: "filesystem" }
  ]
}, null, 2));
console.log("Vercel build ready: static website and NATO leaderboard function.");
