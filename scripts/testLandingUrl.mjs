#!/usr/bin/env node

import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const AUTHOR = process.env.AUTHOR || "awesomething";
const SLUG =
  process.env.SLUG || "nonstop-plumbers-water-heater-installation";

const ROUTE_PATH = `/p/${AUTHOR}/${SLUG}`;

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      stdio: "inherit",
      shell: false,
      ...opts,
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} exited with code ${code}`));
    });
    child.on("error", reject);
  });
}

async function main() {
  // Build first; for SSG pages Next will emit HTML artifacts.
  await run("npm", ["run", "build"], { cwd: process.cwd() });

  // Next 15 (app router) emits: .next/server/app/p/<author>/<slug>.html for static params.
  const htmlPath = resolve(
    process.cwd(),
    ".next/server/app/p",
    AUTHOR,
    `${SLUG}.html`
  );

  if (!existsSync(htmlPath)) {
    throw new Error(
      `Expected built HTML artifact to exist for ${ROUTE_PATH}, but it was not found at: ${htmlPath}`
    );
  }

  const html = await readFile(htmlPath, "utf8");

  const mustInclude = [
    "NONSTOP PLUMBERS CORP",
    "Water heater installation in Brooklyn",
  ];

  for (const s of mustInclude) {
    if (!html.includes(s)) {
      const sample = html.slice(0, 600);
      throw new Error(
        `Built HTML missing expected text ${JSON.stringify(s)}. First 600 chars:\n${sample}`
      );
    }
  }

  console.log(`OK: ${ROUTE_PATH} built successfully (artifact exists + contains expected content).`);
}

main().catch((err) => {
  console.error(`FAIL: ${err?.message || err}`);
  process.exit(1);
});
