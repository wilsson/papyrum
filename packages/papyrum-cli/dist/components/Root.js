"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ui_1 = require("@papyrum/ui");
var react_router_dom_1 = require("react-router-dom");
var AsyncComponent_1 = require("./AsyncComponent");
var Suspense = React.Suspense;
var styled_components_1 = require("styled-components");
var styled_1 = require("./styled");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    body {\n        margin: 0\n    }\n"], ["\n    body {\n        margin: 0\n    }\n"])));
exports.Root = function (_a) {
    var db = _a.db, imports = _a.imports;
    var components = AsyncComponent_1.getAsyncComponents(imports);
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyle, null),
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(styled_1.Wrapper, null,
                React.createElement(ui_1.Sidebar, { entries: db.entries }),
                React.createElement("div", { className: 'wrapper', style: { marginLeft: '240px' } },
                    React.createElement("article", { className: 'content' },
                        React.createElement(Suspense, { fallback: React.createElement("div", null, "Loading...") }, Object.keys(db.plain).map(function (entry, i) { return (React.createElement(react_router_dom_1.Route, { key: i, exact: true, path: db.plain[entry].route, component: components[i] })); }))))))));
};
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Jvb3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixrQ0FBc0M7QUFDdEMscURBQXdEO0FBQ3hELG1EQUFzRDtBQUM5QyxJQUFBLHlCQUFRLENBQVc7QUFDM0IsdURBQXFEO0FBQ3JELG1DQUFtQztBQUVuQyxJQUFNLFdBQVcsR0FBRyxxQ0FBaUIsNkdBQUEsMENBSXBDLElBQUEsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLFVBQUMsRUFBZTtRQUFiLFVBQUUsRUFBRSxvQkFBTztJQUM5QixJQUFNLFVBQVUsR0FBRyxtQ0FBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxPQUFNLENBQ0Y7UUFDSSxvQkFBQyxXQUFXLE9BQUc7UUFDZixvQkFBQyxnQ0FBYTtZQUNWLG9CQUFDLGdCQUFPO2dCQUNKLG9CQUFDLFlBQU8sSUFBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBSTtnQkFDaEMsNkJBQUssU0FBUyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFO29CQUNuRCxpQ0FBUyxTQUFTLEVBQUMsU0FBUzt3QkFDeEIsb0JBQUMsUUFBUSxJQUFDLFFBQVEsRUFBRSw4Q0FBcUIsSUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQ3JDLG9CQUFDLHdCQUFLLElBQ0YsR0FBRyxFQUFFLENBQUMsRUFDTixLQUFLLFFBQ0wsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUMzQixTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFJLENBQ25DLEVBTndDLENBTXhDLENBQUMsQ0FDSyxDQUNMLENBQ1IsQ0FDQSxDQUNFLENBQ2pCLENBQ04sQ0FBQTtBQUNMLENBQUMsQ0FBQSJ9