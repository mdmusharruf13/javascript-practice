/**
 * Promise.allSettled()
 * This method takes an array of promises and return a single promise that resolves when all of the promises in the array settle (i.e., either resolve or reject). It does not reject when one or more promises fail but instead it provides the outcome (status and value/reason) of each promise in an array.
 */

/**
 * case 1: All Promises Resolve
 * If all promises resolve, Promise.allSettled() returns an array with their status as 'fulfilled' and their resolved value.
 */

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.allSettled([promise1, promise2, promise3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


/**
 * case 2: All Promises reject
 * If all promises reject, Promise.allSettled() returns an array with their status as "rejected" and their rejection reason.
 */
const promises = [
    Promise.reject("Error in promise1"),
    Promise.reject("Error in promise2")
];

Promise.allSettled(promises)
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    });