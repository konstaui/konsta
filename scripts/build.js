const buildCopy = require('./build-copy.js');
const buildReact = require('./build-react.js');
const buildReactTypes = require('./build-react-types.js');
const buildVue = require('./build-vue.js');
const buildVueTypes = require('./build-vue-types.js');

const formats = ['esm', 'cjs'];

(async () => {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';
  return Promise.all([
    buildCopy(),
    ...formats.map((format) => buildReact(format, outputDir)),
    ...formats.map((format) => buildVue(format, outputDir)),
    buildReactTypes(),
    buildVueTypes(),
  ]).catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    process.exit(1);
  });
})();
