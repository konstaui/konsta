import exec from 'exec-sh';
import fs from 'fs-extra';
import banner from './banner.js';

const bannerReact = banner('React');

export default async (outputDir = 'package') => {
  // Babel
  await exec.promise(
    `cross-env MODULES=esm npx babel --config-file ./babel.config.react.js src/react --out-dir ${outputDir}/react`
  );

  // Fix import paths
  let fileContent = await fs.readFile(
    `./${outputDir}/react/konsta-react.js`,
    'utf-8'
  );
  fileContent = fileContent.replace(/\.jsx/g, '.js');
  fileContent = `${bannerReact}\n${fileContent}`;
  await fs.writeFile(`./${outputDir}/react/konsta-react.js`, fileContent);

  // .jsx -> .js
  fs.readdirSync(`./${outputDir}/react/components/`)
    .filter(
      (file) =>
        !fs.lstatSync(`./${outputDir}/react/components/${file}`).isDirectory()
    )
    .forEach((file) => {
      const filePath = `./${outputDir}/react/components/${file}`;
      const content = fs
        .readFileSync(filePath, 'utf-8')
        .replace(/\.jsx/g, '.js');
      fs.writeFileSync(filePath, content);
    });
};
