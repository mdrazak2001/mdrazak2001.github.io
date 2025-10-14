// vite.config.ts
import { defineConfig } from "vite";
import mdx from '@mdx-js/rollup'; // ✅ first
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Remove lovable-tagger for now to isolate issue

export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
    }),
    react(), // ✅ after mdx
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});