// webpack.config - ssr
import * as path from 'path';
import nodeExternals from 'webpack-node-externals';
import * as loaders from './loaders';

const pathEntry = path.resolve(process.cwd(), './.papyrum/root.js');

export const getConfig = config => {
  return {
    mode: 'production',
    target: 'node',
    entry: '',
    output: {
      path: path.resolve(process.cwd(), `./${config.dist}`),
      filename: 'static/js/[name].[hash].js',
      chunkFilename: 'static/js/[name].[hash].js',
      publicPath: '/'
    },
    externals: [
      nodeExternals({
          // we still want imported css from external files to be bundled otherwise 3rd party packages
          // which require us to include their own css would not work properly
          whitelist: /\.css$/,
      }),
  ],
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
    }
  }
};