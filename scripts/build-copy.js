import fs from 'fs';

async function buildCopy(cb) {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';
  fs.cpSync('./src/color-utils', `${outputDir}/color-utils`, {
    recursive: true,
  });
  fs.cpSync('./src/styles', `${outputDir}/styles`, { recursive: true });

  fs.copyFileSync(`./src/plugin-colors.js`, `./${outputDir}/plugin-colors.js`);
  fs.copyFileSync(`./src/theme.css`, `./${outputDir}/theme.css`);
  if (cb) cb();
}

export default buildCopy;
