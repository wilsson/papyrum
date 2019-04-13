"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vfile = require("to-vfile");
var unified = require("unified");
var remark = require("remark-parse");
var matter = require("remark-frontmatter");
var find = require("unist-util-find");
var metas = ['route', 'name', 'menu'];
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
            console.log('head', head);
            var _a = head.split(':').map(function (item) { return removeSpaces(item); }), key = _a[0], value = _a[1];
            console.log('-----');
            return {
                key: key,
                value: value
            };
        })
            .filter(function (item) { return metas.includes(item.key); });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWR4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL21keC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBa0M7QUFDbEMsaUNBQW1DO0FBQ25DLHFDQUF1QztBQUN2QywyQ0FBNEM7QUFDNUMsc0NBQXdDO0FBRXhDLElBQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4QyxJQUFNLFlBQVksR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUF2QixDQUF1QixDQUFDO0FBRWpELFFBQUEsUUFBUSxHQUFHLFVBQUMsSUFBWTtJQUNqQyxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxJQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUU7U0FDbkIsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUNYLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQUcsVUFBQyxHQUFHO0lBQ3JCLElBQUEsdUJBQW9DLEVBQWxDLGNBQUksRUFBRSxnQkFBNEIsQ0FBQztJQUMzQyxJQUFHLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzthQUNwQixLQUFLO2FBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQixJQUFBLHdFQUE4RCxFQUE3RCxXQUFHLEVBQUUsYUFBd0QsQ0FBQztZQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE9BQU87Z0JBQ0gsR0FBRyxLQUFBO2dCQUNILEtBQUssT0FBQTthQUNSLENBQUE7UUFDTCxDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0wsQ0FBQyxDQUFDIn0=