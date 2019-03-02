#!/usr/bin/env node

import * as yargs from 'yargs';
import { args } from './args';
import { server } from '@papyrum/core';

yargs // eslint-disable-line
    .command('dev', 'Initial cli for dev', args, (argv) => {
        console.log('argv', argv);
        server();
    })
    .argv