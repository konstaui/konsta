import fs from 'fs-extra';
import path from 'path';
import { getDirname } from './get-dirname.js';

const __dirname = getDirname(import.meta.url);

const inlineExtendedProps = (propsContent, typesDir) => {
  const extendsMatch = propsContent.match(/interface Props extends (\w+)\s*\{/);
  if (!extendsMatch) return propsContent;
  const baseInterfaceName = extendsMatch[1];

  let parentFileName = null;
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]\.\/([^'"]+)['"]/g;
  let importMatch;
  while ((importMatch = importRegex.exec(propsContent)) !== null) {
    const namedImports = importMatch[1].split(',').map((s) => s.trim());
    const matched = namedImports.some((named) => {
      const aliasMatch = named.match(/^\w+\s+as\s+(\w+)$/);
      const importedAs = aliasMatch ? aliasMatch[1] : named;
      return importedAs === baseInterfaceName;
    });
    if (matched) {
      parentFileName = importMatch[2];
      break;
    }
  }
  if (!parentFileName) return propsContent;

  const parentPath = path.resolve(typesDir, `${parentFileName}.d.ts`);
  if (!fs.existsSync(parentPath)) return propsContent;

  const parentContent = inlineExtendedProps(
    fs.readFileSync(parentPath, 'utf-8'),
    typesDir
  );
  const parentBodyMatch = parentContent.match(
    /interface Props \{([\s\S]*?)\n\}/
  );
  if (!parentBodyMatch) return propsContent;

  const parentBody = parentBodyMatch[1];
  return propsContent.replace(
    /interface Props extends \w+\s*\{/,
    `interface Props {${parentBody}\n`
  );
};

const createComponentTypes = (componentName, propsContent, typesDir) => {
  propsContent = inlineExtendedProps(propsContent, typesDir).replace(
    'interface Props {',
    'export interface Props {'
  );

  const getPropType = (type) => {
    const atomicType = (t) => {
      if (t === 'string') return 'StringConstructor';
      if (t === 'boolean') return 'BooleanConstructor';
      if (t === 'number') return 'NumberConstructor';
      if (t === 'object') return 'ObjectConstructor';
      if (t === 'array') return 'ArrayConstructor';
      if (t === 'React.CSSProperties') return 'PropType<StyleValue>';
      return t;
    };
    if (type.includes(' | '))
      type = type
        .split(' | ')
        .filter((t) => !t.includes('ReactNode'))
        .join(' | ');
    if (type.includes(' | '))
      return `PropType<${type}>`
        .replace('React.Ref<HTMLElement>', 'Ref<any>')
        .replace('React.ComponentType<any>', 'Component');
    return atomicType(type)
      .replace('React.Ref<HTMLElement>', 'Ref<any>')
      .replace('React.ComponentType<any>', 'Component');
  };
  const getPropName = (name) => {
    if (name.includes('ClassName')) return name.replace('ClassName', 'Class');

    const lowerCaseNames = [
      'inputmode',
      'readonly',
      'required',
      'disabled',
      'placeholder',
      'size',
      'accept',
      'autocomplete',
      'autocorrect',
      'autocapitalize',
      'spellcheck',
      'autofocus',
      'autosave',
      'max',
      'min',
      'step',
      'maxlength',
      'minlength',
      'multiple',
      'pattern',
      'tabindex',
    ];
    if (lowerCaseNames.includes(name.toLowerCase())) return name.toLowerCase();
    return name;
  };
  const getProp = (propWithComment) => {
    const propComment = propWithComment
      .split('*/')[0]
      .split('/*')[1]
      .replace(/\*/g, '');
    const propNameType = propWithComment.split('*/')[1].trim();
    const name = propNameType.split('?:')[0].trim();
    const type = propNameType.split('?:')[1].trim();
    const defaultValue = propComment.includes('@default')
      ? propComment.split('@default')[1].trim()
      : undefined;
    const description = propComment.includes('@default')
      ? propComment.split('@default')[0].trim()
      : propComment.trim();
    const isEvent = name.indexOf('on') === 0;
    return {
      description,
      name: isEvent ? name.slice(2).toLowerCase() : getPropName(name),
      type: getPropType(type),
      defaultValue,
      isEvent,
    };
  };
  let propsList = propsContent.match(/(\n {2}\/\*\*[^ж^;]*)/g);
  if (propsList) {
    propsList = propsList
      .filter((propWithComment) => {
        if (
          propWithComment.includes('defaultValue?:') ||
          propWithComment.includes('colors?:') ||
          propWithComment.includes('badgeColors?:') ||
          propWithComment.includes('media?:') ||
          propWithComment.includes('icon?:') ||
          propWithComment.includes('Children?') ||
          propWithComment.includes('?: React.ReactNode')
        ) {
          return false;
        }
        return true;
      })
      .map((propWithComment) => {
        return getProp(propWithComment);
      });
  } else {
    propsList = [];
  }
  let colorsPropsList = propsContent.match(
    /((badgeColors|colors)\?: \{\n[^ж]*};)/g
  );
  if (colorsPropsList && colorsPropsList[0]) {
    colorsPropsList = colorsPropsList[0];
    const name = colorsPropsList.includes('badgeColors')
      ? 'badgeColors'
      : 'colors';

    colorsPropsList = colorsPropsList
      .split(`${name}?: {`)[1]
      .split('};')[0]
      .split('\n')
      .map((line) => `    ${line}`)
      .join('\n');
    propsList.push({
      description: 'Object with Tailwind CSS colors classes',
      name,
      type: `PropType<{\n${colorsPropsList}\n      }>`,
    });
  }

  const propsContentFormatted = propsList
    .filter((p) => !p.isEvent)
    .map((p) => {
      return `
    /**
     * ${p.description || ''}
     */
    ${p.name}: {
      type: ${p.type};
      ${
        typeof p.defaultValue !== 'undefined'
          ? `default: ${p.defaultValue};`
          : ''
      }
    };`;
    })
    .join('\n');
  const eventsContentFormatted = propsList
    .filter((p) => p.isEvent)
    .map((p) => {
      return `
    /**
     * ${p.description || ''}
     */
    ${p.name}: ${p.type};
    `;
    })
    .join('\n');

  return `
import { Component, ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const ${componentName}: DefineComponent<
  {
    ${propsContentFormatted}
  },
  {},
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    ${eventsContentFormatted}
  }
>;

export default ${componentName};
  `.trim();
};

export default async (outputDir = 'package') => {
  let typesContent = fs.readFileSync(
    path.resolve(__dirname, '../src/vue/konsta-vue.d.ts'),
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
    const componentTypes = createComponentTypes(
      componentName,
      propsContent,
      typesDir
    );
    if (!fs.existsSync(path.resolve(outputDir, 'vue', 'types'))) {
      fs.mkdirSync(path.resolve(outputDir, 'vue', 'types'));
    }
    fs.writeFileSync(
      path.resolve(outputDir, 'vue', 'types', fileName),
      componentTypes
    );
  });
  const importComponents = components
    .map(
      (componentName) =>
        `import k${componentName} from './types/${componentName}';`
    )
    .join('\n');
  const exportComponents = `export { ${components
    .map(
      (componentName) =>
        `k${componentName}, k${componentName} as ${componentName}`
    )
    .join(', ')} }`;
  typesContent = typesContent
    .replace('// IMPORT_COMPONENTS', importComponents)
    .replace('// EXPORT_COMPONENTS', exportComponents);
  fs.writeFileSync(
    path.resolve(outputDir, 'vue', 'konsta-vue.d.ts'),
    typesContent
  );
};
