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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_feather_1 = require("react-feather");
var SubList_1 = require("./SubList");
var styled_1 = require("./styled");
var useState = React.useState;
var withChildren = function (_a) {
    var name = _a.name, setActive = _a.setActive, active = _a.active, children = _a.children;
    return (React.createElement(SubList_1.SubList, { activeParent: active, onChange: function () {
            setActive(false);
        }, name: name, entries: children }));
};
var withoutChildren = function (_a) {
    var name = _a.name, setActive = _a.setActive, isActive = _a.isActive, route = _a.route;
    return (React.createElement(styled_1.ListItem, { active: isActive, onClick: function () { return setActive(route); } },
        React.createElement(react_router_dom_1.NavLink, { exact: true, to: route },
            React.createElement(react_feather_1.Bookmark, null),
            name)));
};
exports.Menu = function (_a) {
    var entries = _a.entries;
    var pathname = location.pathname;
    var _b = useState(pathname), active = _b[0], setActive = _b[1];
    return (React.createElement(styled_1.List, null, Object.values(entries).map(function (entry, i) {
        var name = entry.name, children = entry.children, route = entry.route;
        var isActive = active === route || false;
        var params = { name: name, setActive: setActive };
        return (React.createElement(React.Fragment, { key: i }, children
            ? withChildren(__assign({}, params, { active: active, children: children }))
            : withoutChildren(__assign({}, params, { isActive: isActive, route: route }))));
    })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lbnUvTWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixxREFBMkM7QUFDM0MsK0NBQXlDO0FBQ3pDLHFDQUFvQztBQUVwQyxtQ0FHa0I7QUFFVixJQUFBLHlCQUFRLENBQVc7QUFRM0IsSUFBTSxZQUFZLEdBQUcsVUFBQyxFQUtyQjtRQUpHLGNBQUksRUFDSix3QkFBUyxFQUNULGtCQUFNLEVBQ04sc0JBQVE7SUFDTixPQUFBLENBQ0Ysb0JBQUMsaUJBQU8sSUFDSixZQUFZLEVBQUUsTUFBTSxFQUNwQixRQUFRLEVBQUU7WUFDTixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUNELElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLFFBQVEsR0FDbkIsQ0FDTDtBQVRLLENBU0wsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHLFVBQUMsRUFLeEI7UUFKRyxjQUFJLEVBQ0osd0JBQVMsRUFDVCxzQkFBUSxFQUNSLGdCQUFLO0lBQ0gsT0FBQSxDQUNGLG9CQUFDLGlCQUFRLElBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBTSxPQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0I7UUFDdkQsb0JBQUMsMEJBQU8sSUFBQyxLQUFLLFFBQUMsRUFBRSxFQUFFLEtBQUs7WUFDcEIsb0JBQUMsd0JBQVEsT0FBRztZQUNYLElBQUksQ0FDQyxDQUNILENBQ2Q7QUFQSyxDQU9MLENBQUM7QUFFVyxRQUFBLElBQUksR0FBRyxVQUFDLEVBQVc7UUFBVCxvQkFBTztJQUNsQixJQUFBLDRCQUFRLENBQWM7SUFDeEIsSUFBQSx1QkFBMEMsRUFBeEMsY0FBTSxFQUFFLGlCQUFnQyxDQUFDO0lBQ2pELE9BQU0sQ0FDRixvQkFBQyxhQUFJLFFBQ0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFZLEVBQUUsQ0FBQztRQUNoQyxJQUFBLGlCQUFJLEVBQUUseUJBQVEsRUFBRSxtQkFBSyxDQUFXO1FBQ3hDLElBQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQzNDLElBQU0sTUFBTSxHQUFHLEVBQUUsSUFBSSxNQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQztRQUNuQyxPQUFNLENBQ0Ysb0JBQUMsS0FBSyxDQUFDLFFBQVEsSUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUNqQixRQUFRO1lBQ1QsQ0FBQyxDQUFDLFlBQVksY0FBSyxNQUFNLElBQUUsTUFBTSxRQUFBLEVBQUUsUUFBUSxVQUFBLElBQUU7WUFDN0MsQ0FBQyxDQUFDLGVBQWUsY0FBSyxNQUFNLElBQUUsUUFBUSxVQUFBLEVBQUUsS0FBSyxPQUFBLElBQUUsQ0FDbEMsQ0FDcEIsQ0FBQTtJQUNMLENBQUMsQ0FBQyxDQUNDLENBQ1YsQ0FBQTtBQUNMLENBQUMsQ0FBQSJ9