import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "~features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "~types": fileURLToPath(new URL("./src/types", import.meta.url)),
    },
  },
});
