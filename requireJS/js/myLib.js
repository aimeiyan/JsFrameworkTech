/**
 * Created by feng on 4/14/2016.
 */
define(['myLib'], function(myLib){
    function foo(){
        myLib.doSomething();
    }
    return {
        foo : foo
    };
});