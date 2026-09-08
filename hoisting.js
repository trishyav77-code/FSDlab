
console.log(name);
var name = "John Doe";
console.log(age);
let age = 30;//reference error-due to let 
//temporal dead zone (TDZ) is the time between the entering of a scope and the initialization of a variable declared with let or const. 
// During this period, accessing the variable will result in a ReferenceError.
//by sir-the period between entering a scope and intilaize let or const is called temporal dead zone (TDZ)
//tdz start here
let x=10;
{
//tdz end
console.log(x);
}
//closuers
function outerFunction() {
    let counter = 0;
    function innerFunction() {
        //inner function has access to the outer function's variables
        counter++;
        console.log(counter);
    }
    return innerFunction;
}
let incrementCounter = outerFunction();
incrementCounter();

