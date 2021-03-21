var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        // return "Hello, " + this.greeting+"\nWelcome to Typescript";
        return "Hello," + this.greeting + "\nWelcome to Typescript\nHappy Learning";
    };
    return Greeter;
}());
var greeter = new Greeter("Smith");
console.log(greeter.greet());
