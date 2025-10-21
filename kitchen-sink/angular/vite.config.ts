import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    angular(),
    tailwindcss(),
  ],
});
