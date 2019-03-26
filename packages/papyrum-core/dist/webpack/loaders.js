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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJwYWNrL2xvYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFFaEMsUUFBQSxLQUFLLEdBQUc7SUFDakIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsT0FBTyxFQUFFLGNBQWM7SUFDdkIsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ3ZDLE9BQU8sRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNyRDtLQUNKO0NBQ0osQ0FBQztBQUVXLFFBQUEsR0FBRyxHQUFHO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUU7UUFDRDtZQUNJLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUN2QyxPQUFPLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0o7UUFDRDtZQUNJLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQ3pDLE9BQU8sRUFBRTtnQkFDTCxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ25CLElBQUksRUFBRSxNQUFNO2dCQUNaLE1BQU0sRUFBRSxHQUFHO2FBQ2Q7U0FDSjtLQUNKO0NBQ0osQ0FBQyJ9