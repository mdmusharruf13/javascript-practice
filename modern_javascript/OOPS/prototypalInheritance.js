/**
 * Prototypal Inheritance 
 * Javascript objects can inherit directly from other objects using Object.create() or prototype.
 */

const animal = {
    speak() {
        return `${this.name} make a noise.`;
    }
}

// prototypal inheritance
const cat = Object.create(animal);
cat.name = "cat";
cat.sound = function () {
    return `${this.name} meow`;
}

console.log(cat.speak());
console.log(cat.sound());

