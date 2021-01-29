/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const { promise: exec } = require('exec-sh');
const fs = require('fs-extra');
const bannerReact = require('./banner')('React');

module.exports = async (format, outputDir = 'package') => {
  // Babel
  await exec(
    `cross-env MODULES=${format} npx babel --config-file ./babel.config.react.js src/react --out-dir ${outputDir}/${format}/react`
  );

  // Fix import paths
  let fileContent = await fs.readFile(
    `./${outputDir}/${format}/react/tailwind-mobile-react.js`,
    'utf-8'
  );

  fileContent = `${bannerReact}\n${fileContent}`;
  await fs.writeFile(
    `./${outputDir}/${format}/react/tailwind-mobile-react.js`,
    fileContent
  );
};
