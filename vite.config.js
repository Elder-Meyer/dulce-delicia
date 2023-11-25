import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^index.html$/]
      },
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Dulce Delicia',
        short_name: 'Dulce Delicia',
        description: 'Dulce Delicia es una dulcería online que ofrece una amplia variedad de dulces artesanales de todo México. Descubre nuestros deliciosos dulces tradicionales, veganos, gourmet y mucho más.',
        start_url: "/",
        display: "standalone",
        background_color: '#E05297',
        theme_color: '#E05297',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: "screenshot-desktop.png",
            sizes: "1280x800",
            type: "image/png",
            platform: "web",
            form_factor: "wide" 
          },
          {
            src: "screenshot-mobile.png",
            sizes: "800x1280",
            type: "image/png",
            platform: "web",
            form_factor: "narrow"
          }
        ]
      }
    })
  ],
})
