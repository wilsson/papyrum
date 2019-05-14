#!/usr/bin/env node

import * as yargs from 'yargs';
import { args } from './args';
import { server, InitApplication } from '@papyrum/core';
import * as  chokidar from 'chokidar';
yargs // eslint-disable-line
  .command('dev', 'Initial cli for dev', args, async argv => {
    await InitApplication();
    const watch = chokidar.watch('**/*.mdx', {
      ignored: 'node_modules'
    });
    watch.on('change', async (path) => {
      console.log(`File ${path} has been changed`)
      await InitApplication();
    });
    server();
  }).argv;
