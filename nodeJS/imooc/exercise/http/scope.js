var globalVariable = 'This is global variable';
function localVariable() {
    var localVariable = 'This is local variable';
    console.log("visit global/local variable");
    console.log(globalVariable);
    console.log(localVariable);

    globalVariable = "this is changed variable";
    console.log(globalVariable);

    function localFunction() {
        var innerLocalVariable = 'This is inner local variable';

        console.log("visit global/local/inner variable");

        console.log(globalVariable);
        console.log(localVariable);
        console.log(innerLocalVariable);
    }

    localFunction();
}
localVariable();