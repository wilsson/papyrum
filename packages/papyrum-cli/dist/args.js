"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.args = function (yargs) {
    yargs
        .positional('port', {
        describe: 'port to bind on',
        default: 3000
    });
};
//# sourceMappingURL=args.js.map