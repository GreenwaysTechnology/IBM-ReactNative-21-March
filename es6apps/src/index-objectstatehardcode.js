//hardcoded
function Employee() {
    //declare instance variables and methods
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