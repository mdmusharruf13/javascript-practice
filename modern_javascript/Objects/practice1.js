let obj = {};

// Object.defineProperty(obj, "names", { value: "superman", writable: false });
// console.log(obj.names);
// obj.names = "habibi"
// console.log(obj.names);


Object.defineProperties(obj, {
    name: { value: "batman", writable: false },
    age: { value: 25, writable: true },

})
console.log(obj.name);
console.log(obj.age);


let obj2 = { a: 1, b: 2 };
console.log(Object.entries(obj2));

for (key in obj2) {
    console.log(obj2[key]);
}


obj2["star"] = 55;
console.log(obj2);
Object.freeze(obj2);
obj2["avg"] = 10;
console.log(obj2);
console.log(Object.isFrozen(obj2));