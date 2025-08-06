import fs from 'fs';
import path from 'path';
import { getDirname } from './get-dirname.js';

const __dirname = getDirname(import.meta.url);

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')
);

const date = {
  day: new Date().getDate(),
  month:
    'January February March April May June July August September October November December'.split(
      ' '
    )[new Date().getMonth()],
  year: new Date().getFullYear(),
};

export default (name = null) =>
  `${`
/**
 * Konsta UI ${name ? `${name} ` : ''}${pkg.version}
 * ${pkg.description}
 * ${pkg.homepage || ''}
 *
 * Copyright 2014-${date.year} ${pkg.author}
 *
 * Released under the ${pkg.license} License
 *
 * Released on: ${date.month} ${date.day}, ${date.year}
 */
`.trim()}\n`;
