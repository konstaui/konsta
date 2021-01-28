/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const exec = require('exec-sh');

async function buildCopy(cb) {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';

  await exec.promise(`cp -r ./src/config/ ./${outputDir}/config`);
  await exec.promise(`cp ./src/config.js ./${outputDir}/config.js`);
  await exec.promise(`cp ./src/*.css ./${outputDir}/`);
  if (cb) cb();
}

module.exports = buildCopy;
