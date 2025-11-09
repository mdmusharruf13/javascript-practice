// prototypal inheritance and the prototype chain

// ES6 introduced classes which is the modern way to construct objects

// That said, prototypal inheritance and the prototype chain are
// "under the hood" (ES6 classes are considered "syntactical sugar")


// // object liteals

// const person = {
//     working: true,
// }

// const car = {
//     plays: true,
// }

// // console.log(car.plays);
// // console.log(car.working);

// // car.__proto__ = person;
// // console.log(car.plays);
// // console.log(car.working);



// // JS now has getPrototyoeOf and setPrototypeOf methods instance of using __proto__

// console.log(car.plays);
// console.log(car.working);

// Object.setPrototypeOf(car, person);
// console.log(car.plays);
// console.log(car.working);

// console.log(Object.getPrototypeOf(car));
// console.log(car.__proto__);
// console.log(Object.getPrototypeOf(car) === car.__proto__);



// // extending the prototype chain -> general to specific to more specific

// const bmw = {
//     speed: "245 kmph",
//     __proto__: car,
// }
// console.log(bmw.speed);
// console.log(bmw.plays);
// console.log(bmw.working);



// Note: 
// No circular references allowed (person.__proto__ can't be car)
// the __proto__ value must be an object or null.
// an object can only directly inherit from one object.



// // objects with getters and setters

// const superCar = {
//     doors: 2,
//     seats: "vinyl",
//     get seatMaterials() {
//         return this.seats;
//     },
//     set seatMaterials(material) {
//         this.seat = seat;
//     }
// }

// const luxuryCar = {};
// Object.setPrototypeOf(luxuryCar, superCar);
// console.log(luxuryCar);
// luxuryCar.seat = "leather";
// console.log(luxuryCar);
// console.log(luxuryCar.doors);

// // walking up the chain - props and methods are not copied
// console.log("value is: ", luxuryCar.valueOf());


// // getting keys of an object
// console.log(Object.keys(luxuryCar));

// // loop through each object key
// Object.keys(luxuryCar).forEach((each) => console.log(each));

// // but a for..in loop includes inherited props.
// for (let key in luxuryCar) {
//     console.log(key, "...");
// }



// // object constructor

// function Animal(species) {
//     this.species = species;
//     this.eat = true;
// }
// Animal.prototype.walks = function () {
//     return `A ${this.species} is walking`;
// }

// const Bear = new Animal("bear");
// console.log(Bear.species);
// console.log(Bear.walks());

// console.log(Bear.__proto__);
// console.log(Bear.__proto__ === Animal.prototype);



// ES6 classes example of inheritance

class Vehicle {
    constructor() {
        this.wheels = 4;
        this.motorized = true;
    }

    ready() {
        return `Ready to go!`;
    }
}

class MotorCycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2;
    }

    wheelie() {
        return `On one wheel now!`;
    }
}

const myBike = new MotorCycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());

