import fs from 'fs';
export default async () => {
  const colors = [];
  fs.readdirSync('./src/shared/colors').forEach((file) => {
    const className = file.split('.')[0];
    colors.push(className);
  });
  fs.writeFileSync(
    './package/shared/colors/index.js',
    colors
      .map((colorName) => `export {${colorName}} from './${colorName}.js';`)
      .join('\n')
  );
};
