class Circle {
    static pi: number = 3.14;
    
    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}

 

console.log("pi = "+Circle.pi);             

 

console.log("area = "+Circle.calculateArea(5));     
 