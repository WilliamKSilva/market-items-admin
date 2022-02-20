import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import test from 'vitest' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  }     
})
