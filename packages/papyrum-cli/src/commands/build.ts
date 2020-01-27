import { build as webpack } from '@papyrum/core';
import * as path from 'path';
import { ensureFileSync } from 'fs-extra';

export const build = async (argv) => {
  webpack(argv);
/*
  //abstraer despues
  const pathDist = path.resolve(process.cwd(), argv.dist);
  const db = require(path.resolve(process.cwd(), '.papyrum/db.json'));
  const formatPages = (r: string) => r ==='/' ? '/' : `/pages${r}/`;
  const routes = db.plain.map(p => `${formatPages(p.route)}index.html`);
  
  try {
    routes.forEach(file => ensureFileSync(pathDist + file));
    console.log('create pages in progress')
  } catch(e) {
    console.log('error create page', e.message);
  }
*/
  //convert MDX to html here
}