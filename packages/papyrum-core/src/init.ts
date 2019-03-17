import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import slugify from '@sindresorhus/slugify';
import humanize from 'humanize-string';
import { parseMdx, getMetadata } from './utils/mdx';
export const init = () => {

    const pathClient = path.resolve(process.cwd(), './.papyrum');

    return new Promise(async (resolve) => {
        try {
            await fs.mkdirSync(pathClient);
        } catch (e) { }

        const createPath = (pos) => pos === 0 ? '/' : `/${pos}`;
        const paths = await globby(['**/*.mdx', '!node_modules']);
        // create db.json for entries
        const entries = {};
        await Promise.all(
            paths.map(async (item) => {
                const filePath = path.resolve(process.cwd(), `./${item}`);
                const ast = await parseMdx(filePath);
                const metasArray = getMetadata(ast);
                const finalRoute = path.basename(item).replace(path.extname(item), '');
                entries[item] = {
                    filepath: item
                };
                metasArray && metasArray.forEach(({ key, value }) => {
                    if (key && value) {
                        entries[item] = {
                            [key]: value
                        };
                    }
                })
                entries[item] = {
                    name: entries[item].name || humanize(slugify(finalRoute)),
                    route: entries[item].route || `/${slugify(finalRoute)}`
                };
            })
        )
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