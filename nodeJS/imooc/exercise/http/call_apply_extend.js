function Pet(words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words);
    }
}

function Dog(words) {
    Pet.call(this, words);   //通过call()方法，Dog继承了Pet中的方法
    //Pet.apply(this,argument);
}

var dog = new Dog("wang");
dog.speak();