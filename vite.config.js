import { fileURLToPath, URL } from "url";

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import {webfontDownload} from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap'
    ])
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      $lib: fileURLToPath(new URL("./src/lib", import.meta.url)),
      "@ui": fileURLToPath(new URL("./src/lib/components/ui", import.meta.url))
    }
  }
})
