"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = require("fs");
var path = require("path");
var globby_1 = require("globby");
var slugify_1 = require("@sindresorhus/slugify");
var humanize_string_1 = require("humanize-string");
var mdx_1 = require("./utils/mdx");
var paths_1 = require("./config/paths");
var fs_1 = require("./utils/fs");
exports.init = function () {
    return new Promise(function (resolve) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var e_1, paths, entries, file, templateFn, imports;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs.mkdirSync(paths_1.pathClient)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [4 /*yield*/, globby_1.default(['**/*.mdx', '!node_modules'])];
                case 4:
                    paths = _a.sent();
                    entries = {};
                    return [4 /*yield*/, Promise.all(paths.map(function (item) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var filePath, ast, metasArray, finalRoute;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        filePath = path.resolve(process.cwd(), "./" + item);
                                        return [4 /*yield*/, mdx_1.parseMdx(filePath)];
                                    case 1:
                                        ast = _a.sent();
                                        metasArray = mdx_1.getMetadata(ast);
                                        finalRoute = path.basename(item).replace(path.extname(item), '');
                                        entries[item] = {
                                            filepath: item
                                        };
                                        metasArray && metasArray.forEach(function (_a) {
                                            var key = _a.key, value = _a.value;
                                            if (key && value)
                                                entries[item][key] = value;
                                        });
                                        entries[item] = {
                                            name: entries[item].name || humanize_string_1.default(slugify_1.default(finalRoute)),
                                            route: entries[item].route || "/" + slugify_1.default(finalRoute),
                                            nameChunk: "" + slugify_1.default(finalRoute),
                                            path: item
                                        };
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 5:
                    _a.sent();
                    fs.writeFileSync(paths_1.pathClient + '/db.json', JSON.stringify({ entries: entries }, null, 4));
                    file = fs.readFileSync(paths_1.template('root.txt'), 'utf8');
                    return [4 /*yield*/, fs_1.tplCompile(paths_1.template('imports.tpl.js'), { minimize: false })];
                case 6:
                    templateFn = _a.sent();
                    imports = templateFn({ entries: Object.values(entries) });
                    fs.writeFileSync(paths_1.pathClient + '/imports.js', imports);
                    fs.writeFileSync(path.resolve(paths_1.pathClient, './root.jsx'), file);
                    resolve('ok');
                    return [2 /*return*/];
            }
        });
    }); });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkErQ0M7OztBQS9DRCx1QkFBeUI7QUFDekIsMkJBQTZCO0FBQzdCLGlDQUE0QjtBQUM1QixpREFBNEM7QUFDNUMsbURBQXVDO0FBQ3ZDLG1DQUFvRDtBQUNwRCx3Q0FBc0Q7QUFDdEQsaUNBQXdDO0FBRTNCLFFBQUEsSUFBSSxHQUFHO0lBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPOzs7Ozs7O29CQUV6QixxQkFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLGtCQUFVLENBQUMsRUFBQTs7b0JBQTlCLFNBQThCLENBQUM7Ozs7O3dCQUdyQixxQkFBTSxnQkFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDLEVBQUE7O29CQUFuRCxLQUFLLEdBQUcsU0FBMkM7b0JBRW5ELE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ25CLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFPLElBQUk7Ozs7O3dDQUNYLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFLLElBQU0sQ0FBQyxDQUFDO3dDQUM5QyxxQkFBTSxjQUFRLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dDQUE5QixHQUFHLEdBQUcsU0FBd0I7d0NBQzlCLFVBQVUsR0FBRyxpQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dDQUM5QixVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzt3Q0FDdkUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzRDQUNaLFFBQVEsRUFBRSxJQUFJO3lDQUNqQixDQUFDO3dDQUNGLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBYztnREFBWixZQUFHLEVBQUUsZ0JBQUs7NENBQzFDLElBQUksR0FBRyxJQUFJLEtBQUs7Z0RBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzt3Q0FDakQsQ0FBQyxDQUFDLENBQUM7d0NBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzRDQUNaLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLHlCQUFRLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs0Q0FDekQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksTUFBSSxpQkFBTyxDQUFDLFVBQVUsQ0FBRzs0Q0FDdkQsU0FBUyxFQUFFLEtBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUc7NENBQ25DLElBQUksRUFBRSxJQUFJO3lDQUNiLENBQUM7Ozs7NkJBQ0wsQ0FBQyxDQUNMLEVBQUE7O29CQW5CRCxTQW1CQyxDQUFDO29CQUNGLEVBQUUsQ0FBQyxhQUFhLENBQUMsa0JBQVUsR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGdCQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzFDLHFCQUFNLGVBQVUsQ0FBQyxnQkFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQTs7b0JBQTlFLFVBQVUsR0FBRyxTQUFpRTtvQkFDNUUsT0FBTyxHQUFHLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBVSxHQUFHLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFVLEVBQUUsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRS9ELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztTQUNqQixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEifQ==