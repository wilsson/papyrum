import * as fs from 'fs';
import { compile } from 'art-template';

export const tplCompile = (filepath, opts = {}) => {
  const file = fs.readFileSync(filepath, 'utf8');
  return compile(file, opts);
};
