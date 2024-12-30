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