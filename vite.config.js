import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://kbui041.github.io/surbeck/ , so assets live under /surbeck/.
export default defineConfig({
  base: "/surbeck/",
  plugins: [react()],
});
