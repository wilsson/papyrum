interface Config {
    flow?: boolean;
    typescript?: boolean;
}

const DEFAULT_OPTS: Config = {
    flow: false,
    typescript: false
}

export const preset = (opts: Config = DEFAULT_OPTS) => {
    console.log('preset', opts);
    return {
        presets: [
            require("@babel/preset-env").default,
            opts.flow && [require('@babel/preset-flow').default],
            opts.typescript && [require("@babel/preset-typescript").default],
            require("@babel/preset-react").default
        ].filter(Boolean),
        plugins: []
    }
}