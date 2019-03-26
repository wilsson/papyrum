"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var WebpackBar = require("webpackbar");
var pathEntry = path.resolve(process.cwd(), './.papyrum/root.jsx');
var loaders = require("./loaders");
exports.config = {
    mode: 'development',
    entry: {
        app: pathEntry
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
        alias: {
            "~db": path.resolve(process.cwd(), './.papyrum/db.json')
        }
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
        new WebpackBar({
            name: 'Papyrum',
            color: '#41b883',
        })
    ],
    optimization: {
        namedModules: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRldi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJwYWNrL2NvbmZpZy5kZXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBNkI7QUFDN0IsdURBQXlEO0FBQ3pELHVDQUF5QztBQUN6QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBRXJFLG1DQUFxQztBQUV4QixRQUFBLE1BQU0sR0FBRztJQUNsQixJQUFJLEVBQUUsYUFBYTtJQUNuQixLQUFLLEVBQUU7UUFDSCxHQUFHLEVBQUUsU0FBUztLQUNqQjtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFDckMsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixhQUFhLEVBQUUsa0JBQWtCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNsRCxLQUFLLEVBQUU7WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsb0JBQW9CLENBQUM7U0FDM0Q7S0FDSjtJQUNELE9BQU8sRUFBRSxZQUFZO0lBQ3JCLE1BQU0sRUFBRTtRQUNKLEtBQUssRUFBRTtZQUNILE9BQU8sQ0FBQyxLQUFLO1lBQ2IsT0FBTyxDQUFDLEdBQUc7U0FDZDtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSSxpQkFBaUIsQ0FBQztZQUNsQixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUseUJBQXlCLENBQUM7U0FDL0QsQ0FBQztRQUNGLElBQUksVUFBVSxDQUNWO1lBQ0ksSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsU0FBUztTQUNuQixDQUNKO0tBQ0o7SUFDRCxZQUFZLEVBQUU7UUFDVixZQUFZLEVBQUUsSUFBSTtRQUNsQixXQUFXLEVBQUU7WUFDVCxXQUFXLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFO29CQUNKLElBQUksRUFBRSx3QkFBd0I7b0JBQzlCLElBQUksRUFBRSxTQUFTO29CQUNmLE1BQU0sRUFBRSxLQUFLO2lCQUNoQjthQUNKO1NBQ0o7S0FDSjtDQUNKLENBQUMifQ==