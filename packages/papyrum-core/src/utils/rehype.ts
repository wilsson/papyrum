import * as is from 'unist-util-is';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import * as nodeToString from 'hast-util-to-string';

// @ts-ignore
import * as strip from 'strip-indent';
import * as escapeJS from 'js-string-escape';

const traverseScope = (node) => {
  const scopes = [];
  const ast = parser.parse(node.value, { sourceType: 'module' });
  traverse(ast, {
    ImportDeclaration(path: any) {
      scopes.push(path.node.specifiers.map(specifier => specifier.local.name));
    }
  });
  return scopes;
};

const traverseProps = (code) => {
  const scopes = [];
  const ast: any = parser.parse(code.value, { plugins: ['jsx'] })
  traverse(ast, {
    enter(path: any) {
      if (path.isJSXOpeningElement() && path.node.name.name === 'Playground') {
        if (!!path.node.attributes.length) {
          const props = path.node.attributes.map(node => {
            return { name: node.name.name, value: node.value.value };
          })
          scopes.push(props);
        }
      }
    }
  });
  return scopes;
};

const traverseTags = (code: string, validation: Function, predicate: Function) => {
  const ast: any = parser.parse(code, { plugins: ['jsx'] })
  let value = '';
  traverse(ast, {
    enter(path: any) {
      if (validation(path)) {
        value = predicate(path);
        path.stop();
      }
    }
  });
  return value;
};

const extractTag = (code: string, node) => code.slice(node.start, node.end);

const getInnerComponentWithString = (code: string) => {
  const tagOpen = traverseTags(
    code,
    path => path.isJSXOpeningElement(),
    path => extractTag(code, path.node)
  );

  const tagClose = traverseTags(
    code,
    path => path.isJSXClosingElement(),
    path => extractTag(code, path.node)
  );

  return code
    .replace(tagOpen, '')
    .replace(tagClose, '');
};

export const getComponentName = (value: string) => {
  const [match, name] = value.match(/^\<\\?(\w+)/);
  return match && name;
};

const cleanSpaces = (code: string) => escapeJS(strip(code).trim());

const getScopes = (nodes) => {
  return nodes
    .filter(node => is('import', node))
    .map(traverseScope)
    .join(',');
};

const getProps = (nodes) => {
  return nodes
    .filter(node => is('jsx', node))
    .map(traverseProps);
};

const getNodes = (nodes, scope, props) => {
  return nodes
    .filter(node => is('jsx', node))
    .map(async (node, key) => {
      const name = getComponentName(node.value);
      if (name === 'Playground') {
        const nodeProps = props[key];
        const propsString = nodeProps[0] || '';
        const propsInline = !!propsString && propsString.map(node => `${node.name}="${node.value}"`).join(' ')
        const tagOpen = new RegExp(`^\\<${name}`);
        const componentString = nodeToString(node);
        const componentForCode = getInnerComponentWithString(componentString);
        const code = cleanSpaces(componentForCode);
        node.value = node.value.replace(
          tagOpen,
          `<${name} code={'${code}'} scope={{${scope}}} ${propsInline}`
        );
      }
    });
};

export const rehype = (opts) => (tree, file) => {
  const scope = getScopes(tree.children);
  const props = getProps(tree.children);
  const nodes = getNodes(tree.children, scope, props);
  return Promise.all(nodes).then(() => tree);
};