
function getA() {
    return 10;
}
let res = getA();
console.log(res);

// function counter() {
//     function inc() {
//         return 10 + 1;
//     }
//     return inc;
// }
// function counter() {
//     return function inc() {
//         return 10 + 1;
//     }
// }
function counter() {
    return function (a = 1) {
        return a + 1;
    }
}
let func = counter();
console.log(func, func(100));
////////////////////////////////////////////////////////////////////////////////
//nested ..
//curry function
function func1(a1) {
    return function func2(a2) {
        return function func3(a3) {
            return function func4(a4) {
                return `final ${a1} ${a2} ${a3} ${a4}`;
            }
        }
    }
}
// let f1 =func1();
// let f2 =f1();
const result = func1('a1')('a2')('a3')('a4');
console.log(result);


