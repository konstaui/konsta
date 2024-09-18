/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const fs = require('fs-extra');
const path = require('path');

const componentSvelteElementInheritance = {
  Button: 'HTMLButtonAttributes',
  Link: 'HTMLAnchorAttributes',
};

const componentNativeElementInheritance = {
  Actions: 'HTMLDivElement',
  ActionsButton: 'HTMLButtonElement',
  ActionsGroup: 'HTMLDivElement',
  ActionsLabel: 'HTMLDivElement',
  App: 'HTMLDivElement',
  Badge: 'HTMLSpanElement',
  Block: 'HTMLDivElement',
  BlockFooter: 'HTMLDivElement',
  BlockHeader: 'HTMLDivElement',
  BlockTitle: 'HTMLDivElement',
  Breadcrumbs: 'HTMLDivElement',
  BreadcrumbsCollapsed: 'HTMLDivElement',
  BreadcrumbsItem: 'HTMLDivElement',
  BreadcrumbsSeparator: 'HTMLDivElement',
  Card: 'HTMLDivElement',
  Checkbox: 'HTMLLabelElement',
  Chip: 'HTMLDivElement',
  Fab: 'HTMLAnchorElement',
  Icon: 'HTMLElement',
  List: 'HTMLDivElement',
  ListButton: 'HTMLLIElement',
  ListGroup: 'HTMLLIElement',
  ListInput: 'HTMLLIElement',
  ListItem: 'HTMLLIElement',
  MenuList: 'HTMLDivElement',
  MenuListItem: 'HTMLLIElement',
  Navbar: 'HTMLDivElement',
  NavbarBackLink: 'HTMLAnchorElement',
  Page: 'HTMLDivElement',
  Panel: 'HTMLDivElement',
  Popover: 'HTMLDivElement',
  Popup: 'HTMLDivElement',
  Preloader: 'HTMLSpanElement',
  Progressbar: 'HTMLSpanElement',
  Radio: 'HTMLLabelElement',
  Range: 'HTMLDivElement',
  Segmented: 'HTMLDivElement',
  SegmentedButton: 'HTMLButtonElement',
  Sheet: 'HTMLDivElement',
  Stepper: 'HTMLDivElement',
  Tabbar: 'HTMLAnchorElement',
  TabbarLink: 'HTMLAnchorElement',
  Toast: 'HTMLDivElement',
  Toggle: 'HTMLLabelElement',
  Toolbar: 'HTMLDivElement',
};

const addOnClick = [
  'Badge',
  'Button',
  'Chip',
  'Fab',
  'Link',
  'ListItem',
  'NavbarBackLink',
  'ListButton',
  'NavbarBackLink',
  'SegmentedButton',
  'BreadcrumbsCollapsed',
  'BreadcrumbsItem',
  'ActionsButton',
];

const addOnClickProp = (componentName) => {
  if (addOnClick.includes(componentName))
    return `\n  onClick?: (e: any) => void;\n`;
  return '';
};

const createComponentTypes = (componentName, propsContent) => {
  const slots = ['default'];
  const removeProps = ['defaultChecked', 'defaultValue'];
  const lowercaseProps = [
    'autoComplete',
    'autoCorrect',
    'autoCapitalize',
    'spellCheck',
    'autoFocus',
    'autoSave',
    'maxLength',
    'minLength',
    'tabIndex',
    'readOnly',
    'inputMode',
  ];
  propsContent = propsContent
    .replace(
      'interface Props {',
      `export interface Props {\n  class?: string;${addOnClickProp(
        componentName
      )}`
    )
    .replace(/ClassName/g, 'Class')
    .replace(/Children/g, '')
    .split('\n')
    .map((line) => {
      let shouldBeRemoved = false;
      removeProps.forEach((propToRemove) => {
        if (line.includes(propToRemove)) shouldBeRemoved = true;
      });
      lowercaseProps.forEach((propName) => {
        if (line.includes(propName))
          line = line.replace(propName, propName.toLowerCase());
      });
      if (shouldBeRemoved) return '';
      if (line.includes('React.ReactNode')) {
        const slotName = line.split('?:')[0].trim();
        if (!slots.includes(slotName)) slots.push(slotName);
      }
      if (line.includes(' | React.ReactNode')) {
        return `${line.split(' | React.ReactNode')[0]}`;
      }
      if (line.includes('?: React.ReactNode')) {
        return '';
      }
      return line;
    })
    .join('\n');
  const slotsContent = slots.map((slot) => `'${slot}': {};`).join('\n    ');
  const svelteElementType = componentSvelteElementInheritance[componentName];
  const nativeElementType = componentNativeElementInheritance[componentName];
  return `
import { SvelteComponent } from 'svelte';
${
  svelteElementType
    ? `import type { ${svelteElementType} } from 'svelte/elements';`
    : `import { HTMLAttributes } from 'svelte/elements';`
}

${propsContent}

interface ${componentName}Props {}
interface ${componentName}Props extends Props {}
interface ${componentName}Events extends Record<'',{}>{}

declare class ${componentName} extends SvelteComponent<
  ${componentName}Props${
    svelteElementType
      ? ` & ${svelteElementType}`
      : nativeElementType
        ? ` & HTMLAttributes<${nativeElementType}>`
        : ''
  },
  ${componentName}Events,
  {
    ${slotsContent}
  }
> {}

export default ${componentName};
  `.trim();
};

module.exports = async (outputDir = 'package') => {
  // Types
  let typesContent = fs.readFileSync(
    path.resolve(__dirname, '../src/svelte/konsta-svelte.d.ts'),
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
      path.resolve(outputDir, 'svelte', 'types', fileName),
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
    path.resolve(outputDir, 'svelte', 'konsta-svelte.d.ts'),
    typesContent
  );
};
