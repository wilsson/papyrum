const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathEntry = path.resolve(process.cwd(), './index.jsx');
console.log('path', pathEntry);
//process.exit();
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './index.jsx'),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.mdx', '.jsx'],
    },
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
                    require.resolve("babel-loader"),
                    require.resolve("@mdx-js/loader")
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        })
    ]
}