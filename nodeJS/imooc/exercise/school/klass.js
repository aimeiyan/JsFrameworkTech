/**
 * 创建班级
 * @type {exports|module.exports}
 */
var student = require("./student");   //引用“学生”模块
var teacher = require("./teacher");   //引用“老师”模块

function add(teacherName, students) {   //创建模块
    teacher.add(teacherName);
    students.forEach(function (item, index) {
        student.add(item);
    });
}

exports.add = add;  //导出模块
//module.exports=add;
console.log("创建班级");
