import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import { config } from './config.dev';

export const server = () => {
  const port = 8080;
  const compiler = webpack(config as any);
  const server = new WebpackDevServer(compiler, {
    open: true,
    quiet: true,
    historyApiFallback: true,
    before(): void {
      console.log('before');
    },
    after(): void {
      console.log('after');
    }
  });

  server.listen(port, '0.0.0.0', () => {
    console.log('Starting server on http://localhost:' + port);
  });
};
