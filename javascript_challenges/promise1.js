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


// example 2
const promise2 = new Promise((resolve, reject) => {
    console.log("second 1");
    resolve("completed");
    console.log("second 2")
}).then((result) => {
    console.log("second result", result);
});


// example 3
const promise3 = new Promise((resolve, reject) => {
    console.log("third");
}).then((result) => {
    console.log("third result", result);
});


// example 4
new Promise((resolve, reject) => {
    resolve(11);
    resolve(12);
    reject(13);
}).then((value) => {
    console.log(value);
}, (error) => {
    console.error(error);
})