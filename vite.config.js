// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-calculator/',  // 👈 yeh line bahut important hai
  plugins: [react()],
})
