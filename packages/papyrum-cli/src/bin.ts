#!/usr/bin/env node

import * as yargs from 'yargs';
import { args } from './args';
import * as commands from './commands';
import { loadFileConfig } from '@papyrum/core';

const config = loadFileConfig('papyrum');

yargs // eslint-disable-line
  .command('dev', 'Initial cli for dev', args, async argv => {
    const cf = { ...argv, ...config };
    await commands.dev(cf);
  })
  .command('build', 'Build static site', args, async argv => {
    const cf = { ...argv, ...config };
    await commands.build(cf);
  })
  .command('new', 'Create base project', {}, argv => {
    console.log('Command new =>', argv);
  })
  .argv;
