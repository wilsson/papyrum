import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as loaders from './loaders';
import { setPathHtmlTemplate } from './../utils';
import * as webpack from 'webpack';
import * as ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const pathEntry = path.resolve(process.cwd(), './.papyrum/root.js');

export const getConfig = config => {
  return {
    mode: 'development',
    entry: pathEntry,
    output: {
      path: path.resolve(process.cwd(), `${config.dest}`),
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[name].chunk.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
    },
    devtool: 'eval-source-map',
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
          viewport: 'width=device-width, initial-scale=1'
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  }
};