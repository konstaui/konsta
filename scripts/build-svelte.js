/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const fs = require('fs-extra');
const path = require('path');
const bannerSvelte = require('./banner.js')('Svelte');

module.exports = async (outputDir = 'package') => {
  // Copy files
  const dirsToCopy = [
    'svelte/components',
    'svelte/components/icons',
    'svelte/shared',
    'svelte',
  ];
  dirsToCopy.forEach((dirPath) => {
    const dirFullPath = path.resolve(__dirname, '../src', dirPath);
    fs.readdirSync(dirFullPath).forEach((f) => {
      if (fs.lstatSync(path.resolve(dirFullPath, f)).isDirectory()) return;
      if (f.includes('package.json')) return;
      fs.copySync(
        path.resolve(dirFullPath, f),
        path.resolve(__dirname, `../${outputDir}/`, dirPath, f)
      );
    });
  });

  // Fix global shared paths
  const dirsWithShared = ['svelte/components', 'svelte/shared'];
  dirsWithShared.forEach((dirPath) => {
    const dirFullPath = path.resolve(__dirname, `../${outputDir}`, dirPath);
    fs.readdirSync(dirFullPath).forEach((f) => {
      if (fs.lstatSync(path.resolve(dirFullPath, f)).isDirectory()) return;
      if (f.includes('package.json')) return;
      let fileContent = fs.readFileSync(path.resolve(dirFullPath, f), 'utf-8');
      fileContent = fileContent.replace(
        /..\/..\/shared\//g,
        '../../shared/esm/'
      );
      fs.writeFileSync(path.resolve(dirFullPath, f), fileContent);
    });
  });

  // Add banner
  let fileContent = await fs.readFile(
    `./${outputDir}/svelte/konsta-svelte.js`,
    'utf-8'
  );
  fileContent = `${bannerSvelte}\n${fileContent}`;
  await fs.writeFile(`./${outputDir}/svelte/konsta-svelte.js`, fileContent);

  // // .jsx -> .js
  // fs.readdirSync(`./${outputDir}/react/${format}/components/`)
  //   .filter(
  //     (file) =>
  //       !fs
  //         .lstatSync(`./${outputDir}/react/${format}/components/${file}`)
  //         .isDirectory()
  //   )
  //   .forEach((file) => {
  //     const filePath = `./${outputDir}/react/${format}/components/${file}`;
  //     const content = fs
  //       .readFileSync(filePath, 'utf-8')
  //       .replace(/\.jsx/g, '.js');
  //     fs.writeFileSync(filePath, content);
  //   });
};
