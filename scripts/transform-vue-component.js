import fs from 'fs';
import { parse, compileTemplate } from '@vue/compiler-sfc';

const transformVueComponent = (inputFile, outputFile) => {
  const src = fs.readFileSync(inputFile, 'utf-8');
  const { descriptor } = parse(src);
  let templateCode = '';
  let scriptContent = descriptor.script.content;
  if (descriptor.template) {
    templateCode = compileTemplate({
      source: descriptor.template.content,
    }).code;
    templateCode = templateCode.replace(
      'export function render',
      'function render'
    );
    scriptContent = scriptContent.replace(
      /name: '([a-z0-9-]*)',/i,
      `name: '$1',\n  render,`
    );
  }
  const content = `${templateCode}\n${scriptContent}`;
  fs.writeFileSync(outputFile, content);
};

export default transformVueComponent;
