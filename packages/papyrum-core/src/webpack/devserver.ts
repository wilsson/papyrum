import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import { config } from './config.dev';

export const server = () => {
  const port = 8080;
  const compiler = webpack(config as any);
  const opts = {
    historyApiFallback: true,
    quiet: true
  };

  const server = new WebpackDevServer(compiler, opts);
  server.listen(port, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:' + port);
  });
};
