#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var args_1 = require("./args");
var core_1 = require("@papyrum/core");
yargs // eslint-disable-line
    .command('dev', 'Initial cli for dev', args_1.args, function (argv) {
    console.log('argv', argv);
    core_1.server();
})
    .argv;
