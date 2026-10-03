import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The site is served from the root of its own domain on Netlify, so absolute
// asset paths are correct and keep working at any URL depth.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
