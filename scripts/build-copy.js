/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const fs = require('fs');

async function buildCopy(cb) {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';
  if (!fs.existsSync(`./${outputDir}/config/`)) {
    fs.mkdirSync(`./${outputDir}/config/`);
  }
  fs.readdirSync('./src/config').forEach((f) => {
    fs.copyFileSync(`./src/config/${f}`, `./${outputDir}/config/${f}`);
  });
  fs.copyFileSync(`./src/config.js`, `./${outputDir}/config.js`);
  if (cb) cb();
}

module.exports = buildCopy;
