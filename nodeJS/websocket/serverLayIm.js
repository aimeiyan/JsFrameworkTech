// var app = require('express')(),
//     server = require('http').createServer(app),
//     io = require('socket.io').listen(server);
// server.listen(9082, '127.0.0.1');

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.use('/', express.static(__dirname + '/LayIM'));
server.listen(process.env.PORT || 9082);


console.log("server is running at http://127.0.0.1:9082/"); //前台浏览器的debug窗口不会显示该信息

var user = {};
io.sockets.on('connection', function(socket) {
    socket.on('message', function(d) {
        console.log(d,"d data--+++");

        switch (d.type) {
            case 'reg':
                user[d.content.uid] = socket.id;
                socket.broadcast.emit('addList', d.content);
                console.log('用户上线了：用户id=' + d.content.uid + '| 客户端id=' + socket.id);
                break;
            case 'chatMessage':
                var mydata = {
                    username: d.data.mine.username,
                    avatar: d.data.mine.avatar,
                    id: d.data.mine.id,
                    content: d.data.mine.content,
                    type: d.data.to.type,
                    toid: d.data.to.id
                };
                if (d.data.to.type == 'friend') {
                    console.log("huahua");
                      // io.sockets.emit('chatMessage', mydata);
                    //io.sockets.emit('chatMessage', mydata);
                    socket.broadcast.emit('chatMessage', mydata);
                    // console.log('【' + d.data.mine.username + '】对【' + d.data.to.name + '】说:' + d.data.mine.content)
                    // if (user[mydata.toid]) {
                        // console.log(mydata,"hello hello hello ---+++");
                        // io.sockets.sockets[user[mydata.toid]].emit('chatMessage', mydata);
                    //     console.log('【' + d.data.mine.username + '】对【' + d.data.to.username + '】说:' + d.data.mine.content)
                    // } else {
                    //     socket.emit('noonline', mydata)
                    // }
                    // socket.broadcast.emit('chatMessage', mydata)
                } else if (d.data.to.type == 'group') {
                    mydata.id = mydata.toid;
                    socket.broadcast.emit('chatMessage', mydata)
                }
                break
        }
    }).on('disconnect', function() {
       var outid=0,usernum=0;
        for (x in user) {
            usernum++;
            if (user[x] == socket.id) {
                outid=x
               delete user[x]
            }
        }
         console.log('用户ID=' + outid + '下线了');
         var out={id:outid,num:usernum-1}
         io.sockets.emit('out',out);
    })
});
