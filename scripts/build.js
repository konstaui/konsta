const buildCopy = require('./build-copy.js');
const buildReact = require('./build-react.js');
const buildVue = require('./build-vue.js');

const formats = ['esm', 'cjs'];

(async () => {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';
  return Promise.all([
    buildCopy(),
    ...formats.map((format) => buildReact(format, outputDir)),
    ...formats.map((format) => buildVue(format, outputDir)),
  ]).catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    process.exit(1);
  });
})();
