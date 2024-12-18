class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`hello, i am ${this.name}`)
    }
}

const person = new Person("Musharruf", 30);
person.greet();