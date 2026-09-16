import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Keep the development server on loopback. Exposing Vite to the LAN can
    // make dev-server vulnerabilities reachable from other devices.
    host: "127.0.0.1",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
  build: {
    sourcemap: false,
    target: "es2022",
  },
});
