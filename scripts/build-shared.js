import exec from 'exec-sh';

export default async (outputDir = 'package') => {
  // Babel
  await exec.promise(
    `cross-env MODULES=esm npx babel --config-file ./babel.config.react.js src/shared --out-dir ${outputDir}/shared`
  );
};
