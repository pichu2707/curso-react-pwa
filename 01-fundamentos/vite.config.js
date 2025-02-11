import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    devOptions: {
      enabled:true,
    },
    injectRegister: 'auto',
    workbox: {
      cleanupOutdatedCaches:false,
    },
    includeAssets: ["vite.svg"],
    manifest: {
      name: 'Vite + React',
      short_name: 'Mi App',
      description: 'React y Vite con PWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: './vite.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
        },
      ],
    },
    }),
  ],
});
