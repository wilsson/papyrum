#!/usr/bin/env node
"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yargs = require("yargs");
var args_1 = require("./args");
var core_1 = require("@papyrum/core");
yargs // eslint-disable-line
    .command('dev', 'Initial cli for dev', args_1.args, function (argv) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, core_1.InitApplication()];
            case 1:
                _a.sent();
                core_1.server();
                return [2 /*return*/];
        }
    });
}); })
    .argv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Jpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGlCQVNTOzs7QUFUVCw2QkFBK0I7QUFDL0IsK0JBQThCO0FBQzlCLHNDQUF3RDtBQUV4RCxLQUFLLENBQUMsc0JBQXNCO0tBQ3ZCLE9BQU8sQ0FBQyxLQUFLLEVBQUUscUJBQXFCLEVBQUUsV0FBSSxFQUFFLFVBQU8sSUFBSTs7O29CQUNwRCxxQkFBTSxzQkFBZSxFQUFFLEVBQUE7O2dCQUF2QixTQUF1QixDQUFDO2dCQUN4QixhQUFNLEVBQUUsQ0FBQzs7OztLQUNaLENBQUM7S0FDRCxJQUFJLENBQUEifQ==