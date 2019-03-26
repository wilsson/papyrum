"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var art_template_1 = require("art-template");
exports.tplCompile = function (filepath, opts) {
    if (opts === void 0) { opts = {}; }
    var file = fs.readFileSync(filepath, 'utf8');
    return art_template_1.compile(file, opts);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1QkFBeUI7QUFDekIsNkNBQXVDO0FBRTFCLFFBQUEsVUFBVSxHQUFHLFVBQUMsUUFBUSxFQUFFLElBQVM7SUFBVCxxQkFBQSxFQUFBLFNBQVM7SUFDMUMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsT0FBTyxzQkFBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUEifQ==