const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathEntry = path.resolve(process.cwd(), './index.jsx');
console.log('path', pathEntry);
//process.exit();
module.exports = {
    mode: 'development',
    entry: pathEntry,
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
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
        })
    ]
}