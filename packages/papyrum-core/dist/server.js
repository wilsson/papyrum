"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config_1 = require("./webpack/config");
exports.Server = function () {
    var port = 8080;
    var compiler = webpack(config_1.config);
    var opts = {
        historyApiFallback: true
    };
    var server = new WebpackDevServer(compiler, opts);
    server.listen(port, '127.0.0.1', function () {
        console.log('Starting server on http://localhost:' + port);
    });
};
//# sourceMappingURL=server.js.map