//function as parameter

//a =10
//b =20
//a =x
function add(a = 10, b = 20) {
    return a + b;
}

let x = 10;
let y = 90;
console.log(add(x, y)); //here we pass variables
console.log(add(10, 20)); // here we pass numbers - hardcoded values

//function as parameter
//greetMe = function....
function sayGreet(greetMe) {
   let res= greetMe('Hello');
   console.log(res);
}
const hello = function (message = 'default Message') {
    console.log(message);
    return 'ok!';
};
//function as parameter
sayGreet(hello);
//sayGreet();
sayGreet(function (message = 'default Message') {
    console.log(message);
    return 'ok!'
});
////////////////////////////////////////////////////////////////////////////////

// string,string,fn,fn
function login(username, password, success, failure) {
    if (username === 'admin' && password === 'admin') {
        success('Login success')
    } else {
        failure('Login failed')
    }
}
login('admin','admin',function(status){
    console.log(status);
},function(err){
    console.log(err);
});
login('foo','foo',function(status){
    console.log(status);
},function(err){
    console.log(err);
});