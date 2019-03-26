"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var absolute = function (from, to) { return path.resolve(from, to); };
var relativePath = __dirname;
exports.pathClient = absolute(process.cwd(), './.papyrum');
exports.template = function (tpl) { return absolute(relativePath, '../../templates/' + tpl); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL3BhdGhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQTZCO0FBRTdCLElBQU0sUUFBUSxHQUFHLFVBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUF0QixDQUFzQixDQUFDO0FBRXRELElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUNsQixRQUFBLFVBQVUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ25ELFFBQUEsUUFBUSxHQUFHLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyJ9