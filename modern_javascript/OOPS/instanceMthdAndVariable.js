/**
 * An instance method is a function defined within a class that operates on instance variables.
 * 
 * An object that is created using a class is said to be an instance of that class. The variables that the object contains are called instance variables. The method that the object contains are called instance method.
 */

class Car {
    constructor(brand, model, year) {
        // instance variables
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // instance method
    getCarInfo() {
        return `${this.brand} ${this.model}, built in ${this.year}`;
    }

    // instance method
    updateYear(newYear) {
        this.year = newYear;
        return `The car's year is updated to ${this.year}`;
    }
}

const mycar = new Car('Tesla', 'Model S', 2020);

console.log(mycar.getCarInfo());

console.log(mycar.updateYear(2025));