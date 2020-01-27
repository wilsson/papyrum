// webpack.config - ssr
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
import * as loaders from './loaders';
import * as StaticSiteGeneratorPlugin from '@endiliey/static-site-generator-webpack-plugin';

const pathEntry = path.resolve(process.cwd(), './.papyrum/root.js');

const pathSrr = path.resolve(process.cwd(), './.papyrum/otro.js');

console.log('entry ssr', pathSrr);
export const getConfig = config => {
  return {
    //mode: 'production',
    target: 'node',
    entry: {
      main: path.resolve(__dirname, '../client/server.js')
    },
    output: {
      path: path.resolve(process.cwd(), `./${config.dist}`),
      filename: 'static/js/[name].[hash].js',
      chunkFilename: 'static/js/[name].[hash].js',
      publicPath: '/',
      libraryTarget: 'commonjs2',
      globalObject: 'this'
    },

    externals: nodeExternals(),
    
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      alias: {
        app: pathSrr,
      }
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
      new StaticSiteGeneratorPlugin({
        entry: 'main',
        locals: {
          name: 'wilson',
          path: '/my-path'
        },
        paths: [
          '/',
          '/hello/',
        ],
      }),
      
    ],
  }
};