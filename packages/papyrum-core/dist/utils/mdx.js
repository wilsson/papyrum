"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vfile = require("to-vfile");
var unified = require("unified");
var remark = require("remark-parse");
var matter = require("remark-frontmatter");
var find = require("unist-util-find");
var metas = ['route', 'name'];
var removeSpaces = function (str) { return str.replace(/\s+/g, ''); };
exports.parseMdx = function (file) {
    var raw = vfile.readSync(file, 'utf-8');
    var parser = unified()
        .use(remark)
        .use(matter, { type: 'yaml', marker: '-' });
    return parser.run(parser.parse(raw));
};
exports.getMetadata = function (ast) {
    var _a = find(ast, 'value'), type = _a.type, value = _a.value;
    if (type === 'yaml') {
        return find(ast, 'value')
            .value
            .split('\n')
            .map(function (head) {
            var _a = head.split(':').map(function (item) { return removeSpaces(item); }), key = _a[0], value = _a[1];
            return {
                key: key,
                value: value
            };
        })
            .filter(function (item) { return metas.includes(item.key); });
    }
};
//# sourceMappingURL=mdx.js.map