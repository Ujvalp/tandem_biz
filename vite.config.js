import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import manifest from './manifest.json';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  VitePWA({
    manifest,
    includeAssets: ['robots.txt', 'apple-touch-icon.png'],
    // switch to "true" to enable sw on development
    devOptions: {
      enabled: true,
    }, 
    workbox: {
      globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
    },
  })],
})
