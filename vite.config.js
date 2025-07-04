import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:"/New_Travel/",
  plugins: [react(),tailwindcss(),],
  build: {
    outDir: 'dist'
  },
})
