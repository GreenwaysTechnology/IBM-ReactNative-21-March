function sayHello() {
    //function body
    console.log('Hello')
}
sayHello()
//function with some logic
function validate() {
    let name = 'ram';
    let password = 'ram';
    let response = (name === 'ram') && (password === 'ram') ? 'valid' : 'invalid'
    console.log(response);
}
validate();