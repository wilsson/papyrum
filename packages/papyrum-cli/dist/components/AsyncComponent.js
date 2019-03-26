"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.getAsyncComponents = function (imports) {
    return Object.keys(imports).map(function (key) { return React.lazy(imports[key]); });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXN5bmNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9Bc3luY0NvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBK0I7QUFFbEIsUUFBQSxrQkFBa0IsR0FBRyxVQUFBLE9BQU87SUFDckMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztBQUNyRSxDQUFDLENBQUEifQ==