import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()]
})

// base: mode === "production" ? process.env.NODE_BASE_PATH : undefined
