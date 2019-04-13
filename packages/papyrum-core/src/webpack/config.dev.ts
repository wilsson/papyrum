import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as WebpackBar from 'webpackbar';
const pathEntry = path.resolve(process.cwd(), './.papyrum/root.jsx');

import * as loaders from './loaders';

export const config = {
  mode: 'development',
  entry: {
    app: pathEntry
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
    alias: {
      '~db': path.resolve(process.cwd(), './.papyrum/db.json')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [loaders.babel, loaders.mdx]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public/index.html')
    }),
    new WebpackBar({
      name: 'Papyrum',
      color: '#41b883'
    })
  ],
  optimization: {
    namedModules: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
