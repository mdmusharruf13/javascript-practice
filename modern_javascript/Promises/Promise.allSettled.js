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


/**
 * case 3: Mixed Resolved and Rejected Promises
 * when some promises resolve and other reject, Promise.allSettled() provides the outcome of all promises, regardless of their status.
 */
let promiseArr = [
    Promise.resolve("Resolved Promise1"),
    Promise.reject("Error in Promise2"),
    Promise.resolve("Resolved Promise3")
]
Promise.allSettled(promiseArr)
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 4: Empty Array
 * If an empty array is passed to Promise.allSettled(), it resolves immediately with an empty array since there are no promises to wait for.
 */
Promise.allSettled([])
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 5: Non-Promise value
 * If the array contains non-promise values, Promise.allSettled() treats them as resolved promises with the value.
 */
const nonPromise = "This is not a promise";
Promise.allSettled([promise1, nonPromise])
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 6: Mixed Resolved, Rejected and delayed Promises
 * If some promises resolve or reject after a delay, Promise.allSettled() waits for all promises to settle before resolving.
 */
const p1 = new Promise((resolve) => setTimeout(() => resolve("fast"), 100));
const p2 = new Promise((resolve) => setTimeout(() => resolve("slow"), 300));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Rejected Promise"), 300));

Promise.allSettled([p1, p2, p3])
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });