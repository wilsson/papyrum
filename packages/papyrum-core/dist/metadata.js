"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var removeSpace = function (str) { return str.replace(/\s+/g, ''); };
var metadata = ['name', 'route'];
exports.getMetadata = function (content) {
    var comment = content.match(/---([^-]+)---/);
    var objectResults = [];
    if (comment) {
        var lines = comment[1].split('\n');
        for (var i = 0; i < lines.length; i++) {
            if (/\:/.test(lines[i])) {
                var _a = lines[i].split(':'), key = _a[0], value = _a[1];
                if (!metadata.includes(key))
                    continue;
                objectResults.push({
                    key: removeSpace(key),
                    value: removeSpace(value)
                });
            }
        }
    }
    return objectResults;
};
//# sourceMappingURL=metadata.js.map