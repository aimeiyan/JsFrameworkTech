/**
 * 创建完整的学校
 * @type {exports|module.exports}
 */
var klass = require("./klass");
exports.add = function (klasses) {
    klasses.forEach(function (item, index) {
        var _kclass = item;   //获取班级
        var teacherName = item.teacherName;  //获取这个班级的老师
        var students = item.students;  //获取这个班级的学生
        klass.add(teacherName, students);
    });
};
console.log("创建学校");
