/**
 * 函数的两个方法call()和apply()，使用这两个方法可以改变上下文执行对象。可以在自定义上下文中执行函数，
 * 作用一样，用法有区别。call()函数需要一个参数列表，apply()允许传递参数或者数组，它们的具体作用是调
 * 用一个对象的方法，拟定一个对象替换当前对象，其实就是更改对象的this指向的内容。
 * @type {{words: string, speak: pet.speak}}
 */
var pet = {
    words: "...",
    speak: function (say) {
        console.log(say + ' ' + this.words);   //这里的this值的是调这个方法的对象，即pet
    }
};
//pet.speak("Speak");

var dog = {
    words: "wang"
};

pet.speak.call(dog, "Speak");