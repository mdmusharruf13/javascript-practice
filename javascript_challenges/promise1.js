// synchronous code inside promise
// example 1
console.log("start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
});

promise1.then((result) => {
    console.log(result);
})

console.log("end");


// example 1
const promise2 = new Promise((resolve, reject) => {
    console.log("second 1");
    resolve("completed");
    console.log("second 2")
}).then((result) => {
    console.log("second result", result);
});


// example 1
const promise3 = new Promise((resolve, reject) => {
    console.log("third");
}).then((result) => {
    console.log("third result", result);
});