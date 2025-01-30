/**
 * Promise.race()
 * This method takes an iterable of promises and return a promise that resolves or rejects as soon as one of the promises in the array settles (i.e., either resolves or rejects), with its value or reason.
 */

/**
 * case 1: First Promise resolves fastest
 * When the fastest promise resolves, Promise.race() resolves with the value of that promise.
 */
let promise1 = new Promise((resolve) => setTimeout(() => resolve("Resolved first"), 100));
let promise2 = new Promise((resolve) => setTimeout(() => resolve("Resolved second"), 99));

Promise.race([promise1, promise2])
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 2: First Promise rejects fastest
 * When the first promise rejects, Promise.race() rejects with the reason of that promise.
 */
let rejectPromise1 = new Promise((resolve, reject) => setTimeout(() => reject("Rejected first"), 100));
let rejectPromise2 = new Promise((resolve,) => setTimeout(() => resolve("Resolved second"), 200));

Promise.race([rejectPromise1])
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 3: One Promise is already resolved
 * If one of the promises in the iterable is already resolved, Promise.race() resolves immediately with its value.
 */
let resolveP1 = Promise.resolve("Already resolved");

Promise.race([resolveP1, promise1])
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 4: One Promise is already rejected
 * If one of the promises in the iteable is already rejected, Promise.race() rejects immediately with its reason.
 */
const rejectP1 = Promise.reject("Already rejected");

Promise.race([rejectP1, rejectPromise1])
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 5: Mixed Promise
 * If the fastest promise resolves or rejects, Promise.race() takes that result.
 */

Promise.race([promise1, rejectPromise1])
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 6: Non-promise value
 * If the iterable contains non-promise values, they are treated as resolved promises. If a non-promise values is encountered before other promises settle, Promise.race() resolves immediately with that value. 
 */
const nonPromise = "non-promise value";

Promise.race([promise1, nonPromise])
    .then(value => {
        console.log(value);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 7: Empty Array
 * If Promise.race() is given an empty array, it returns a promise that never settles because there are no promises to race.
 */
Promise.race([])
    .then(value => console.log(value));


/**
 * case 8: Infinite Promise
 * If one promise never resolves or rejects, Promise.race() ignores it and resolves/rejects with next fastest settling promise.
 */
const p1 = new Promise(() => { });
const p2 = new Promise((resolve) => setTimeout(() => console.log("Fast resolve"), 100));

Promise.race([p1, p2])
    .then(result => {
        console.log(result);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });