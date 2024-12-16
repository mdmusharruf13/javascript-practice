// property access
const obj = {
    name: "musharruf",
    age: 30
};

console.log(obj.name);  // Dot notation

console.log(obj["age"]);  // Bracket notation


// Object shorthand
const name = "mush";
const age = 25;

const person = { name, age };
console.log(person);


// Object destructuring
const student = {
    studentName: "musharruf",
    studentAge: 20
}
const { studentName, studentAge } = student;

console.log(studentName, studentAge);


// optional chaining
const user = {
    name: "mush",
    address: {
        city: "hyderabad",
    }
};

console.log(user?.address?.city);
console.log(user?.address?.state);


// spread operator
const obj1 = {
    a: 1,
    b: 2
};
const obj2 = {
    ...obj1,
    c: 3
};

console.log(obj2);