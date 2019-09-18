// webpack.config - build

import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as WebpackBar from 'webpackbar';
import * as loaders from './loaders';
import { setPathHtmlTemplate } from './../utils';

const pathEntry = path.resolve(process.cwd(), './.papyrum/root.jsx');

export const getConfig = config => ({
  mode: 'production',
  entry: {
    app: pathEntry
  },
  output: {
    path: path.resolve(process.cwd(), `./${config.dest}`),
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      loaders.babel(config),
      loaders.mdx(config),
      loaders.css,
      loaders.file
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: setPathHtmlTemplate(config)
    }),
    new WebpackBar({
      name: 'Papyrum',
      color: '#41b883'
    })
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  }
});