import * as webpack from 'webpack';
import * as config from '../webpack.config';
import * as WebpackDevServer from 'webpack-dev-server';
console.log('config', config);
const port = 3000;
const compiler = webpack(config as any);
const opts = {};

const server = new WebpackDevServer(compiler, opts);
server.listen(port, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:' + port);
});