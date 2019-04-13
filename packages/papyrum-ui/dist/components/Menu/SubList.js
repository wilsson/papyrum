"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_feather_1 = require("react-feather");
var styled_1 = require("./styled");
var react_router_dom_1 = require("react-router-dom");
var useState = React.useState;
exports.SubList = function (_a) {
    var name = _a.name, entries = _a.entries, activeParent = _a.activeParent, onChange = _a.onChange;
    var pathname = location.pathname;
    var _b = useState(pathname), active = _b[0], setActive = _b[1];
    var _c = useState(true), open = _c[0], setOpen = _c[1];
    var handleToggleMenu = function (e) {
        e.preventDefault();
        setOpen(!open);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(styled_1.ListItem, { onClick: handleToggleMenu },
            React.createElement(styled_1.HeaderList, { href: "#", open: open },
                React.createElement("div", null,
                    React.createElement(react_feather_1.Bookmark, null),
                    name),
                React.createElement(react_feather_1.ChevronUp, null))),
        open && React.createElement(styled_1.SubListStyled, null, entries.map(function (children, i) {
            var name = children.name, route = children.route;
            var parent = active === activeParent || !activeParent;
            var isActive = active === route && parent || false;
            return (React.createElement(React.Fragment, { key: i },
                React.createElement(styled_1.SubListItemStyled, { onClick: function () {
                        setActive(route);
                        onChange();
                    }, active: isActive },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: route }, name))));
        }))));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lbnUvU3ViTGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBK0I7QUFDL0IsK0NBQW9EO0FBQ3BELG1DQUtrQjtBQUNsQixxREFBMkM7QUFFbkMsSUFBQSx5QkFBUSxDQUFXO0FBRWQsUUFBQSxPQUFPLEdBQUcsVUFBQyxFQUt2QjtRQUpHLGNBQUksRUFDSixvQkFBTyxFQUNQLDhCQUFZLEVBQ1osc0JBQVE7SUFFQSxJQUFBLDRCQUFRLENBQWM7SUFDeEIsSUFBQSx1QkFBMEMsRUFBeEMsY0FBTSxFQUFFLGlCQUFnQyxDQUFDO0lBQzNDLElBQUEsbUJBQWtDLEVBQWhDLFlBQUksRUFBRSxlQUEwQixDQUFDO0lBQ3pDLElBQU0sZ0JBQWdCLEdBQUcsVUFBQSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUM7SUFDRixPQUFNLENBQ0Y7UUFDSSxvQkFBQyxpQkFBUSxJQUFDLE9BQU8sRUFBRSxnQkFBZ0I7WUFDL0Isb0JBQUMsbUJBQVUsSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJO2dCQUMzQjtvQkFDSSxvQkFBQyx3QkFBUSxPQUFHO29CQUNYLElBQUksQ0FDSDtnQkFDTixvQkFBQyx5QkFBUyxPQUFHLENBQ0osQ0FDTjtRQUNWLElBQUksSUFBSSxvQkFBQyxzQkFBYSxRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUSxFQUFFLENBQUM7WUFDYixJQUFBLG9CQUFJLEVBQUUsc0JBQUssQ0FBYztZQUNqQyxJQUFJLE1BQU0sR0FBRyxNQUFNLEtBQUssWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3RELElBQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQztZQUNyRCxPQUFNLENBQ0Ysb0JBQUMsS0FBSyxDQUFDLFFBQVEsSUFBQyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsb0JBQUMsMEJBQWlCLElBQ2QsT0FBTyxFQUFFO3dCQUNMLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDakIsUUFBUSxFQUFFLENBQUM7b0JBQ2YsQ0FBQyxFQUNELE1BQU0sRUFBRSxRQUFRO29CQUVoQixvQkFBQywwQkFBTyxJQUFDLEtBQUssUUFBQyxFQUFFLEVBQUUsS0FBSyxJQUNuQixJQUFJLENBQ0MsQ0FDTSxDQUNQLENBQ3BCLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FDVSxDQUNqQixDQUNOLENBQUE7QUFDTCxDQUFDLENBQUEifQ==