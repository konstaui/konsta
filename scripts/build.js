const buildCopy = require('./build-copy');
const buildReact = require('./build-react');

const formats = ['esm', 'cjs'];
(async () => {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';
  return Promise.all([
    buildCopy(),
    Promise.all(formats.map((format) => buildReact(format, outputDir))),
  ]).catch((err) => {
    console.error(err);
    process.exit(1);
  });
})();
