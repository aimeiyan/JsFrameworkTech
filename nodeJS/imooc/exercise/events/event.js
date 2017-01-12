/**
 * @type {*|EventEmitter}
 */

var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();

life.setMaxListeners(11);  //默认最大数量是10个监听器，最后一个注释掉，要不然会报错，因为那一条已经是第十一个了，太多会导致内存泄漏

//addEventListener

function water(who) {
    console.log('给' + who + ' 倒水');
}

life.on('hello', water);

//life.on('hello', function (who) {
//    console.log('给' + who + ' 倒水');
//});

life.on('hello', function (who) {
    console.log('给' + who + ' 做饭');
});

life.on('hello', function (who) {
    console.log('给' + who + ' ..洗衣服');
});

life.on('hello', function (who) {
    console.log('给' + who + ' ..4');
});

life.on('hello', function (who) {
    console.log('给' + who + ' ..5');
});

life.on('hello', function (who) {
    console.log('给' + who + ' ..6');
});

life.on('hello', function (who) {
    console.log('给' + who + ' ..7');
});

life.on('hello', function (who) {
    console.log('给' + who + ' ..8');
});

life.on('hello', function (who) {
    console.log('给' + who + ' ..9');
});

life.on('hello', function (who) {
    console.log('给' + who + ' ..10');
});

life.on('hello', function (who) {
    console.log('给' + who + ' ..11');
});

life.on('china', function (who) {
    console.log('给' + who + ' ..12');
});

life.on('china', function (who) {
    console.log('给' + who + ' ..13');
});

life.removeListener("hello", water);  //移除某一个监听
life.removeAllListeners();   //移除所有监听

var e1 = life.emit('hello', "jane");
var e2 = life.emit('china', "jane");
var e3 = life.emit("jiayou", "jane");

console.log(e1, e2, e3);

console.log(life.listeners("hello").length);   //输出监听的长度
console.log(EventEmitter.listenerCount(life, 'hello'));  //输出监听的长度