export const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
}

export const mdxLoader = {
    test: /.mdx?$/,
    use: ['babel-loader', '@mdx-js/loader']
}