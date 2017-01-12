/**
 * Created by feng on 4/15/2016.
 */

var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("test nodjs");
    response.end();
}).listen(8888);
console.log("nodejs start listen 8899 port!");
