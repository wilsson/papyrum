import * as fs from 'fs';
import * as fsExtra from 'fs-extra';
import * as path from 'path';
import { compile } from 'art-template';
import * as findUp from 'find-up';

export const tplCompile = (filepath: string, opts = {}) => {
  const file = fs.readFileSync(filepath, 'utf8');
  return compile(file, opts);
};

const configDefault = {
  shorcodes: true
};

export const loadFileConfig = (nameConfig: string) => {
  require('@babel/register')({
    cache: false,
    presets: [['@babel/preset-env', { modules: 'commonjs' }]],
  });

  const file = findUp.sync(`${nameConfig}.config.js`);
  delete require.cache[file];
  if(file) {
    try {
      const isJS = path.extname(file) === '.js';
      if (isJS) {
        const required = require(file);
        const config = required.default || required;
        return {
          ...configDefault,
          ...config
        };
      } else {
        const json = fsExtra.readJsonSync(file, { throws: false }) || {};
        return json;
      }
    } catch (e) {
      console.log(`Error loading the configuration file ${nameConfig} >>`, e);
    }
  }
  return {};
};