import fs from "node:fs/promises";
import path from "node:path";
import express from "express";
import { createServer as createViteServer } from "vite";
import { createApiApp } from "../api/src/create-app";

const PORT = 3000;
const isProd = process.env.NODE_ENV === "production";
const appDir = path.resolve(import.meta.dirname, "../app");

const app = createApiApp();

if (isProd) {
  const distDir = path.join(appDir, "dist");
  app.use(express.static(distDir));
  app.get("/{*path}", (_req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
} else {
  const vite = await createViteServer({
    configFile: path.join(appDir, "vite.config.ts"),
    server: { middlewareMode: true },
    appType: "custom",
  });
  app.use(vite.middlewares);
  app.use(async (req, res, next) => {
    try {
      const template = await fs.readFile(path.join(appDir, "index.html"), "utf-8");
      const html = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (error) {
      next(error);
    }
  });
}

const server = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

server.on("error", (error: NodeJS.ErrnoException) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  }
  throw error;
});
