class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
       // return "Hello, " + this.greeting+"\nWelcome to Typescript";
	return `Hello,${this.greeting}
Welcome to Typescript
Happy Learning` 
    }
}

let greeter = new Greeter("Smith");
console.log(greeter.greet());

