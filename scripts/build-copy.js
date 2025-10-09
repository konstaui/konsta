import fs from 'fs';

async function buildCopy(cb) {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';
  fs.cpSync('./src/color-utils', `${outputDir}/color-utils`, {
    recursive: true,
  });
  fs.cpSync('./src/styles', `${outputDir}/styles`, { recursive: true });

  fs.mkdirSync(`${outputDir}/react`, { recursive: true });
  fs.mkdirSync(`${outputDir}/vue`, { recursive: true });
  fs.mkdirSync(`${outputDir}/svelte`, { recursive: true });
  fs.mkdirSync(`${outputDir}/angular`, { recursive: true });

  fs.copyFileSync(`./src/plugin-colors.js`, `./${outputDir}/plugin-colors.js`);
  fs.copyFileSync(`./src/theme.css`, `./${outputDir}/theme.css`);
  fs.copyFileSync(`./src/react/theme.css`, `./${outputDir}/react/theme.css`);
  fs.copyFileSync(`./src/vue/theme.css`, `./${outputDir}/vue/theme.css`);
  fs.copyFileSync(`./src/svelte/theme.css`, `./${outputDir}/svelte/theme.css`);
  fs.copyFileSync(`./src/angular/theme.css`, `./${outputDir}/angular/theme.css`);
  if (cb) cb();
}

export default buildCopy;
