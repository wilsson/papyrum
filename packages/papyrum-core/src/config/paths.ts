import * as path from 'path';

const absolute = (from, to) => path.resolve(from, to);
const relativePath = __dirname;

export const pathClient = absolute(process.cwd(), './.papyrum');
export const template = tpl => absolute(relativePath, '../../templates/' + tpl);

//default
export const PATH_DIST = `${pathClient}/dist`;