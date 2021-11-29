/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const { promise: exec } = require('exec-sh');
const fs = require('fs-extra');
const bannerVue = require('./banner.js')('Vue');
const transformVueComponent = require('./transform-vue-component.js');

module.exports = async (format, outputDir = 'package') => {
  // Babel
  await exec(
    `cross-env MODULES=${format} npx babel --config-file ./babel.config.vue.js src/vue --out-dir ${outputDir}/vue/${format}`
  );

  // Add Banner
  let fileContent = await fs.readFile(
    `./${outputDir}/vue/${format}/konsta-vue.js`,
    'utf-8'
  );
  fileContent = fileContent.replace(/\.vue/g, '.js');
  fileContent = `${bannerVue}\n${fileContent}`;
  await fs.writeFile(`./${outputDir}/vue/${format}/konsta-vue.js`, fileContent);

  // Transform & copy components
  if (!fs.existsSync(`./${outputDir}/vue/${format}/components/`)) {
    fs.mkdirSync(`./${outputDir}/vue/${format}/components/`);
  }
  if (!fs.existsSync(`./${outputDir}/vue/${format}/components/icons`)) {
    fs.mkdirSync(`./${outputDir}/vue/${format}/components/icons`);
  }
  fs.readdirSync('./src/vue/components/')
    .filter((f) => f.includes('.vue'))
    .forEach((f) => {
      transformVueComponent(
        `src/vue/components/${f}`,
        `src/vue-temp/components/${f.replace('.vue', '.js')}`
      );
    });
  fs.readdirSync('./src/vue/shared/')
    .filter((f) => f.includes('.vue'))
    .forEach((f) => {
      transformVueComponent(
        `src/vue/shared/${f}`,
        `src/vue-temp/shared/${f.replace('.vue', '.js')}`
      );
    });
  fs.readdirSync('./src/vue/components/icons')
    .filter((f) => f.includes('.vue'))
    .forEach((f) => {
      transformVueComponent(
        `src/vue/components/icons/${f}`,
        `src/vue-temp/components/icons/${f.replace('.vue', '.js')}`
      );
    });

  await exec(
    `MODULES=${format} npx babel --config-file ./babel.config.vue.js src/vue-temp --out-dir ${outputDir}/vue/${format}`
  );

  // .vue -> .js
  fs.readdirSync(`./${outputDir}/vue/${format}/components/`)
    .filter(
      (file) =>
        !fs
          .lstatSync(`./${outputDir}/vue/${format}/components/${file}`)
          .isDirectory()
    )
    .forEach((file) => {
      const filePath = `./${outputDir}/vue/${format}/components/${file}`;
      const content = fs
        .readFileSync(filePath, 'utf-8')
        .replace(/\.vue/g, '.js');
      fs.writeFileSync(filePath, content);
    });
};
