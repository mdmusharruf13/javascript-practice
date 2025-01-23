const obj = {
    a: "one",
    b: "two",
    a: "three",
};

console.log(obj);

const a = {};
const b = { key: "b" };
const c = { key: "c" };

console.log(a[b]);


console.log([..."javascript"]);


delete obj.a;
delete obj.b;

console.log(obj);

const setting = {
    username: "musharruf",
    level: 19,
    health: 99
};

const data = JSON.stringify(setting, ["health", "level"]);
console.log(data);
console.log(JSON.parse(data));


const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => {
        console.log(this.radius);
        return 2 * Math.PI * this.radius;
    }
}

console.log(shape.diameter());
console.log(shape.perimeter());


// destructuring
let user = {
    name: "musharruf",
    age: 30,
    fullName: {
        firstName: "Md Musharruf",
        lastName: "Nawaz"
    }
};

// nested destructuring
const { fullName: { firstName } } = user;
console.log(firstName);

// renaming nested destructured variable
const { fullName: { firstName: userName } } = user;
console.log(userName)


// object referencing
let obj1 = { greeting: "Hey!" };
let tempObj;

tempObj = obj1;
tempObj.greeting = "Hello!";
console.log(tempObj.greeting);

// changing reference
let person = { name: "mush" };
const members = [person]; // reference stored
person = null; // reference changed

console.log(members);



const value = { num: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.num *= 2));
}

multiply();
multiply();
multiply(value);
multiply(value);


// change property and reference

function changeAgeAndReference(person) {
    // person is local variable that holds the reference of passed object(personObj1)
    person.age = 40;
    person = {
        name: "mush",
        age: 50
    }
    return person;
}

const personObj1 = {
    name: "musharruf",
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1);
console.log(personObj2);