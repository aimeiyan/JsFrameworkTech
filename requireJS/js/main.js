/**
 * Created by feng on 4/14/2016.
 */

require.config({
    //baseUrl: "../../thirdPlugins",
    paths: {
        "jquery": "../../thirdPlugins/jquery-1.12.3.min",
        "underscore": "../../thirdPlugins/underscore-min",
        "backbone": "../../thirdPlugins/backbone-min",
        //"jquery": "jquery-1.12.3.min",
        //"underscore": "underscore-min",
        //"backbone": "backbone-min",
        'math':"math"
    },
    shim: {
        'jquery': {
            //deps: ['jquery'],
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
        //'math':{
        //    //deps:['underscore', 'jquery','backbone'],
        //    exports:'math'
        //}
    }
});


//require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，
// 即主模块依赖这三个模块；第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，
// 从而在回调函数内部就可以使用这些模块。
//require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。

require(['jquery', 'underscore', 'backbone', 'math'], function ($, _, Backbone, math) {
    // some code here

    alert(math.add(1, 1));
});