import * as webpack from 'webpack';
import * as config from '../webpack.config';
import * as WebpackDevServer from 'webpack-dev-server';

export const Server = () => {
    const port = 8080;
    const compiler = webpack(config as any);
    const opts = {
        historyApiFallback: true
    };

    const server = new WebpackDevServer(compiler, opts);
    server.listen(port, '127.0.0.1', () => {
        console.log('Starting server on http://localhost:' + port);
    });
}