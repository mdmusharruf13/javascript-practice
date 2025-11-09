// // all success case
// const promises = [Promise.resolve("one"), Promise.resolve("two"), Promise.resolve("three")];

// // one reject case
// const promises = [Promise.resolve("one"), Promise.reject("p2 error"), Promise.resolve("three")];

// // mixed values (promise and non promise values)
// const promises = [Promise.resolve("one"), "two", Promise.reject("three error")];

// // all non promise values
// const promises = ["one", "two", "three"];

// empty array
const promises = [];


Promise.all(promises).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});