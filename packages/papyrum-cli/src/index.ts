#!/usr/bin/env node

import * as yargs from 'yargs';
import { args } from './args';
import { server, InitApplication } from '@papyrum/core';

yargs // eslint-disable-line
    .command('dev', 'Initial cli for dev', args, async (argv) => {
        await InitApplication();
        server();
    })
    .argv