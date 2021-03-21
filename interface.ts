interface  Person {
   fullName: string;
   toString();
}
class  Employee  implements  Person {
 empID: string;
 fullName: string;
 constructor(eID: string, name: string) {
     this.empID = eID;
     this.fullName = name;
 }
 toString() {
     console.log(`EMP ID of ${this.fullName} is : ${this.empID}`);
 }
}
class Customer implements Person {
 custID: string;
 fullName: string;
  constructor(cID: string, name: string) {
    this.custID = cID;
    this.fullName = name;
 }
 toString() {
      console.log(`Customer ID of ${this.fullName} is : ${this.custID}`);
 }
}
                        
let  employee: Person = new Employee("E001", "Mike");
let customer: Person = new Customer("C001", "William");
employee.toString();     // EMP ID of Mike is : E001
customer.toString();     // Customer ID of William: C001