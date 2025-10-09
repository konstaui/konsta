import { defineConfig } from 'vite';
import analog from '@analogjs/vite-plugin-angular';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    analog({
      tsconfig: './tsconfig.json',
      inlineStylesExtension: 'scss',
    }),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5174,
  },
  preview: {
    host: '0.0.0.0',
    port: 4174,
  },
});
