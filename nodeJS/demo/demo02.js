/**
 * Created by feng on 1/21/16.
 */
//下面代码是创建服务器
var http = require("http");//用require指令载入http模块，并将实例化的HTTP复制给变量http
http.createServer(function (request, response) {
    //发送HTTP头部
    //HTTP状态值：200：OK
    //内容类型：text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //发送响应数据“Hello World”
    response.end('Hello World');
}).listen(8888);

console.log("server is running at http://127.0.0.1:8888/");  //前台浏览器的debug窗口不会显示该信息