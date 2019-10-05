import * as matter from 'remark-frontmatter';
import { rehype } from '../utils/rehype';
import * as emoji from 'remark-emoji';
import { merge } from 'lodash/fp'
import { loadFileConfig } from '../utils/fs';

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
  return merge(config, loadFileConfig('babel'));
};

export const babel = argv => ({
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      ...getConfigBabel(argv),
      cacheDirectory: true,
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
        remarkPlugins: [
          [
            matter, { type: 'yaml', marker: '-' }
          ],
          emoji
        ],
        rehypePlugins: [rehype]
      }
    }
  ]
});

export const file = {
  test: /\.(jpe?g|png|svg|woff2|woff|ttf)$/,
  use: [
    {
      loader: require.resolve('file-loader'),
      options: {
        outputPath: 'static/assets',
      }
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