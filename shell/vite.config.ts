// shell/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        admin: "http://localhost:4173/assets/remoteEntry.js",
        client: "http://localhost:4174/assets/remoteEntry.js",
      },
      
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5175,
  },
  build: {
    target: "esnext",
  },
});
