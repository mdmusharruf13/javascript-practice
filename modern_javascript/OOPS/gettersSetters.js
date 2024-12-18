class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    // getter
    get Name() {
        return this.name;
    }

    // setter
    set newAge(value) {
        this._age = value;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("mush", 20);

console.log(person.Name);

console.log(person.age);
person.newAge = 30;
console.log(person.age);