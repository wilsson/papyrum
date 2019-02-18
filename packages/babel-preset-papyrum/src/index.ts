interface Config {
    flow?: boolean;
    typescript?: boolean;
}

export const preset = (opts: Config) => ({
    presets: [
        require("@babel/preset-env").default,
        opts.flow && [require('@babel/preset-flow').default],
        opts.typescript && [require("@babel/preset-typescript").default],
        require("@babel/preset-react").default
    ].filter(Boolean)
})