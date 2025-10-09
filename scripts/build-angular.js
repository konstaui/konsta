import exec from 'exec-sh';
import fs from 'fs-extra';
import path from 'path';
import banner from './banner.js';
import { getDirname } from './get-dirname.js';

const __dirname = getDirname(import.meta.url);
const bannerAngular = banner('Angular');

export default async (outputDir = 'package') => {
  const outDir = path.resolve(__dirname, `../${outputDir}/angular`);
  const tmpDir = path.resolve(__dirname, '../.tmp/angular');

  await fs.remove(tmpDir);
  await fs.remove(outDir);

  await exec.promise(
    `npx tsc --project tsconfig.angular.json --outDir ${tmpDir}`
  );

  await fs.ensureDir(outDir);
  await fs.copy(tmpDir, outDir);

  const themeSrc = path.resolve(__dirname, '../src/angular/theme.css');
  const themeDest = path.resolve(outDir, 'theme.css');
  await fs.copy(themeSrc, themeDest);

  const packageJsonSrc = path.resolve(__dirname, '../src/angular/package.json');
  if (fs.existsSync(packageJsonSrc)) {
    await fs.copy(packageJsonSrc, path.resolve(outDir, 'package.json'));
  }

  const entryPath = path.resolve(outDir, 'konsta-angular.js');
  if (fs.existsSync(entryPath)) {
    const content = await fs.readFile(entryPath, 'utf-8');
    await fs.writeFile(entryPath, `${bannerAngular}\n${content}`);
  }

  await fs.remove(tmpDir);
};
