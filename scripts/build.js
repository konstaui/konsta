const buildCopy = require('./build-copy.js');
const buildReact = require('./build-react.js');
const buildReactTypes = require('./build-react-types.js');
const buildVue = require('./build-vue.js');
const buildVueTypes = require('./build-vue-types.js');
const buildSvelte = require('./build-svelte.js');
const buildSvelteTypes = require('./build-svelte-types.js');
const buildShared = require('./build-shared.js');
const buildMdColors = require('./build-md-colors.js');

const formats = ['esm', 'cjs'];

(async () => {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';
  return Promise.all([
    buildMdColors(),
    buildCopy(),
    ...formats.map((format) => buildReact(format, outputDir)),
    ...formats.map((format) => buildShared(format, outputDir)),
    buildSvelte(outputDir),
    buildVue(outputDir),
    buildReactTypes(),
    buildVueTypes(),
    buildSvelteTypes(),
  ]).catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    process.exit(1);
  });
})();
