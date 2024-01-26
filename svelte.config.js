import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
    alias: {
      "@/*": "./src/*",
      "@ui/*": "./src/lib/components/ui/*",
      "$lib/*": "./src/lib/*"
    },
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH
    }
  }
}

export default config
