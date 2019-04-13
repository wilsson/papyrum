"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_feather_1 = require("react-feather");
var styled_1 = require("./styled");
var react_router_dom_1 = require("react-router-dom");
var useState = React.useState;
exports.SubList = function (_a) {
    var name = _a.name, entries = _a.entries, activeParent = _a.activeParent, onChange = _a.onChange;
    var _b = useState(null), active = _b[0], setActive = _b[1];
    var _c = useState(true), open = _c[0], setOpen = _c[1];
    var handleToggleMenu = function (e) {
        e.preventDefault();
        setOpen(!open);
    };
    console.log('activeParent', activeParent);
    return (React.createElement(React.Fragment, null,
        React.createElement(styled_1.ListItem, { onClick: handleToggleMenu },
            React.createElement(styled_1.HeaderList, { href: "#", open: open },
                React.createElement("div", null,
                    React.createElement(react_feather_1.Bookmark, null),
                    name),
                React.createElement(react_feather_1.ChevronUp, null))),
        open && React.createElement(styled_1.SubListStyled, null, entries.map(function (children, i) {
            var isActive = false;
            if (active !== null && active === i && activeParent === null) {
                isActive = true;
            }
            return (React.createElement(React.Fragment, { key: i },
                React.createElement(styled_1.SubListItemStyled, { onClick: function () {
                        setActive(i);
                        onChange();
                    }, active: isActive },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: children.route }, children.name))));
        }))));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvU3ViTGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBK0I7QUFDL0IsK0NBQW9EO0FBQ3BELG1DQUtrQjtBQUNsQixxREFBMkM7QUFFbkMsSUFBQSx5QkFBUSxDQUFXO0FBRWQsUUFBQSxPQUFPLEdBQUcsVUFBQyxFQUF5QztRQUF2QyxjQUFJLEVBQUUsb0JBQU8sRUFBRSw4QkFBWSxFQUFFLHNCQUFRO0lBQ3JELElBQUEsbUJBQXNDLEVBQXBDLGNBQU0sRUFBRSxpQkFBNEIsQ0FBQztJQUN2QyxJQUFBLG1CQUFrQyxFQUFoQyxZQUFJLEVBQUUsZUFBMEIsQ0FBQztJQUN6QyxJQUFNLGdCQUFnQixHQUFHLFVBQUEsQ0FBQztRQUN0QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUMsT0FBTSxDQUNGO1FBQ0ksb0JBQUMsaUJBQVEsSUFBQyxPQUFPLEVBQUUsZ0JBQWdCO1lBQy9CLG9CQUFDLG1CQUFVLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSTtnQkFDM0I7b0JBQ0ksb0JBQUMsd0JBQVEsT0FBRztvQkFDWCxJQUFJLENBQ0g7Z0JBQ04sb0JBQUMseUJBQVMsT0FBRyxDQUNKLENBQ047UUFDVixJQUFJLElBQUksb0JBQUMsc0JBQWEsUUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBRTtZQUN0QixJQUFHLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUN6RCxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1lBQ0QsT0FBTSxDQUNGLG9CQUFDLEtBQUssQ0FBQyxRQUFRLElBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLG9CQUFDLDBCQUFpQixJQUNkLE9BQU8sRUFBRTt3QkFDTCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsUUFBUSxFQUFFLENBQUM7b0JBQ2YsQ0FBQyxFQUNELE1BQU0sRUFBRSxRQUFRO29CQUVoQixvQkFBQywwQkFBTyxJQUNKLEtBQUssUUFDTCxFQUFFLEVBQUUsUUFBUSxDQUFDLEtBQUssSUFFakIsUUFBUSxDQUFDLElBQUksQ0FDUixDQUNNLENBQ1AsQ0FDcEIsQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUNVLENBQ2pCLENBQ04sQ0FBQTtBQUNMLENBQUMsQ0FBQSJ9