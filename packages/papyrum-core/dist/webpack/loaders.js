"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matter = require("remark-frontmatter");
exports.babel = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: require.resolve("babel-loader"),
        options: {
            presets: [require.resolve("babel-preset-papyrum")]
        }
    }
};
exports.mdx = {
    test: /.mdx?$/,
    use: [
        {
            loader: require.resolve("babel-loader"),
            options: {
                presets: [require.resolve("babel-preset-papyrum")]
            }
        },
        {
            loader: require.resolve("@mdx-js/loader"),
            options: {
                mdPlugins: [matter],
                type: 'yaml',
                marker: '-'
            }
        }
    ]
};
//# sourceMappingURL=loaders.js.map