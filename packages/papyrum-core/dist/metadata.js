"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.Metadata = function (content) {
    var comment = content.match(/---([^-]+)---/);
    var objectResults = [];
    if (comment) {
        var items = comment[1].match(/\n/);
        items.forEach(function (item) {
            var val = item.split(':');
            objectResults.push({ key: val[0], value: val[1] });
        });
    }
    return objectResults;
};
