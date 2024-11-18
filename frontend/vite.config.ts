import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for docker container
    port: 3000, // Changes default port to 3000
    watch: {
      usePolling: true, // Needed for changes detection in Docker
    },
  },
});
