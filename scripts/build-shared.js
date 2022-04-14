/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const { promise: exec } = require('exec-sh');

module.exports = async (format, outputDir = 'package') => {
  // Babel
  await exec(
    `cross-env MODULES=${format} npx babel --config-file ./babel.config.react.js src/shared --out-dir ${outputDir}/shared/${format}`
  );
};
