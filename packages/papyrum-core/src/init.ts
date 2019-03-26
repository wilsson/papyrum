import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import slugify from '@sindresorhus/slugify';
import humanize from 'humanize-string';
import { parseMdx, getMetadata } from './utils/mdx';
import { template, pathClient } from './config/paths';
import { tplCompile } from './utils/fs';

export const init = () => {
    return new Promise(async (resolve) => {
        try {
            await fs.mkdirSync(pathClient);
        } catch (e) { }

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
                    if (key && value) entries[item][key] = value;
                });
                entries[item] = {
                    name: entries[item].name || humanize(slugify(finalRoute)),
                    route: entries[item].route || `/${slugify(finalRoute)}`,
                    nameChunk: `${slugify(finalRoute)}`,
                    path: item
                };
            })
        );
        fs.writeFileSync(pathClient + '/db.json', JSON.stringify({ entries }, null, 4));
        const file = fs.readFileSync(template('root.txt'), 'utf8');
        var templateFn = await tplCompile(template('imports.tpl.js'), { minimize: false })
        const imports = templateFn({ entries: Object.values(entries) });
        fs.writeFileSync(pathClient + '/imports.js', imports);
        fs.writeFileSync(path.resolve(pathClient, './root.jsx'), file);

        resolve('ok');
    });
}