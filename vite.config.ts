import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

const base = process.env.VITE_BASE || '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'Alles Klar – German A1 to B1',
        short_name: 'Alles Klar',
        description: 'German grammar, vocabulary and practice from A1 to B1.',
        theme_color: '#2457a6',
        background_color: '#f7f5f0',
        display: 'standalone',
        start_url: base,
        scope: base,
        lang: 'en',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        // the course content is large; it is split per level below, this is the safety margin
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        navigateFallbackDenylist: [/\/api\//],
        runtimeCaching: [
          {
            urlPattern: /\/api\//,
            handler: 'NetworkOnly',
          },
        ],
      },
    }),
  ],
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:8787' },
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // one chunk per level of course content, so a content change only re-downloads that level
        manualChunks(id) {
          const m = /\/src\/content\/(?:\w+\/)?(a1|a2|b1)[/-]/.exec(id);
          if (m) return `content-${m[1]}`;
          if (id.includes('@anthropic-ai/sdk')) return 'partner-sdk';
        },
      },
    },
  },
});
