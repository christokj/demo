import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Use './' if you get blank page
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})