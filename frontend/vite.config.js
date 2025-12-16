import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'NaviGo',
        short_name: 'NaviGo',
        description: 'NaviGo Application',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'NaviGo_Logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'NaviGo_Logo.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'NaviGo_Logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
});