const { defineConfig } = require('vite');

module.exports = defineConfig(async ({ command, mode }) => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');
  return { base: '', plugins: [svelte()] };
});
