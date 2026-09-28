import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base: "./"` makes every asset path relative, so the built site works on
// GitHub Pages under any repository name (and on any other static host)
// without further configuration.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
