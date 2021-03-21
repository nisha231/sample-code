var Employee = /** @class */ (function () {
    function Employee(eID, name) {
        this.empID = eID;
        this.fullName = name;
    }
    Employee.prototype.toString = function () {
        console.log("EMP ID of " + this.fullName + " is : " + this.empID);
    };
    return Employee;
}());
var Customer = /** @class */ (function () {
    function Customer(cID, name) {
        this.custID = cID;
        this.fullName = name;
    }
    Customer.prototype.toString = function () {
        console.log("Customer ID of " + this.fullName + " is : " + this.custID);
    };
    return Customer;
}());
var employee = new Employee("E001", "Mike");
var customer = new Customer("C001", "William");
employee.toString(); // EMP ID of Mike is : E001
customer.toString(); // Customer ID of William: C001
