/**
 * Prototype Chain
 * => Every JavaScript object has an internal [[Prototype]] (accessed via Object.getPrototypeOf(obj) or __proto__).
 * The chain continues up untill null (end of chain).
 * => .prototype is a property of constructor functions or classes.
 * => .prototype is used to define properties or methods that will be inherited by the instances of that constructor or class.
 * __proto__ :
 * => A property of every object in javascript.
 * => Points to the prototype object from which the object inherits properties and methods.
 * => used to access the prototype chain for an object.
 * 
 * Modifying Object.prototype (via .__proto__) is strongly discouraged because:
 * => it affects all the objects in you program.
 * => it can cause unpredictable behaviour and conflicts with other libraries or code.
 */

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    return `${this.name} makes a noise.`
}

const dog = new Animal("Buddy");
console.log(dog.speak());

console.log(dog.__proto__ == Animal.prototype);

console.log(dog.__proto__);
console.log(dog.__proto__.__proto__);
console.log(dog.__proto__.__proto__.__proto__);

console.log(dog.__proto__ == Animal.prototype);
console.log(Animal.prototype.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__);

/**
 * Inheritance Chain
 * (one points to another)
 * dog.__proto__ -> Animal.prototype
 * Animal.prototype.__proto__ -> Object.prototype
 * Object.prototype.__proto__ -> null
 */

const animal = {
    speak() {
        return console.log(`${this.name} make a noise.`);
    }
};

const cat = Object.create(animal); // cat's prototype is set to animal
cat.name = "cat";

cat.speak();

// problem: Adding a method to animal.__proto__ is equivalent to adding it to Object.prototype.
animal.__proto__.speaks = function () {
    console.log(`${this.name} makes noise.`);
};

// correct way of is setting method to that(animal) object is thatObject.method(); without using '__proto__' 

cat.speaks();

const obj = { name: "mush" };

// checking speaks() available on all objects
obj.speaks();


/**
 * `.prototype` in classes:
 * => In ES6 classes, prototype methods are defined inside the class body. These methods are equivalent to defining them on `.prototype`
 */

class Bike {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // Prototype method
    getBikeInfo() {
        return `${this.name} bike is ${this.color}`;
    }
}

const bike = new Bike("duke 125", "orange");
console.log(bike.getBikeInfo());

// verifying `.prototype`
console.log(Bike.prototype.getBikeInfo);