"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_OPTS = {
    flow: false,
    typescript: false
};
exports.default = (function (opts) {
    if (opts === void 0) { opts = DEFAULT_OPTS; }
    console.log('preset', opts);
    return {
        presets: [
            require("@babel/preset-env").default,
            opts.flow && [require('@babel/preset-flow').default],
            opts.typescript && [require("@babel/preset-typescript").default],
            require("@babel/preset-react").default
        ].filter(Boolean),
        plugins: []
    };
});
