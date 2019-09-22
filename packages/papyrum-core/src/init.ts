import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import slugify from '@sindresorhus/slugify';
import humanize from 'humanize-string';
import { parseMdx, getMetadata } from './utils/mdx';
import { template, pathClient } from './config/paths';
import { tplCompile } from './utils/fs';
import * as docgen from 'react-docgen';
import { loadFileConfig } from './utils/fs';

export const init = (argv: any) => {
  return new Promise(async resolve => {
    try {
      await fs.mkdirSync(pathClient);
    } catch (e) { }

    const pattern = argv.typescript ? '**/*.{ts,tsx}' : '**/*.{js,jsx}';
    const paths = await globby([
      '**/*.mdx',
      '!node_modules',
      '!dist'
    ]);
    const ignore = argv.ignore.map(ignore => `!${ignore}`);
    const pathsComponent = await globby([
      pattern,
      '!node_modules',
      '!dist',
      ...ignore
    ]);
    // create db.json for entries
    let entries = {};
    let props = {};
    pathsComponent.forEach(pathcomponent => {
      const filePath = path.resolve(process.cwd(), `./${pathcomponent}`);
      try {
        const propsComponent = docgen.parse(fs.readFileSync(filePath));
        props[path.normalize(pathcomponent)] = {
          ...propsComponent
        };
      } catch (e) { }
    });
    await Promise.all(
      paths.map(async item => {
        const filePath = path.resolve(process.cwd(), `./${item}`);
        const ast = await parseMdx(filePath);
        const metasArray = getMetadata(ast);
        const finalRoute = path.basename(item).replace(path.extname(item), '');
        entries[item] = {
          filepath: item
        };
        metasArray &&
          metasArray.forEach(({ key, value }) => {
            if (key && value) entries[item][key] = value;
          });
        entries[item] = {
          ...entries[item],
          name: entries[item].name || humanize(slugify(finalRoute)),
          route: entries[item].route || `/${slugify(finalRoute)}`,
          nameChunk: `${slugify(finalRoute)}`,
          path: item,
        };
      })
    );
    // loadfile papyrumrc
    const config = loadFileConfig('papyrum');
    // create imports
    const appFile = fs.readFileSync(template('app.txt'), 'utf8');
    const rootFile = fs.readFileSync(template('root.txt'), 'utf8');
    var templateFn = await tplCompile(template('imports.tpl.js'), {
      minimize: false
    });
    const imports = templateFn({
      entries: Object.values(entries)
    });
    fs.writeFileSync(pathClient + '/imports.js', imports);
    fs.writeFileSync(path.resolve(pathClient, './root.js'), rootFile);
    fs.writeFileSync(path.resolve(pathClient, './App.js'), appFile);
    // create db
    let sentries = {};
    Object.keys(entries).forEach(entry => {
      if (entries[entry].menu) {
        if (sentries[entries[entry].menu]) {
          sentries[entries[entry].menu].children = [
            ...sentries[entries[entry].menu].children,
            entries[entry]
          ];
        } else {
          sentries[entries[entry].menu] = {
            name: entries[entry].menu,
            children: [entries[entry]]
          };
        }
      } else {
        sentries[entry] = {
          ...entries[entry]
        };
      }
    });
    fs.writeFileSync(
      pathClient + '/db.json',
      JSON.stringify(
        {
          config: {
            ...argv,
            ...config
          },
          plain: entries,
          entries: sentries,
          props
        },
        null,
        2
      )
    );
    resolve('ok');
  });
};
