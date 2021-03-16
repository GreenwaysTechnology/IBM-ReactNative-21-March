//arrow functions
//es 5 function literal
let hello = function () {
    console.log('hello')
};
hello();
//replace the above one with arrow syntax.
//remove function keyword
hello = () => {
    console.log('hello arrow ')
};
hello();
//function body has only one line of code: remove {}
hello = () => console.log('hello arrow with one line of code')
hello();
//args and params : multi parameter with default value

let add = (a = 1, b = 2) => {
    let r = a + b;
    console.log(r);
};
add(1, 3);
//single parameter without default value:remove ()
let saySomething = message => console.log(message);
saySomething('hello')
////////////////////////////////////////////////////////////////////////////////
//how to return value?
let multiply = () => {
    return 10 * 10;
};
console.log(multiply());
//if function has only return statment : remove {} and return statement
multiply = () => 10 * 10;
console.log(multiply());

multiply = (a = 10, b = 30) => a * b;
console.log(multiply());
//single parameter no default value, and return the same
let isActive = active => active;
console.log(isActive('active'));
///////////////////////////////////////////////////////////////////////////////
//funciton as parameter and arrow.

const login = (username, password, success, failure) => {
    if (username === 'admin' && password === 'admin') {
        success('Login success')
    } else {
        failure('Login failed')
    }
}

login('admin', 'admin', () => console.log(`Login success`), () =>
    console.log(`Login failed`)
);
//////////////////////////////////////////////////////////////////////////////
//how to return function ; arrow;

const counter = () => (a = 1) => a + 1;
console.log(counter()());
