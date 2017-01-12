function learn(something){
    console.log(something);
}

function we(callback,something){
    something+=" is cool！";
    callback(something);
}

we(learn,"nodeJs");

we(function(something){
    console.log(something);
},"jade");
