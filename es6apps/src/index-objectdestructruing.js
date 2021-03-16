//Extract object properties without using reference variables.

// function printEmployee(employee) {
//     console.log(`id : ${employee.id}`)
//     console.log(`name : ${employee.name}`)
//     console.log(`City : ${employee.address.city}`)
// }
//object destructuring syntax
// function printEmployee(employee) {
//     const { id, name, address } = employee;
//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     console.log(`City : ${address.city}`)
// }
// function printEmployee({ id, name, address }) {
//   //  const { id, name, address } = employee;
//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     console.log(`City : ${address.city}`)
// }
// function printEmployee({ id, name, address: { city } }) {
//     //  const { id, name, address } = employee;
//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     console.log(`City : ${city}`)
// }
const printEmployee = ({ id, name, address: { city } }) => {
    //  const { id, name, address } = employee;
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${city}`)
};

printEmployee({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } });

class Customer {
    //declare instance variables and methods
    constructor(id = 1, name = 'ram') {
        this.id = id;
        this.name = name;
    }
    calculateInvoice() {
        return 1000;
    }
}
let { id, name, calculateInvoice } = new Customer();
console.log(`id ${id}`)
console.log(`Name ${name}`)
console.log(`Salary ${calculateInvoice()}`)
///////////////////////////////////////////////////////////////////////////////

//function returns object and how to destructure it.

// function getStock() {
//     return {
//         id: 1,
//         symbol: 'GOOGLE',
//         qty: 1000,
//         price: 10000
//     };
// }
//dynamic object values
// function getStock(id, symbol, qty, price) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     };
// }
//object destrucing
// function getStock(id, symbol, qty, price) {
//     //if left : right variables are equal, make it one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     };
// }
// const getStock = (id = 1, symbol = 'default', qty = 0, price = 0) => {
//     //if left : right variables are equal, make it one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     };
// }
const getStock = (id = 1, symbol = 'default', qty = 0, price = 0) => ({
    id,
    symbol,
    qty,
    price
});

console.log(getStock(2, 'Microsoft', 450, 8000));



















