import * as matter from 'remark-frontmatter';
import { rehype } from '../utils/rehype';
import * as emoji from 'remark-emoji';

export const babel = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      presets: [[require.resolve('babel-preset-papyrum'), { typescript: true }]]
    }
  }
};

export const mdx = {
  test: /.mdx?$/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options: {
        presets: [[require.resolve('babel-preset-papyrum'), { typescript: true }]]
      }
    },
    {
      loader: require.resolve('@mdx-js/loader'),
      options: {
        mdPlugins: [[matter, { type: 'yaml', marker: '-' }], [emoji]],
        hastPlugins: [[rehype]],
      }
    }
  ]
};

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
}