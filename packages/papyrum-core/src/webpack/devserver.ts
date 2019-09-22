import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import { getConfig } from './config.dev';

export const server = argv => {
  const port = argv.port;
  const config = getConfig(argv);
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, {
    open: true,
    quiet: true,
    historyApiFallback: true,
    hot: true
  });

  server.listen(port, '0.0.0.0', () => {
    console.log('Starting server on http://localhost:' + port);
  });
};
