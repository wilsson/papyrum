"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config_dev_1 = require("./config.dev");
exports.server = function () {
    var port = 8080;
    var compiler = webpack(config_dev_1.config);
    var opts = {
        historyApiFallback: true
    };
    var server = new WebpackDevServer(compiler, opts);
    server.listen(port, '127.0.0.1', function () {
        console.log('Starting server on http://localhost:' + port);
    });
};
//# sourceMappingURL=devserver.js.map