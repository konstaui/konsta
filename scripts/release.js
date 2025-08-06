/* eslint-disable no-await-in-loop */
import exec from 'exec-sh';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { getDirname } from './get-dirname.js';

const __dirname = getDirname(import.meta.url);

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')
);
const childPkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package/package.json'), 'utf-8')
);

async function release() {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });
  const releaseDate = formatter.format(date);

  const options = await inquirer.prompt([
    {
      type: 'input',
      name: 'version',
      message: 'Version:',
      default: pkg.version,
    },
    {
      type: 'list',
      name: 'alpha',
      message: 'Alpha?',
      when: (opts) => opts.version.indexOf('alpha') >= 0,
      choices: [
        {
          name: 'YES',
          value: true,
        },
        {
          name: 'NO',
          value: false,
        },
      ],
    },
    {
      type: 'list',
      name: 'beta',
      message: 'Beta?',
      when: (opts) => opts.version.indexOf('beta') >= 0,
      choices: [
        {
          name: 'YES',
          value: true,
        },
        {
          name: 'NO',
          value: false,
        },
      ],
    },
    {
      type: 'list',
      name: 'next',
      message: 'Next?',
      when: (opts) => opts.version.indexOf('next') >= 0,
      choices: [
        {
          name: 'YES',
          value: true,
        },
        {
          name: 'NO',
          value: false,
        },
      ],
    },
  ]);
  // Set version
  pkg.version = options.version;
  childPkg.version = options.version;
  childPkg.releaseDate = releaseDate;

  fs.writeFileSync(
    path.resolve(__dirname, '../package.json'),
    JSON.stringify(pkg, null, 2)
  );
  fs.writeFileSync(
    path.resolve(__dirname, '../package/package.json'),
    JSON.stringify(childPkg, null, 2)
  );

  const cleanPackage = [
    'rm -rf **/*.js',
    'rm -rf *.js',
    'rm -rf **/*.ts',
    'rm -rf *.ts',
    'rm -rf **/*.css',
    'rm -rf *.css',
    'rm -rf **/*.map',
    'rm -rf *.map',
    'rm -rf **/*.less',
    'rm -rf *.less',
    'rm -rf **/*.scss',
    'rm -rf *.scss',
    'rm -rf **/*.svelte',
    'rm -rf *.svelte',
  ];

  await exec.promise('git pull');
  await exec.promise('npm i -force');
  await exec.promise(`cd ./package && ${cleanPackage.join(' && ')}`);
  await exec.promise(`npm run build`);
  await exec.promise('git add .');
  await exec.promise(`git commit -m ${pkg.version}`);
  await exec.promise('git push');
  await exec.promise(`git tag v${pkg.version}`);
  await exec.promise('git push origin --tags');

  // eslint-disable-next-line
  if (options.beta) {
    await exec.promise('cd ./package && npm publish --tag beta');
  } else if (options.alpha || options.next) {
    await exec.promise('cd ./package && npm publish --tag next');
  } else {
    await exec.promise('cd ./package && npm publish');
  }
  await exec.promise('npm run build-react-ks');
  await exec.promise('npm run build-vue-ks');
  await exec.promise('npm run build-svelte-ks');
}

release();
