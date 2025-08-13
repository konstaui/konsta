import fs from 'fs-extra';
import path from 'path';
import { getDirname } from './get-dirname.js';

const __dirname = getDirname(import.meta.url);

const createComponentTypes = (componentName, propsContent) => {
  let extendsComponent =
    {
      Link: 'a',
      Button: 'button',
      SegmentedButton: 'button',
      ActionsButton: 'button',
      DialogButton: 'button',
      Fab: 'a',
      NavbarBackLink: 'a',
      Table: 'table',
      TableBody: 'tbody',
      TableHead: 'thead',
      TableCell: 'td',
      TableRow: 'tr',
    }[componentName] || 'div';

  propsContent = propsContent.replace(
    'interface Props {',
    'export interface Props {'
  );
  return `
import * as React from 'react';

${propsContent}

// @ts-ignore
interface ${componentName}Props extends Omit<React.ComponentProps<'${extendsComponent}'>, keyof Props>, Props {
  ref?: React.Ref<HTMLElement>;
}

declare const ${componentName}: React.ComponentType<${componentName}Props>;

export default ${componentName};
  `.trim();
};

export default async (outputDir = 'package') => {
  // Types
  let typesContent = fs.readFileSync(
    path.resolve(__dirname, '../src/react/konsta-react.d.ts'),
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
    if (!fs.existsSync(path.resolve(outputDir, 'react', 'types'))) {
      fs.mkdirSync(path.resolve(outputDir, 'react', 'types'));
    }
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
    path.resolve(outputDir, 'react', 'konsta-react.d.ts'),
    typesContent
  );
};
