//User Prompts
var userMessage = prompt("Say whatever you'd like: ");

var userTimes = prompt("How many times would you like to print your message?: ");

var userMultiply = prompt("How many times would you like to multiply your message?: ");


//Repeat Function
var repeatTimes = 0;

//Multiply Function
function stringMultiply(msg, times, multiply, repeat) {
    var newArray = [];
    var i;

    var calculate = times * multiply;

    for (i = 0; i < calculate; i++) {
        console.log(msg);
    }
}


stringMultiply(userMessage, userTimes, userMultiply, repeatTimes);