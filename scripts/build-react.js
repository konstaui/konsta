/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const { promise: exec } = require('exec-sh');
const fs = require('fs-extra');
const path = require('path');
const bannerReact = require('./banner.js')('React');

const createComponentTypes = (componentName, propsContent) => {
  return `
import * as React from 'react';

${propsContent}

interface ${componentName}Props {}
interface ${componentName}Props extends React.HTMLAttributes<HTMLElement> {}
interface ${componentName}Props extends Props {}

declare const ${componentName}: React.FunctionComponent<${componentName}Props>;

export default ${componentName};
  `.trim();
};

module.exports = async (format, outputDir = 'package') => {
  // Babel
  await exec(
    `cross-env MODULES=${format} npx babel --config-file ./babel.config.react.js src/react --out-dir ${outputDir}/react/${format}`
  );

  // Fix import paths
  let fileContent = await fs.readFile(
    `./${outputDir}/react/${format}/tailwind-mobile-react.js`,
    'utf-8'
  );
  fileContent = fileContent.replace(/\.jsx/g, '.js');
  fileContent = `${bannerReact}\n${fileContent}`;
  await fs.writeFile(
    `./${outputDir}/react/${format}/tailwind-mobile-react.js`,
    fileContent
  );

  // .jsx -> .js
  fs.readdirSync(`./${outputDir}/react/${format}/components/`)
    .filter(
      (file) =>
        !fs
          .lstatSync(`./${outputDir}/react/${format}/components/${file}`)
          .isDirectory()
    )
    .forEach((file) => {
      const filePath = `./${outputDir}/react/${format}/components/${file}`;
      const content = fs
        .readFileSync(filePath, 'utf-8')
        .replace(/\.jsx/g, '.js');
      fs.writeFileSync(filePath, content);
    });

  // Types
  let typesContent = fs.readFileSync(
    path.resolve(__dirname, '../src/react/tailwind-mobile-react.d.ts'),
    'utf-8'
  );
  const typesDir = path.resolve(__dirname, '../src/types');
  const components = [];
  fs.readdirSync(typesDir).forEach((fileName) => {
    const propsContent = fs.readFileSync(
      path.resolve(typesDir, fileName),
      'utf-8'
    );
    const componentName = fileName.split('.d.ts')[0];
    components.push(componentName);
    const componentTypes = createComponentTypes(componentName, propsContent);
    fs.writeFileSync(
      path.resolve(outputDir, 'react', 'types', fileName),
      componentTypes
    );
  });
  const importComponents = components
    .map(
      (componentName) =>
        `import ${componentName} from './types/${componentName}';`
    )
    .join('\n');
  const exportComponents = `export { ${components.join(', ')} }`;
  typesContent = typesContent
    .replace('// IMPORT_COMPONENTS', importComponents)
    .replace('// EXPORT_COMPONENTS', exportComponents);
  fs.writeFileSync(
    path.resolve(outputDir, 'react', 'tailwind-mobile-react.d.ts'),
    typesContent
  );
};
