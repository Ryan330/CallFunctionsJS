//Message Function
function sayHello() {
    console.log("Hello, world!");
}


//Repeat Message Function
function callNTimes(repeats, hello) {
    var i;

    for (i = 0; i < repeats; i++) {
        sayHello();
    }
}


callNTimes(5, sayHello);