
// const promises = [
//     new Promise((resolve, reject) => setTimeout(() => reject("one"), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve("two"), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve("three"), 1000)),
// ];
const promises = [
    new Promise((resolve, reject) => setTimeout(() => reject("one"), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject("two"), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject("three"), 1000)),
];



Promise.any(promises).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});