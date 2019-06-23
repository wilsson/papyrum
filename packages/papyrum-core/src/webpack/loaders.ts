import * as matter from 'remark-frontmatter';
import { rehype } from '../utils/rehype';
import * as emoji from 'remark-emoji';
import * as findUp from 'find-up';
import * as fs from 'fs-extra';
import * as path from 'path';
import { merge } from 'lodash/fp'

const loadBabelConfig = () => {
  const file = findUp.sync([
    '.babelrc',
    'babel.json',
    'babelrc.js',
    '.babelrc.js',
    'babelrc.json',
    'babel.config.js',
    'babel.config.json'
  ]);
  const pathfile = path.resolve(process.cwd(), file);
  const json = fs.readJsonSync(pathfile, { throws: false }) || {};
  return json;
};

const getConfigBabel = argv => {
  const config = {
    babelrc: false,
    presets: [
      require.resolve('@babel/preset-env'),
      argv.flow && [require.resolve('@babel/preset-flow')],
      argv.typescript && [require.resolve('@babel/preset-typescript')],
      require.resolve('@babel/preset-react')
    ].filter(Boolean),
    plugins: [
      require.resolve('babel-plugin-export-metadata'),
      require.resolve('@babel/plugin-syntax-dynamic-import')
    ]
  }
  return merge(config, loadBabelConfig());
};

export const babel = argv => ({
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      ...getConfigBabel(argv)
    }
  }
});

export const mdx = argv => ({
  test: /.mdx?$/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options: {
        ...getConfigBabel(argv)
      }
    },
    {
      loader: require.resolve('@mdx-js/loader'),
      options: {
        mdPlugins: [
          [
            matter, { type: 'yaml', marker: '-' }
          ],
          [
            emoji
          ]
        ],
        hastPlugins: [
          [
            rehype
          ]
        ]
      }
    }
  ]
});

export const file = {
  test: /\.(jpe?g|png|svg|woff2|woff|ttf)$/,
  use: [
    {
      loader: require.resolve('file-loader')
    }
  ]
};

export const css = {
  test: /\.css$/,
  use: [
    require.resolve('style-loader'),
    require.resolve('css-loader')
  ]
};