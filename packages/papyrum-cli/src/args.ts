import * as fs from 'fs-extra';
import * as path from 'path';
import slugify from '@sindresorhus/slugify';
import humanize from 'humanize-string';

const pkg = fs.readJsonSync(path.resolve(process.cwd(), './package.json'), { throws: false });

export const args = (yargs): any => {
  yargs.option('port', {
    type: 'number',
    alias: 'p',
    default: 3000
  });

  yargs.option('dest', {
    type: 'string',
    alias: 'd',
    default: './.papyrum/dist'
  });

  yargs.option('ignore', {
    type: 'array',
    alias: 'i',
    default: []
  })
  yargs.option('title', {
    type: 'string',
    alias: 't',
    default: humanize(slugify(pkg.name))
  });

  yargs.option('typescript', {
    type: 'boolean',
    alias: 'ts',
    default: false
  });

  yargs.option('homepage', {
    type: 'string',
    default: pkg.homepage
  })
};