import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Surbhi-portfolio/'  // Make sure this matches your repo name exactly
})
