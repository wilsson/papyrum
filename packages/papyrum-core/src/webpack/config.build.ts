// webpack.config - build

import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyPlugin from 'copy-webpack-plugin';
import * as loaders from './loaders';
import { setPathHtmlTemplate } from './../utils';

const pathEntry = path.resolve(process.cwd(), './.papyrum/root.js');

export const getConfig = config => {
  return {
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
        template: setPathHtmlTemplate(config),
        title: config.title,
        favicon: config.favicon && path.resolve(process.cwd(), config.static, config.favicon),
        meta: {
          viewport: 'width=device-width, initial-scale=1'
        }
      }),
      new CopyPlugin([
        { from: path.resolve(process.cwd(), 'static'), to: 'static/assets', ignore: ['index.html'] },
      ])
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all'
      }
    }
  }
};