import * as vfile from 'to-vfile';
import * as unified from 'unified';
import * as remark from 'remark-parse';
import * as matter from 'remark-frontmatter';
import * as find from 'unist-util-find';

const metas = ['route', 'name', 'menu', 'status'];

export const parseMdx = (file: string) => {
  const raw = vfile.readSync(file, 'utf-8');
  const parser = (unified as any)()
    .use(remark)
    .use(matter, {
      type: 'yaml',
      marker: '-'
    });
  return parser.run(parser.parse(raw));
};

export const getMetadata = ast => {
  const { type, value } = find(ast, 'value');
  if (type === 'yaml') {
    return find(ast, 'value')
      .value.split('\n')
      .map(head => {
        const [ key, value ] = head.split(':').map((item: string) => item.trim());
        return { key, value };
      })
      .filter(item => metas.includes(item.key));
  }
};
