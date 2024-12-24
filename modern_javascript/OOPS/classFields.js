// Public Class Fields

class Car {
    brand = "Toyota";  // Public field
    model = "Supra";  // Public field

    constructor(color) {
        this.color = color;  // Public field initialized in constructor
    }

    getDetails() {
        return `${this.color} ${this.brand} ${this.model}`;
    }
}

const myCar = new Car("Black");
console.log(myCar.getDetails());
console.log(myCar.color);


// Private Class Fields
class Bike {
    #brand;
    #model;

    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;
    }

    getDetails() {
        return `${this.#brand} ${this.#model}`;
    }
}

const myBike = new Bike("KTM", "Duke 125");
console.log(myBike.getDetails());
// console.log(myBike.#brand); // SyntaxError: Private field '#brand' must be declared in an enclosing class