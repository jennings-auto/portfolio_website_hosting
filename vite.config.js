import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sanimar_portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
