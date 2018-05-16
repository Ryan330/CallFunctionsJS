//Call 3 Times Function
function call3Times(fun) {
    var sayHello = "Hello, world!";

    //Message Function
    function fun() {
        console.log(sayHello);
    }
   
    fun();
    fun();
    fun();
}


call3Times();