import tailwindcss from '@tailwindcss/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';

export default {
  base: '',
  plugins: [
    svelte(),
    tailwindcss(),
    VitePWA({
      manifest: {
        name: 'Konsta UI Svelte PWA',
        short_name: 'Konsta UI SveltePWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ff3e00',
        icons: [
          {
            src: 'images/demo-icon.png',
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      },
      registerType: 'autoUpdate',
    }),
  ],
};
