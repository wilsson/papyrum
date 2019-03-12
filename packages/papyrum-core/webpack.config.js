const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const pathEntry = path.resolve(process.cwd(), './.papyrum/entry.jsx');

module.exports = {
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
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    options: {
                        presets: [require.resolve("babel-preset-papyrum")]
                    }
                }
            },
            {
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
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        }),
        new WebpackBar()
    ]
}