// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving files from one level up to the project root
        '..',
        path.resolve(__dirname, '../scrabble-theme-board')
      ]
    }
  }
})