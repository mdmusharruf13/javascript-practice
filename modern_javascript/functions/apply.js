var obj = { name: "musharruf" };

function sayHello(age) {
    console.log(`hello ${this.name}, my age is ${age}`);
}

sayHello(35);

sayHello.apply(obj, [30]);
