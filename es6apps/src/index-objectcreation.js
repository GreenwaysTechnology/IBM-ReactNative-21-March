function Employee() {
    //declare instance variables and methods
    this.id = 1;
    this.name = 'ram';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//create object
//emp is variable- reference variable
//new is keyword to instruct for memory allocation
//Employee() - constructor call.
const emp = new Employee();

//access object properties
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)

//ES 6 class

class Customer {
    id = 1;
    name = "Subramaian";
    constructor() {
        console.log('customer init....')
    }
    //methods
    calculateInvoice() {
        return 100;
    }
}
const cust = new Customer();
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`Salary ${cust.calculateInvoice()}`)

//literal patterns
let product = {
    id: 1,
    name: 'phone',
    // getQty: function () {
    //     return 100;
    // }
    getQty: () => {
        return 100;
    },
    calculateInvoice() {
        return 1000;
    }
};
console.log(`id ${product.id}`)
console.log(`Name ${product.name}`)
console.log(`Qty ${product.getQty()}`)
console.log(`Invoice ${product.calculateInvoice()}`)





