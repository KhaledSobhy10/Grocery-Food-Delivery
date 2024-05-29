import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
 
  base: "./", // Set the base URL for the production build,
  build: {
    outDir: "deploy",
  },
 
});