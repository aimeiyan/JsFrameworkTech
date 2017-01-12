var url = require('url');

var parse1 = url.parse('http://imooc.com:8080/course/list?from=scott&course=node#floor1');

var parse2 = url.parse('http://imooc.com:8080/course/list?from=scott&course=node#floor1', true);
var parse5 = url.parse('//imooc.com:8080/course/list?from=scott&course=node#floor1', true);
var parse6 = url.parse('//imooc.com:8080/course/list?from=scott&course=node#floor1', true, true);

var parse3 = url.format({
    protocol: 'http:',
    slashes: true,
    host: 'imooc.com',
    port: '8080',
    hostname: 'imooc.com',
    hash: '#floor1',
    search: '?from=scott&course=node',
    query: 'from=scott&course=node',
    pathname: '/course/list',
    path: '/course/list?from=scott&course=node',
    href: 'http://imooc.com:8080/course/list?from=scott&course=node#floor1'
});

var parse4 = url.resolve('http://www.imooc.com', '/video/6710');


console.log(parse1);
console.log('------');
console.log(parse2);
console.log('------');
console.log(parse3);
console.log('------');
console.log(parse4);
console.log('------');
console.log(parse5);
console.log('------');
console.log(parse6);