// admin/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "admin",
      filename: "remoteEntry.js",
      exposes: {
        "./AdminApp": "./src/App.tsx", // expone el componente principal
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5173,
  },
  build: {
    target: "esnext",
  },
});
