/**
 * Promise.all() is a method in JS that takes an array of promises and return a single Promise that resolves when all of the promises in the iterable arguments have resolved, or rejects with the reason of the first promise that reject. 
 */

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