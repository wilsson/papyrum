"use strict";
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
exports.init = function () {
    var pathClient = path.resolve(process.cwd(), './.papyrum');
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var e_1, createPath, paths, entries, file, fileString, imports, components, e_2;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs.mkdirSync(pathClient)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3:
                    createPath = function (pos) { return pos === 0 ? '/' : "/" + pos; };
                    return [4 /*yield*/, globby_1.default(['**/*.mdx', '!node_modules'])];
                case 4:
                    paths = _a.sent();
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
                                        console.log('path', filePath);
                                        console.log('ast 1');
                                        metasArray = mdx_1.getMetadata(ast);
                                        console.log('ast', ast);
                                        console.log('metasArray>>', metasArray);
                                        finalRoute = path.basename(item).replace(path.extname(item), '');
                                        entries[item] = {
                                            filepath: item
                                        };
                                        metasArray && metasArray.forEach(function (_a) {
                                            var key = _a.key, value = _a.value;
                                            var _b;
                                            if (key && value) {
                                                entries[item] = (_b = {},
                                                    _b[key] = value,
                                                    _b);
                                            }
                                        });
                                        entries[item] = {
                                            name: entries[item].name || humanize_string_1.default(slugify_1.default(finalRoute)),
                                            route: entries[item].route || "/" + slugify_1.default(finalRoute)
                                        };
                                        console.log('entries', entries);
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 5:
                    _a.sent();
                    console.log('final entries', entries);
                    fs.writeFileSync(pathClient + '/db.json', JSON.stringify({ entries: entries }, null, 4));
                    return [4 /*yield*/, fs.readFileSync(path.resolve(__dirname, './../src/template/root.txt'), 'utf8')];
                case 6:
                    file = _a.sent();
                    fileString = file.toString();
                    imports = paths.map(function (path, k) { return "import A" + k + " from '../" + path + "';"; });
                    components = paths.map(function (path, k) { return "A" + k; });
                    fileString = fileString.replace(/\/\/_IMPORTS_/, imports.join('\n'));
                    fileString = fileString.replace('_COMPONENTS_', components.join(', '));
                    _a.label = 7;
                case 7:
                    _a.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, fs.writeFileSync(path.resolve(pathClient, './root.jsx'), fileString)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 9:
                    e_2 = _a.sent();
                    return [3 /*break*/, 10];
                case 10:
                    resolve('ok');
                    return [2 /*return*/];
            }
        });
    }); });
};
//# sourceMappingURL=init.js.map