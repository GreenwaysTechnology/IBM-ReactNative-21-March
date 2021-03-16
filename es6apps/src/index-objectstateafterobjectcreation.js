function Employee() {
    //hardcoded value
    this.id = 1;
    this.name = 'ram';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
let emp = new Employee();
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)
//after object creation
emp.id = 9999;
emp.name = 'Subramaian';
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)


class Customer {
    //declare instance variables and methods
    id = 1;
    name = 'ram';
    calculateInvoice() {
        return 1000;
    }
}
let cust = new Customer();
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`Salary ${cust.calculateInvoice()}`)
cust.id = 19999;
cust.name = 'Karthik'
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)