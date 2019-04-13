"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var globby_1 = require("globby");
var slugify_1 = require("@sindresorhus/slugify");
var humanize_string_1 = require("humanize-string");
var mdx_1 = require("./utils/mdx");
var paths_1 = require("./config/paths");
var fs_1 = require("./utils/fs");
exports.init = function () {
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var e_1, paths, entries, file, templateFn, imports, menus, db, sentries;
        var _this = this;
        return __generator(this, function (_a) {
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
                    console.log('paths', paths);
                    entries = {};
                    return [4 /*yield*/, Promise.all(paths.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var filePath, ast, metasArray, finalRoute;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        filePath = path.resolve(process.cwd(), "./" + item);
                                        return [4 /*yield*/, mdx_1.parseMdx(filePath)];
                                    case 1:
                                        ast = _a.sent();
                                        metasArray = mdx_1.getMetadata(ast);
                                        console.log('metasArray>', metasArray);
                                        console.log('========');
                                        finalRoute = path.basename(item).replace(path.extname(item), '');
                                        entries[item] = {
                                            filepath: item
                                        };
                                        metasArray && metasArray.forEach(function (_a) {
                                            var key = _a.key, value = _a.value;
                                            if (key && value)
                                                entries[item][key] = value;
                                        });
                                        entries[item] = __assign({}, entries[item], { name: entries[item].name || humanize_string_1.default(slugify_1.default(finalRoute)), route: entries[item].route || "/" + slugify_1.default(finalRoute), nameChunk: "" + slugify_1.default(finalRoute), path: item });
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 5:
                    _a.sent();
                    //
                    fs.writeFileSync(paths_1.pathClient + '/db.json', JSON.stringify({ entries: entries }, null, 4));
                    file = fs.readFileSync(paths_1.template('root.txt'), 'utf8');
                    return [4 /*yield*/, fs_1.tplCompile(paths_1.template('imports.tpl.js'), { minimize: false })];
                case 6:
                    templateFn = _a.sent();
                    imports = templateFn({ entries: Object.values(entries) });
                    fs.writeFileSync(paths_1.pathClient + '/imports.js', imports);
                    fs.writeFileSync(path.resolve(paths_1.pathClient, './root.jsx'), file);
                    menus = [];
                    db = Object.values(entries)
                        .filter(function (entry) { return entry.menu; })
                        .map(function (entry) { return entry.menu; });
                    sentries = {};
                    Object.keys(entries)
                        .forEach(function (entry) {
                        console.log('entries[entry]', entries[entry]);
                        if (entries[entry].menu) {
                            if (sentries[entries[entry].menu]) {
                                sentries[entries[entry].menu].children = sentries[entries[entry].menu].children.concat([
                                    entries[entry]
                                ]);
                            }
                            else {
                                sentries[entries[entry].menu] = {
                                    name: entries[entry].menu,
                                    children: [
                                        entries[entry]
                                    ]
                                };
                            }
                            console.log('si');
                        }
                        else {
                            sentries[entry] = __assign({}, entries[entry]);
                            console.log('no');
                        }
                    });
                    fs.writeFileSync(paths_1.pathClient + '/db.json', JSON.stringify({ plain: entries, entries: sentries }, null, 4));
                    //console.log('sentries', sentries);
                    resolve('ok');
                    return [2 /*return*/];
            }
        });
    }); });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBd0ZDOztBQXhGRCx1QkFBeUI7QUFDekIsMkJBQTZCO0FBQzdCLGlDQUE0QjtBQUM1QixpREFBNEM7QUFDNUMsbURBQXVDO0FBQ3ZDLG1DQUFvRDtBQUNwRCx3Q0FBc0Q7QUFDdEQsaUNBQXdDO0FBRTNCLFFBQUEsSUFBSSxHQUFHO0lBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPOzs7Ozs7O29CQUV6QixxQkFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLGtCQUFVLENBQUMsRUFBQTs7b0JBQTlCLFNBQThCLENBQUM7Ozs7O3dCQUdyQixxQkFBTSxnQkFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDLEVBQUE7O29CQUFuRCxLQUFLLEdBQUcsU0FBMkM7b0JBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUV4QixPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNqQixxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBTyxJQUFJOzs7Ozt3Q0FDWCxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBSyxJQUFNLENBQUMsQ0FBQzt3Q0FDOUMscUJBQU0sY0FBUSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3Q0FBOUIsR0FBRyxHQUFHLFNBQXdCO3dDQUM5QixVQUFVLEdBQUcsaUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3Q0FDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7d0NBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7d0NBQ2xCLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dDQUN2RSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7NENBQ1osUUFBUSxFQUFFLElBQUk7eUNBQ2pCLENBQUM7d0NBQ0YsVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFjO2dEQUFaLFlBQUcsRUFBRSxnQkFBSzs0Q0FDMUMsSUFBSSxHQUFHLElBQUksS0FBSztnREFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO3dDQUNqRCxDQUFDLENBQUMsQ0FBQzt3Q0FDSCxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFDaEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUkseUJBQVEsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3pELEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQUksaUJBQU8sQ0FBQyxVQUFVLENBQUcsRUFDdkQsU0FBUyxFQUFFLEtBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUcsRUFDbkMsSUFBSSxFQUFFLElBQUksR0FDYixDQUFDOzs7OzZCQUNMLENBQUMsQ0FDTCxFQUFBOztvQkF0QkQsU0FzQkMsQ0FBQztvQkFDRixFQUFFO29CQUNGLEVBQUUsQ0FBQyxhQUFhLENBQUMsa0JBQVUsR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTFFLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGdCQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzFDLHFCQUFNLGVBQVUsQ0FBQyxnQkFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQTs7b0JBQTlFLFVBQVUsR0FBRyxTQUFpRTtvQkFDNUUsT0FBTyxHQUFHLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBVSxHQUFHLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFVLEVBQUUsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRTNELEtBQUssR0FBRyxFQUFFLENBQUE7b0JBQ1IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO3lCQUM1QixNQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQzt5QkFDbEMsR0FBRyxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUMsQ0FBQztvQkFHakMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQ2YsT0FBTyxDQUFDLFVBQUEsS0FBSzt3QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUU7NEJBQ3JCLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQ0FDL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEdBQy9CLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUTtvQ0FDekMsT0FBTyxDQUFDLEtBQUssQ0FBQztrQ0FDakIsQ0FBQTs2QkFDSjtpQ0FBTTtnQ0FDSCxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO29DQUM1QixJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUk7b0NBQ3pCLFFBQVEsRUFBRTt3Q0FDTixPQUFPLENBQUMsS0FBSyxDQUFDO3FDQUNqQjtpQ0FDSixDQUFDOzZCQUNMOzRCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3JCOzZCQUFNOzRCQUNILFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUNwQixDQUFDOzRCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3JCO29CQUNMLENBQUMsQ0FBQyxDQUFBO29CQUNOLEVBQUUsQ0FBQyxhQUFhLENBQUMsa0JBQVUsR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxRyxvQ0FBb0M7b0JBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztTQUNqQixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEifQ==