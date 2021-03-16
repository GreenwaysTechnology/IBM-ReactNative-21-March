//promise object creation ; using factory api

function sayHello() {
    return 'Hello'
}
//success only
function delay() {
    return Promise.resolve('delay')
}
delay().then(res => console.log(res))
console.log(sayHello())


//failure only
function delayWithError() {
    return Promise.reject('delay with reject')
}
delayWithError().catch(err => console.log(err))

//success and failure
function delayWithBoth() {
    let message = 'hello';
    if (message) {
        return Promise.resolve(message)
    } else {
        return Promise.reject('something went wrong')
    }
}
delayWithBoth()
    .then(res => console.log(res))
    .catch(err => console.log(err))
//////////////////////////////////////////////////////////////////////////////

//promise object using constructors.
// if you want to convert any existing callbacks into promises
function getUser() {
    let user = { id: 1, name: 'ram' };
    if (user) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, user);
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, { message: 'User not found' });
        });
    }
}
//
getUser()
    .then(res => console.log(res))
    .catch(err => console.log(err))
