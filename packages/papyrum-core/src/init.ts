import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import slugify from '@sindresorhus/slugify';
import humanize from 'humanize-string';
import { parseMdx, getMetadata } from './utils/mdx';
import { template, pathClient } from './config/paths';
import { tplCompile } from './utils/fs';
import * as docgen from 'react-docgen';

export const init = () => {
  return new Promise(async resolve => {
    try {
      await fs.mkdirSync(pathClient);
    } catch (e) { }

    const paths = await globby(['**/*.mdx', '!node_modules', '!dist']);
    const pathsComponent = await globby(['**/*.{js,jsx,mjs,tsx}', '!dist']);
    //console.log('pathsComponent', pathsComponent);
    // create db.json for entries
    let entries = {};
    let props = {};
    pathsComponent.forEach(pathcomponent => {
      const filePath = path.resolve(process.cwd(), `./${pathcomponent}`);
      //console.log('filePath', filePath);
      try {
        const propsComponent = docgen.parse(fs.readFileSync(filePath));
        //console.log('propsComponent', propsComponent);
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
        console.log('metasArray', metasArray);
        console.log('--')
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
    fs.writeFileSync(
      pathClient + '/db.json',
      JSON.stringify(
        {
          entries
        },
        null,
        2
      )
    );
    // create imports
    const file = fs.readFileSync(template('root.txt'), 'utf8');
    var templateFn = await tplCompile(template('imports.tpl.js'), {
      minimize: false
    });
    const imports = templateFn({
      entries: Object.values(entries)
    });
    fs.writeFileSync(pathClient + '/imports.js', imports);
    fs.writeFileSync(path.resolve(pathClient, './root.jsx'), file);
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
