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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWR4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL21keC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBa0M7QUFDbEMsaUNBQW1DO0FBQ25DLHFDQUF1QztBQUN2QywyQ0FBNEM7QUFDNUMsc0NBQXdDO0FBRXhDLElBQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLElBQU0sWUFBWSxHQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQXZCLENBQXVCLENBQUM7QUFFakQsUUFBQSxRQUFRLEdBQUcsVUFBQyxJQUFZO0lBQ2pDLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLElBQU0sTUFBTSxHQUFHLE9BQU8sRUFBRTtTQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ1gsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDL0MsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRyxVQUFDLEdBQUc7SUFDckIsSUFBQSx1QkFBb0MsRUFBbEMsY0FBSSxFQUFFLGdCQUE0QixDQUFDO0lBQzNDLElBQUcsSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO2FBQ3BCLEtBQUs7YUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ1gsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNDLElBQUEsd0VBQThELEVBQTdELFdBQUcsRUFBRSxhQUF3RCxDQUFDO1lBQ3JFLE9BQU87Z0JBQ0gsR0FBRyxLQUFBO2dCQUNILEtBQUssT0FBQTthQUNSLENBQUE7UUFDTCxDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0wsQ0FBQyxDQUFDIn0=