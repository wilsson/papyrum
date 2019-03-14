"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var WebpackBar = require("webpackbar");
var pathEntry = path.resolve(process.cwd(), './.papyrum/root.jsx');
var loaders = require("./loaders");
exports.config = {
    mode: 'development',
    entry: pathEntry,
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            loaders.babel,
            loaders.mdx
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../../public/index.html')
        }),
        new WebpackBar()
    ]
};
//# sourceMappingURL=config.dev.js.map