import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const appDir = import.meta.dirname;

export default defineConfig({
  root: appDir,
  plugins: [react()],
  build: {
    outDir: path.join(appDir, "dist"),
    emptyOutDir: true,
  },
});
