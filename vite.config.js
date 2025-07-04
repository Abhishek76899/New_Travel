import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base:"/New_Travel/",
  build: {
    outDir: 'dist'
  },
  server: {
    historyApiFallback: true, // 👈 handles React Router fallback
  }
})
