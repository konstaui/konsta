import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';

export const buildMdColors = async () => {
  const bundle = await rollup({
    input: './src/color-utils/md-colors-src.js',
    plugins: [resolve({ mainFields: ['module', 'main', 'jsnext'] })],
  });

  await bundle.write({
    format: 'cjs',
    name: 'mdColors',
    file: './src/color-utils/md-colors.js',
  });
};
buildMdColors();
