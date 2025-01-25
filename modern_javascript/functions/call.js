var obj = { name: "musharruf" };

function sayHello(age) {
    console.log(`hello ${this.name}, my age is ${age}`);
}

sayHello(35);

sayHello.call(obj, 30);


const age = 10;

var person = {
    name: "musharruf",
    age: 25,
    getAge: function () {
        return this.age;
    },
};

var person2 = { age: 24 };

console.log(person.getAge());

console.log(person.getAge.call(person2));