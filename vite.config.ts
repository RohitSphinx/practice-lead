import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 🔹 Fix for Azure Static Web Apps (expects /build)
  build: {
    outDir: "build",
    emptyOutDir: true,
    sourcemap: false
  },

  // 🔹 Dev server (optional)
  server: {
    port: 5173,
    open: true
  }
});
