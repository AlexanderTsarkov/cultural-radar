import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { preview } from "vite";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const builtIndex = new URL("../dist/index.html", import.meta.url);

await access(builtIndex);

const server = await preview({
  root: projectRoot,
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
  },
});

try {
  const response = await fetch("http://127.0.0.1:4173/");
  const html = await response.text();

  if (!response.ok) {
    throw new Error(`Expected HTTP 200, received ${response.status}.`);
  }

  if (!html.includes('<div id="root"></div>')) {
    throw new Error("Production HTML does not contain the application root.");
  }

  console.log("Production smoke passed: root returned HTTP 200 with app root.");
} finally {
  await server.close();
}
