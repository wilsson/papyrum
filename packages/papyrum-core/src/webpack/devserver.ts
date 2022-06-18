import * as webpack from 'webpack';
import * as path from 'path';
import * as WebpackDevServer from 'webpack-dev-server';
import { getConfig } from './config.dev';

export const server = argv => {
  const port = argv.port;
  const config = getConfig(argv);
  const compiler = webpack(config as webpack.Configuration);
  const devServerOptions: WebpackDevServer.Configuration = {
    port,
    host: '0.0.0.0',
    // hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(process.cwd(), argv.static)
    }
  }
  const server = new WebpackDevServer(devServerOptions, compiler);

  server.startCallback(() => {
    console.log(`Starting server on http://localhost:${port}`);
  })
};
