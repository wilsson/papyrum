"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var removeSpace = function (str) { return str.replace(/\s+/g, ''); };
exports.metadata = function (content) {
    var comment = content.match(/---([^-]+)---/);
    var objectResults = [];
    if (comment) {
        var lines = comment[1].split('\n');
        lines.forEach(function (line) {
            if (/\:/.test(line)) {
                var val = line.split(':');
                objectResults.push({
                    key: removeSpace(val[0]),
                    value: removeSpace(val[1])
                });
            }
        });
    }
    return objectResults;
};
//# sourceMappingURL=metadata.js.map