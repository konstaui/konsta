/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const fs = require('fs-extra');
const path = require('path');

const createComponentTypes = (componentName, propsContent) => {
  propsContent = propsContent.replace(
    'interface Props {',
    'export interface Props {'
  );
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

module.exports = async (outputDir = 'package') => {
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
