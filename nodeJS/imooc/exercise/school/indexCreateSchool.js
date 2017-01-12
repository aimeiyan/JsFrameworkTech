/**
 * 创建学校
 * @type {exports|module.exports}
 */

var school = require("./school");
var klasses = [
    {
        "teacherName": "周国平",
        "students": ["周国平1", "周国平2", "周国平3"]
    },
    {
        "teacherName": "冯仑",
        "students": ["冯仑1", "冯仑2", "冯仑3"]
    }, {
        "teacherName": "任志强",
        "students": ["任志强1", "任志强2", "任志强3"]
    }, {
        "teacherName": "贝索斯",
        "students": ["贝索斯1", "贝索斯2", "贝索斯3"]
    }
];

school.add(klasses);