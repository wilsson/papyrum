import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as loaders from './loaders';
import { setPathHtmlTemplate } from './../utils';
import * as webpack from 'webpack';
import * as WebpackBar from 'webpackbar';

const pathEntry = path.resolve(process.cwd(), './.papyrum/root.js');

export const getConfig = config => {
  return {
    mode: 'development',
    entry: {
      app: [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        pathEntry
      ]
    },
    output: {
      path: path.resolve(process.cwd(), `${config.dist}`),
      filename: 'static/js/bundle.js',
      chunkFilename: 'static/js/[name].chunk.js',
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
        meta: {
          viewport: 'width=device-width, initial-scale=1',
          charset: 'UTF-8'
        }
      }),
      new WebpackBar({
        name: 'Papyrum',
        color: '#41b883'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
};