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

/**
 * Why use Private Fields?
 * -> Encapsulation: keeps implementation details hidden from external code.
 * -> Data Security: Prevents accidental or unauthorized modification of sensitive data.
 * -> Clear API: Expose only what is necessary to the external code.
 * 
 * Summary:
 * -> Use public fields for properties that are part of the class's public API.
 * -> Use private fields for properties that should not be directly accessed or modified from outside the class.
 */