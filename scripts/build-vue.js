/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const fs = require('fs-extra');
const path = require('path');
const bannerVue = require('./banner.js')('Vue');

module.exports = async (outputDir = 'package') => {
  // Copy files
  const dirsToCopy = [
    'vue/components',
    'vue/components/icons',
    'vue/shared',
    'vue',
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
  const dirsWithShared = ['vue/components', 'vue/shared'];
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
    `./${outputDir}/vue/konsta-vue.js`,
    'utf-8'
  );
  fileContent = `${bannerVue}\n${fileContent}`;
  await fs.writeFile(`./${outputDir}/vue/konsta-vue.js`, fileContent);
};
