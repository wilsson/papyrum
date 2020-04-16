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
import * as visit from 'unist-util-visit'
import { stringArr } from './utils';

const extractHeadingFromtAst = (ast) => {
  const results = [];

  visit(ast, 'heading', (node: any) => {
    results.push(node);
  });

  return results.map((node) => {
    const [children] = node.children;
    return {
      value: children.value,
      slug: node.data.id,
      depth: node.depth
    }
  });
};

const createEntries = (entries: any) => {
  const sentries = {};

  for (let i = 0; i < Object.keys(entries).length; i++) {
    const key = Object.keys(entries)[i];
    const entry = entries[key];
    const { menu } = entry;

    if (menu && sentries[menu]) {
      sentries[menu].children = [
        ...sentries[menu].children,
        entries[key]
      ];
      continue;
    }

    if (menu && !sentries[menu]) {
      sentries[menu] = {
        name: menu,
        children: [entries[key]]
      };
      continue;
    }

    sentries[key] = {
      ...entries[key]
    };
  }
  return sentries;
};

const getPaths = async (type: string, ignore: string) => {
  const pattern = type ? '**/*.{ts,tsx}' : '**/*.{js,jsx}';
  const ignoreGlob = stringArr(ignore).map(ignore => `!${ignore}`);

  const files = await globby([
    pattern,
    '**/*.{md,mdx}',
    '!node_modules',
    '!dist',
    ...ignoreGlob
  ]);
  const pathsMdx = files.filter(file => /\.mdx?$/.test(file));
  const pathsDocgen = files.filter(file => /(tsx?|jsx?)$/.test(file));

  return {
    pathsMdx,
    pathsDocgen
  }
}

const getPropsForComponents = (pathsDocgen: string[]) => {
  let props = {};
  pathsDocgen.forEach(pathcomponent => {
    const filePath = path.resolve(process.cwd(), `./${pathcomponent}`);
    try {
      const propsComponent = docgen.parse(fs.readFileSync(filePath));
      props[path.normalize(pathcomponent)] = {
        ...propsComponent
      };
    } catch (e) { }
  });
  return props;
}

const compare = (word, nextWord) => {
  if (word.name < nextWord.name) {
    return -1;
  }
  if (word.name > nextWord.name) {
    return 1;
  }
  return 0;
};

const orderChildrenEntries = (entries: any) => {
  const newEntries = { ...entries };
  Object.values(newEntries).forEach((entry: any) => {
    if (entry.children && entry.children.length) {
      let orderChildren = entry.children.sort(compare);
      entry.children = orderChildren;
    }
  });
  return newEntries;
};

export const init = (argv: any) => {
  return new Promise(async resolve => {
    try {
      await fs.mkdirSync(pathClient);
    } catch (e) { }

    const { pathsMdx, pathsDocgen } = await getPaths(argv.typescript, argv.ignore);
    const props = getPropsForComponents(pathsDocgen);

    let planEntries = {};

    await Promise.all(
      pathsMdx.map(async item => {
        const filePath = path.resolve(process.cwd(), `./${item}`);
        const ast = await parseMdx(filePath);
        const heading = extractHeadingFromtAst(ast);

        const metasArray = getMetadata(ast);
        const finalRoute = path.basename(item).replace(path.extname(item), '');
        planEntries[item] = {
          filepath: item
        };
        metasArray &&
          metasArray.forEach(({ key, value }) => {
            if (key && value) planEntries[item][key] = value;
          });
        planEntries[item] = {
          heading,
          ...planEntries[item],
          name: planEntries[item].name || humanize(slugify(finalRoute)),
          route: planEntries[item].route || `/${slugify(finalRoute)}`,
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
      planEntries: Object.values(planEntries).sort(compare)
    });
    fs.writeFileSync(pathClient + '/imports.js', imports);

    if (!fs.existsSync(path.resolve(pathClient, './root.js'))) {
      fs.writeFileSync(path.resolve(pathClient, './root.js'), rootFile);
    }

    if (!fs.existsSync(path.resolve(pathClient, './App.js'))) {
      fs.writeFileSync(path.resolve(pathClient, './App.js'), appFile);
    }

    // create db
    let entries = createEntries(planEntries);
    let entriesOrder = orderChildrenEntries(entries);


    fs.writeFileSync(
      pathClient + '/db.json',
      JSON.stringify(
        {
          config: {
            ...argv,
            ...config
          },
          plain: Object.values(planEntries).sort(compare),
          entries: entriesOrder,
          props
        },
        null,
        2
      )
    );
    resolve('ok');
  });
};

