//how to declare function and stores into a variable

//way-1
function sayHello(name = 'foo') {
    console.log('hello', name);
    return 'welcome'
}
sayHello('subramanian')
//store the function into a variable.
const hello = sayHello;
hello('ram');

//way 2
//anonomous function ; funciton without name
const greeter = function(message='bar') {
    console.log(`${message}`)
    return 'bar foo'
};
greeter('Hai')