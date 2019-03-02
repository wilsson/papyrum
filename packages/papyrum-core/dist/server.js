"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var config = require("../webpack.config");
var WebpackDevServer = require("webpack-dev-server");
exports.server = function () {
    var port = 8080;
    var compiler = webpack(config);
    var opts = {};
    var server = new WebpackDevServer(compiler, opts);
    server.listen(port, '127.0.0.1', function () {
        console.log('Starting server on http://localhost:' + port);
    });
};
