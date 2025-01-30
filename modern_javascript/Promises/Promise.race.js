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