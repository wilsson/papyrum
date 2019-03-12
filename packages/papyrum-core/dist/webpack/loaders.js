"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
};
exports.mdxLoader = {
    test: /.mdx?$/,
    use: ['babel-loader', '@mdx-js/loader']
};
//# sourceMappingURL=loaders.js.map