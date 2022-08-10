const rollup = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');

const buildMdColors = async () => {
  const bundle = await rollup.rollup({
    input: './src/md-colors.js',
    plugins: [resolve.default({ mainFields: ['module', 'main', 'jsnext'] })],
  });

  await bundle.write({
    format: 'cjs',
    name: 'mdColors',
    file: './src/config/md-colors.js',
  });
};

module.exports = buildMdColors;
