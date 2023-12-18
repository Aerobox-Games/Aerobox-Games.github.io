import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        games: resolve(__dirname, 'index.html'),
        'games/rogue-racer': resolve(__dirname, 'games/rogue-racer.html'),
        'games/element-x': resolve(__dirname, 'games/element-x.html')
      }
    }
  }
})
