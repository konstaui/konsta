import fs from 'fs';
export default async () => {
  const classes = [];
  fs.readdirSync('./src/shared/classes').forEach((file) => {
    const className = file.split('.')[0];
    classes.push(className);
  });
  fs.writeFileSync(
    './package/shared/classes/index.js',
    classes
      .map((className) => `export {${className}} from './${className}.js';`)
      .join('\n')
  );
};
