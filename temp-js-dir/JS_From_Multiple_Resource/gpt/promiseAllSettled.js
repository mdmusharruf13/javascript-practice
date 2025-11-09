// // all promise resolve
// const promises = [Promise.resolve("one"), Promise.resolve("two"), Promise.resolve("three")];

// // // atleast one promise reject
// const promises = [Promise.resolve("one"), Promise.reject(new Error("two error")), Promise.resolve("three")];

// // empty array 
// const promises = [];

// mixed promises and non-promise values
const promises = [Promise.resolve("one"), "two", Promise.resolve("three")]

Promise.all(promises).then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
});