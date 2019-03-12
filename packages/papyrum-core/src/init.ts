import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';

export const init = () => {

    const pathClient = path.resolve(process.cwd(), './.papyrum');

    return new Promise(async (resolve) => {
        try {
            await fs.mkdirSync(pathClient);
        } catch (e) { }

        const createPath = (pos) => pos === 0 ? '/' : `/${pos}`;
        const paths = await globby(['**/*.mdx', '!node_modules']);
        console.log('(core) paths>>', paths);

        const entries = {};
        paths.forEach((item) => {
            entries[item] = {
                filepath: item
            };
        });
        console.log('(core) entries', entries);
        fs.writeFileSync(pathClient + '/db.json', JSON.stringify({ entries }, null, 4));

        const file = await fs.readFileSync(path.resolve(__dirname, './../src/template/entry.txt'), 'utf8');
        let fileString = file.toString();
        const imports = paths.map((path, k) => `import A${k} from '../${path}';`);
        const components = paths.map((path, k) => `<Route exact path='${createPath(k)}' component={A${k}} />`);
        const pathsArr = paths.map((path) => `'${path}'`);
        fileString = fileString.replace(/\/\/_IMPORTS_/, imports.join('\n'));
        fileString = fileString.replace('_PATHS_', pathsArr.join(','));
        fileString = fileString.replace('_ROUTE_', components.join('\n'));
        try {
            await fs.writeFileSync(
                path.resolve(pathClient, './entry.jsx'),
                fileString
            );
        } catch (e) { }
        resolve('ok');
    });
}