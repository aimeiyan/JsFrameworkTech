///**
// * 第一种验证 this 的情况
// * this指的是调用这个方法的对象
// * @type {{words: string, speak: pet.speak}}
// */
//
//var pet = {
//    words: '...',
//    speak: function () {
//        console.log(this.words);
//        console.log(this === pet);  //打印出来是tru    e，this指的是调用这个方法的对象
//    }
//};
//
//pet.speak();

///**
// * 第二种验证 this 的情况
// * this指向global，并不是函数本身
// * @param word
// */
//function pet(word){
//    this.word=word;
//    console.log(this.word);
//    //console.log(this);  //this指向global，并不是函数本身
//    console.log(this===global);  //this指向global，并不是函数本身
//}
//
//pet("...");


/**
 * 第三种验证 this 的情况
 * 构造函数
 * this指cat这个新构建好的对象
 * @param word
 * @constructor
 */
function Pet(word){
    this.word=word;
    this.speak=function(){
        console.log(this.word);
        console.log(this);

    };
}

var cat=new Pet("miao");  //新构建的对象
cat.speak();

