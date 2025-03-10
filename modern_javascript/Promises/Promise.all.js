/**
 * Promise.all() is a method in JS that takes an array of promises and return a single Promise that resolves when all of the promises in the iterable arguments have resolved, or rejects with the reason of the first promise that reject. 
 */

// case 1: All Promises resolve
const promises = [
    Promise.resolve("one"),
    Promise.resolve("two"),
    Promise.resolve("three")
];

Promise.all(promises)
    .then(value => {
        console.log(value);
        console.log(typeof (value));
        console.log(Array.isArray(value));
    })
    .catch(error => {
        console.error(error);
    });


/**
 * case 2: One Promise Rejects
 * If any promise in the array rejects, Promise.all() immediately rejects with reason of the first rejected promise, and it doesn't wait for the remaining promises.
 */
const promises2 = [
    Promise.resolve("first"),
    Promise.reject("cannot resolve this promise", this),
    Promise.resolve("third"),
];

Promise.all(promises2)
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    });


/**
 * case 3: An Empty Array
 * If the array passed to Promise.all() is empty, it resolves immediately with an empty array because there's nothing to wait for.
 */
Promise.all([])
    .then(result => {
        console.log("promise with empty array");
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });


/**
 * case 4: Non-Promise values in the Array
 * If the array contains non-promise values, they are treated as resolved promises, and Promise.all() resolves with their values.
 */
const promise1 = Promise.resolve(10);
const promise2 = "second value";
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    });


/**
 * One or More Promises never settle
 * if any promise never resolves or rejects, Promise.all() will hang indefinitely and never resolve/reject.
 */

const neverSettledPromise = new Promise(() => { });
Promise.all([Promise.resolve("A"), neverSettledPromise])
    .then(value => { console.log(value) });


/**
 * Promies Resolves after delay
 * all promises are returned after that delay
 */

const delayPromise = new Promise((resolve) => {
    setTimeout(resolve, 5000, "Delayed");
});
Promise.all([Promise.resolve("A"), delayPromise])
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    });


/**
 * Promise Rejects after delay
 */
const delayedRejectedPromise = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "rejected promise");
});
Promise.all([Promise.resolve("A"), delayedRejectedPromise])
    .then(value => {
        console.log(value);
    }, val => {
        console.log(val, "- inside this()");
    })
    .catch(error => {
        console.log(error);
    });


/**
 * Non-Iterable passed to Promise.all()
 * if the argument is not iterable (eg: null, undefined or primitive), it throws a TypeError.
 */

try {
    Promise.all(null)
        .then((value) => {
            console.log(value);
        }, (err) => {
            console.error("not iterable are not accepted");
        })
        .catch(error => {
            console.log(error);
        })
} catch (error) {
    console.log(error);
}


/**
 * Iterable contains Promise-like Objects.
 * Promise-like objects(objects with a `then` method) are treated as promises.
 * resolve inside arguments is must -> (resolve) => {}.
 */
const promiseLikeObj = { then: (resolve) => resolve("promise-like") };
Promise.all([promiseLikeObj, Promise.resolve("real promise")])
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    });


/**
 * Duplicate Promises
 * if the iterable contains the same promise multiple times, the result will include repeated values.
 */
const promise = Promise.resolve("duplicate");
Promise.all([promise, promise])
    .then(console.log)