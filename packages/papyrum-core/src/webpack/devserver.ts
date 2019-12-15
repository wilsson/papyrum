import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import { getConfig } from './config.dev';

export const server = argv => {
  const port = argv.port;
  const config = getConfig(argv);
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, {
    compress: true,
    clientLogLevel: 'none',
    hot: true,
    hotOnly: true,
    quiet: true,
    overlay: false,
    historyApiFallback: true
  });

  server.listen(port, '0.0.0.0', () => {
    console.log('Starting server on http://localhost:' + port);
  });
};
