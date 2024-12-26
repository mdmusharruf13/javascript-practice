class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Cat extends Animal {
}

class Lion extends Animal {
    speak() {
        return `${this.name} roars.`;
    }
}

const cat = new Cat("Cat");
console.log(cat.speak());

const lion = new Lion("Lion");
console.log(lion.speak());