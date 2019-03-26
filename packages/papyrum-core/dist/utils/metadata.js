"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var removeSpace = function (str) { return str.replace(/\s+/g, ''); };
var metadata = ['name', 'route'];
exports.getMetadata = function (content) {
    var comment = content.match(/---([^-]+)---/);
    var objectResults = [];
    if (comment) {
        var lines = comment[1].split('\n');
        for (var i = 0; i < lines.length; i++) {
            if (/\:/.test(lines[i])) {
                var _a = lines[i].split(':'), key = _a[0], value = _a[1];
                var newKey = removeSpace(key);
                var newValue = removeSpace(value);
                if (!metadata.includes(newKey))
                    continue;
                objectResults.push({
                    key: newKey,
                    value: newValue
                });
            }
        }
    }
    return objectResults;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvbWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQyxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztBQUU3RCxJQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV0QixRQUFBLFdBQVcsR0FBRyxVQUFDLE9BQWU7SUFDdkMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQyxJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDekIsSUFBSSxPQUFPLEVBQUU7UUFDVCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZixJQUFBLHdCQUFrQyxFQUFqQyxXQUFHLEVBQUUsYUFBNEIsQ0FBQztnQkFDekMsSUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFBRSxTQUFTO2dCQUN6QyxhQUFhLENBQUMsSUFBSSxDQUFDO29CQUNmLEdBQUcsRUFBRSxNQUFNO29CQUNYLEtBQUssRUFBRSxRQUFRO2lCQUNsQixDQUFDLENBQUM7YUFDTjtTQUNKO0tBQ0o7SUFDRCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDLENBQUEifQ==