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


// example 5 - check output by commenting all the above codes
console.log(1);
const promise4 = new Promise((resolve, reject) => {
    console.log(2);
    resolve();
    console.log(3);
});

console.log(4);

promise4.then(() => {
    console.log(5);
}).then(() => {
    console.log(6);
}).catch((err) => {
    console.log(err);
})

console.log(7);

setTimeout(() => {
    console.log(8);
}, 10);

setTimeout(() => {
    console.log(9);
}, 0);


// resolved value propagation
Promise.resolve(1)
    .then(() => 2)
    .then(3) // ignored bcoz not a function
    .then((value) => value * 3)
    .then(Promise.resolve(4))  // not returned
    .then(console.log);


// example - check the output after commenting the above codes
Promise.resolve(1)
    .then(val => {
        console.log(val);
        return val + 1;
    })
    .then(val => {
        console.log(val);
    })
    .then(val => {
        console.log(val);
        return Promise.resolve(3)
            .then(val => {
                console.log(val);
            })
    })
    .then(val => {
        console.log(val);
        return Promise.reject(4);
    })
    .catch(val => {
        console.log(val);
        return "javascript"
    })
    .finally(val => {  // finally() doesn't takes argument
        console.log(val);
        return 10;
    })
    .then(val => {
        console.log(val);
    })

// Note: The .then() after .finally() recieves the previous resolved or rejected value, not the one returned from .finally()