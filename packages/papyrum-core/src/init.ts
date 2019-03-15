import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import { getMetadata } from './utils/metadata';
import slugify from '@sindresorhus/slugify';
import humanize from 'humanize-string';

export const init = () => {

    const pathClient = path.resolve(process.cwd(), './.papyrum');

    return new Promise(async (resolve) => {
        try {
            await fs.mkdirSync(pathClient);
        } catch (e) { }

        const createPath = (pos) => pos === 0 ? '/' : `/${pos}`;
        const paths = await globby(['**/*.mdx', '!node_modules']);
        console.log('(core) paths>>', paths);

        // create db.json for entries
        const entries = {};
        paths.forEach((item) => {
            const file = fs.readFileSync(path.resolve(process.cwd(), `./${item}`), 'utf8');
            const metadata = getMetadata(file);
            const [name, route] = getMetadata(file);
            console.log('--------');
            console.log('name', path.basename(item));
            console.log('ext', path.extname(item));
            const finalRoute = path.basename(item).replace(path.extname(item), '');
            entries[item] = {
                filepath: item,
                name: name ? name.value : humanize(slugify(finalRoute)),
                route: route ? route.value : `/${slugify(finalRoute)}`
            };
        });
        console.log('(core) entries', entries);
        fs.writeFileSync(pathClient + '/db.json', JSON.stringify({ entries }, null, 4));

        // create root, imports and route for entries
        const file = await fs.readFileSync(path.resolve(__dirname, './../src/template/root.txt'), 'utf8');
        let fileString = file.toString();
        const imports = paths.map((path, k) => `import A${k} from '../${path}';`);
        const components = paths.map((path, k) => `A${k}`);
        fileString = fileString.replace(/\/\/_IMPORTS_/, imports.join('\n'));
        fileString = fileString.replace('_COMPONENTS_', components.join(', '));
        try {
            await fs.writeFileSync(
                path.resolve(pathClient, './root.jsx'),
                fileString
            );
        } catch (e) { }
        resolve('ok');
    });
}