import * as matter from 'remark-frontmatter';

export const babel = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-papyrum')]
    }
  }
};

export const mdx = {
  test: /.mdx?$/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('babel-preset-papyrum')]
      }
    },
    {
      loader: require.resolve('@mdx-js/loader'),
      options: {
        mdPlugins: [matter],
        type: 'yaml',
        marker: '-'
      }
    }
  ]
};
