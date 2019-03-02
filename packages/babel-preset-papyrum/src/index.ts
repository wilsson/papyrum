interface Config {
    flow?: boolean;
    typescript?: boolean;
}

const DEFAULT_OPTS: Config = {
    flow: false,
    typescript: false
}

export default (api: any, opts: Config = DEFAULT_OPTS) => {
    console.log('opts', JSON.stringify(opts));
    console.log('require("@babel/preset-react")', require("@babel/preset-react"));
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