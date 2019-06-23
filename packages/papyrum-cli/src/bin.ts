#!/usr/bin/env node

import * as yargs from 'yargs';
import { args } from './args';
import * as commands from './commands';

yargs // eslint-disable-line
  .command('dev', 'Initial cli for dev', args, async argv => {
    await commands.dev(argv);
  })
  .command('build', 'Build static site', args, async argv => {
    await commands.build(argv);
  })
  .argv;
