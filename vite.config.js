import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/matisgenka-a1/', // <--- Debe coincidir exactamente con el nombre de tu repositorio
})