"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ui_1 = require("@papyrum/ui");
var react_router_dom_1 = require("react-router-dom");
var AsyncComponent_1 = require("./AsyncComponent");
var Suspense = React.Suspense;
exports.Root = function (_a) {
    var db = _a.db, imports = _a.imports;
    var components = AsyncComponent_1.getAsyncComponents(imports);
    return (React.createElement(ui_1.SidebarWrapper, null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", { className: 'wrapper' },
                React.createElement("ul", { className: 'sidebar' }, Object.keys(db.entries).map(function (entry, i) { return (React.createElement("li", { key: i },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, activeStyle: { color: 'black' }, to: db.entries[entry].route }, db.entries[entry].name))); })),
                React.createElement("article", { className: 'content' },
                    React.createElement(Suspense, { fallback: React.createElement("div", null, "Loading...") }, Object.keys(db.entries).map(function (entry, i) { return (React.createElement(react_router_dom_1.Route, { key: i, exact: true, path: db.entries[entry].route, component: components[i] })); })))))));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Jvb3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQStCO0FBQy9CLGtDQUE2QztBQUM3QyxxREFBaUU7QUFDakUsbURBQXNEO0FBQzlDLElBQUEseUJBQVEsQ0FBVztBQUVkLFFBQUEsSUFBSSxHQUFHLFVBQUMsRUFBZTtRQUFiLFVBQUUsRUFBRSxvQkFBTztJQUM5QixJQUFNLFVBQVUsR0FBRyxtQ0FBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxPQUFNLENBQ0Ysb0JBQUMsbUJBQWM7UUFDWCxvQkFBQyxnQ0FBYTtZQUNWLDZCQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUNwQiw0QkFBSSxTQUFTLEVBQUMsU0FBUyxJQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FDdkMsNEJBQUksR0FBRyxFQUFFLENBQUM7b0JBQ04sb0JBQUMsMEJBQU8sSUFDSixLQUFLLFFBQ0wsV0FBVyxFQUFFLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUM1QixFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQzFCLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNqQixDQUNULENBQ1IsRUFUMEMsQ0FTMUMsQ0FBQyxDQUNEO2dCQUNMLGlDQUFTLFNBQVMsRUFBQyxTQUFTO29CQUM1QixvQkFBQyxRQUFRLElBQUMsUUFBUSxFQUFFLDhDQUFxQixJQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FDdkMsb0JBQUMsd0JBQUssSUFDRixHQUFHLEVBQUUsQ0FBQyxFQUNOLEtBQUssUUFDTCxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQzdCLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUksQ0FDbkMsRUFOMEMsQ0FNMUMsQ0FBQyxDQUNLLENBQ0QsQ0FDUixDQUNNLENBQ0gsQ0FDcEIsQ0FBQTtBQUNMLENBQUMsQ0FBQSJ9