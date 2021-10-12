/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const { promise: exec } = require('exec-sh');
const fs = require('fs-extra');
const bannerReact = require('./banner.js')('React');

module.exports = async (format, outputDir = 'package') => {
  // Babel
  await exec(
    `cross-env MODULES=${format} npx babel --config-file ./babel.config.react.js src/react --out-dir ${outputDir}/react/${format}`
  );

  // Fix import paths
  let fileContent = await fs.readFile(
    `./${outputDir}/react/${format}/tailwind-mobile-react.js`,
    'utf-8'
  );
  fileContent = fileContent.replace(/\.jsx/g, '.js');
  fileContent = `${bannerReact}\n${fileContent}`;
  await fs.writeFile(
    `./${outputDir}/react/${format}/tailwind-mobile-react.js`,
    fileContent
  );

  // .jsx -> .js
  fs.readdirSync(`./${outputDir}/react/${format}/components/`)
    .filter(
      (file) =>
        !fs
          .lstatSync(`./${outputDir}/react/${format}/components/${file}`)
          .isDirectory()
    )
    .forEach((file) => {
      const filePath = `./${outputDir}/react/${format}/components/${file}`;
      const content = fs
        .readFileSync(filePath, 'utf-8')
        .replace(/\.jsx/g, '.js');
      fs.writeFileSync(filePath, content);
    });
};
