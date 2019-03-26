"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_OPTS = {
    flow: false,
    typescript: false
};
exports.default = (function (api, opts) {
    if (opts === void 0) { opts = DEFAULT_OPTS; }
    return {
        presets: [
            require('@babel/preset-env').default,
            opts.flow && [require('@babel/preset-flow').default],
            opts.typescript && [require('@babel/preset-typescript').default],
            require('@babel/preset-react').default
        ].filter(Boolean),
        plugins: [
            require('@babel/plugin-syntax-dynamic-import').default
        ]
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxJQUFNLFlBQVksR0FBVztJQUN6QixJQUFJLEVBQUUsS0FBSztJQUNYLFVBQVUsRUFBRSxLQUFLO0NBQ3BCLENBQUE7QUFFRCxtQkFBZSxVQUFDLEdBQVEsRUFBRSxJQUEyQjtJQUEzQixxQkFBQSxFQUFBLG1CQUEyQjtJQUNqRCxPQUFPO1FBQ0gsT0FBTyxFQUFFO1lBQ0wsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTztZQUNwQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3BELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDaEUsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTztTQUN6QyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsT0FBTyxFQUFFO1lBQ0wsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsT0FBTztTQUN6RDtLQUNKLENBQUE7QUFDTCxDQUFDLEVBQUEifQ==