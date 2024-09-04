import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.jsx",
    include: "**/*.js",
  })],
  assetsInclude: ['**/*.JPG'],
  base: "https://sz-leaf.github.io/pf-prod/",
});