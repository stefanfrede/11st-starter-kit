import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const { resolve } = require('path');

export default defineConfig({
  root: '_site',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        404: resolve(__dirname, '_site', '404.html'),
        main: resolve(__dirname, '_site', 'index.html'),
        about: resolve(__dirname, '_site', 'about', 'index.html'),
      },
    },
    emptyOutDir: true,
  },
  plugins: [
    VitePWA({
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: '11st-Starter-Kit',
        short_name: '11st-Starter-Kit',
        description: '11ty, powered by Vite with Tailwind CSS and Alpine.js.',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        theme_color: '#4a5568',
        background_color: '#fff',
        icons: [
          {
            src: 'pwa-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'pwa-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'pwa-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'pwa-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'pwa-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable_icon.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
