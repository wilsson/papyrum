"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config_dev_1 = require("./config.dev");
exports.server = function () {
    var port = 8080;
    var compiler = webpack(config_dev_1.config);
    var opts = {
        historyApiFallback: true,
        quiet: true
    };
    var server = new WebpackDevServer(compiler, opts);
    server.listen(port, '127.0.0.1', function () {
        console.log('Starting server on http://localhost:' + port);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2c2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYnBhY2svZGV2c2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHFEQUF1RDtBQUN2RCwyQ0FBc0M7QUFFekIsUUFBQSxNQUFNLEdBQUc7SUFDbEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxtQkFBYSxDQUFDLENBQUM7SUFDeEMsSUFBTSxJQUFJLEdBQUc7UUFDVCxrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLEtBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQztJQUVGLElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBIn0=