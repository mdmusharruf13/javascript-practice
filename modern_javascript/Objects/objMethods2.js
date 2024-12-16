// 'in' operator
const car = {
    brand: "Toyota",
    year: 2020
};

console.log("brand" in car);
console.log("model" in car);


// built in methods
const keys = Object.keys(car);
const values = Object.values(car);
const keyValuePairs = Object.entries(car);

console.log("keys: ", keys);
console.log("values: ", values);
console.log("key value pairs: ", keyValuePairs);


// iterating
// iterates over keys
for (const key in car) {
    console.log(key);
}

// iterates over values
for (const value of Object.values(car)) {
    console.log(value);
}


// Dynamic property
const key = "color";
const value = "red";

const carObj1 = {
    brand: "Toyota",
    [key]: value
};

console.log(carObj1);

const carObj2 = {
    brand: "Toyota",
    key: value
};

console.log(carObj2);



