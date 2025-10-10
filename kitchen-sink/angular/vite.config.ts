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
});
