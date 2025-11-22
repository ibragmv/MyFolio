// vite.config.js
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [checker({ typescript: true })],
  worker: {},
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // <-- добавили лимит ~1 МБ
  },
  server: {
    open: true,
    port: 8080,
    host: "localhost",
  },
});
