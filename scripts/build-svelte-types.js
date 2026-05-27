import fs from 'fs-extra';
import path from 'path';
import { getDirname } from './get-dirname.js';

const __dirname = getDirname(import.meta.url);

const componentSvelteElementInheritance = {
  ActionsButton: 'HTMLButtonAttributes',
  Button: 'HTMLButtonAttributes',
  Checkbox: 'HTMLLabelAttributes',
  DialogButton: 'HTMLButtonAttributes',
  Fab: 'HTMLAnchorAttributes',
  Link: 'HTMLAnchorAttributes',
  ListButton: 'HTMLLiAttributes',
  ListGroup: 'HTMLLiAttributes',
  ListInput: 'HTMLLiAttributes',
  ListItem: 'HTMLLiAttributes',
  MenuListItem: 'HTMLLiAttributes',
  NavbarBackLink: 'HTMLAnchorAttributes',
  Radio: 'HTMLLabelAttributes',
  SegmentedButton: 'HTMLButtonAttributes',
  Tabbar: 'HTMLAnchorAttributes',
  TabbarLink: 'HTMLAnchorAttributes',
  Table: 'HTMLTableAttributes',
  TableCell: 'HTMLTdAttributes',
  Toggle: 'HTMLLabelAttributes',
};

const componentNativeElementInheritance = {
  Actions: 'HTMLDivElement',
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
  Chip: 'HTMLDivElement',
  Icon: 'HTMLElement',
  List: 'HTMLDivElement',
  MenuList: 'HTMLDivElement',
  Navbar: 'HTMLDivElement',
  Page: 'HTMLDivElement',
  Panel: 'HTMLDivElement',
  Popover: 'HTMLDivElement',
  Popup: 'HTMLDivElement',
  Preloader: 'HTMLSpanElement',
  Progressbar: 'HTMLSpanElement',
  Range: 'HTMLDivElement',
  Segmented: 'HTMLDivElement',
  Sheet: 'HTMLDivElement',
  Stepper: 'HTMLDivElement',
  TableBody: 'HTMLTableSectionElement',
  TableHead: 'HTMLTableSectionElement',
  TableRow: 'HTMLTableRowElement',
  Toast: 'HTMLDivElement',
  Toolbar: 'HTMLDivElement',
  ToolbarPane: 'HTMLDivElement',
  Dialog: 'HTMLDivElement',
  Glass: 'HTMLDivElement',
  Message: 'HTMLDivElement',
  Messagebar: 'HTMLDivElement',
  Messages: 'HTMLDivElement',
  MessagesTitle: 'HTMLDivElement',
  Notification: 'HTMLDivElement',
  Searchbar: 'HTMLDivElement',
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

const addOnClickProp = (componentName, content) => {
  if (content.includes(' onClick?: ')) return '';
  if (addOnClick.includes(componentName))
    return `\n  onClick?: (e: any) => void;\n`;
  return '';
};

const createComponentTypes = (componentName, propsContent) => {
  const slots = [];
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
      /^interface Props(.*?)\{/m,
      `export interface Props$1{\n  class?: string;${addOnClickProp(
        componentName,
        propsContent
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
        return `${line.split('?:')[0]}?: Snippet | string;`;
      }

      return line.replace('React.ComponentType<any>', 'typeof SvelteComponent');
    })
    .join('\n');
  const slotsContent = slots.map((slot) => `'${slot}': {};`).join('\n    ');
  const svelteElementType = componentSvelteElementInheritance[componentName];
  const nativeElementType = componentNativeElementInheritance[componentName];
  return `
import { SvelteComponent, Snippet } from 'svelte';
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
      ? ` & Omit<${svelteElementType}, keyof Props>`
      : nativeElementType
        ? ` & Omit<HTMLAttributes<${nativeElementType}>, keyof Props>`
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

export default async (outputDir = 'package') => {
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
    if (!fs.existsSync(path.resolve(outputDir, 'svelte', 'types'))) {
      fs.mkdirSync(path.resolve(outputDir, 'svelte', 'types'));
    }
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
