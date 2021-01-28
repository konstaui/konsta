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
  await exec(
    `cross-env MODULES=${format} npx babel --config-file ./babel.config.react.js src/tailwind-mobile-react.js --out-file ${outputDir}/tailwind-mobile-react.${format}.js`
  );

  // Fix import paths
  let fileContent = await fs.readFile(
    `./${outputDir}/tailwind-mobile-react.${format}.js`,
    'utf-8'
  );
  fileContent = fileContent
    .replace(/require\(".\/react\//g, `require("./${format}/react/`)
    .replace(/from '.\/react\//g, `from './${format}/react/`);
  fileContent = `${bannerReact}\n${fileContent}`;
  await fs.writeFile(
    `./${outputDir}/tailwind-mobile-react.${format}.js`,
    fileContent
  );
};
