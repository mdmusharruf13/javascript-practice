/**
 * Promise.any()
 * This method takes an iterable of promises and return a promise that resolves as soon as any oen of the promises resolves. If all Promises reject, Promise.any() rejects with an AggregateError containing all the rejection reasons.
 */

/**
 * case 1: At least one Promise Resolves
 * If at least one promise resolves, Promise.any() resolves with the first resolved value.
 */
const promise1 = new Promise((resolve, reject) => setTimeout(() => reject("Rejected 1"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Resolved 2"), 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Rejected 3"), 1000));

Promise.any([promise1, promise2, promise3])
    .then(
        function onSuccess(result) {
            console.log(result);
        },
        function onReject(errorMsg) {
            console.error(errorMsg);
        }
    );


/**
 * case 2: All Promises Reject
 * If all promises reject, Promise.any() rejects with an AggregateError containing all rejection reasons.
 */

Promise.any([promise1, promise3])
    .then(value => {
        console.log(value);
    }, error => {
        console.error(error);
    });


/**
 * case 3: Non-Promise values
 * If the iterable contains non-promise values, they are treated as already resolved promises. The first resolved non-promise value is returned.
 */
const nonPromise = "Immediate value";

Promise.any([promise2, nonPromise])
    .then((result) => {
        console.log(result);
    }, (errorMsg) => {
        console.error(errorMsg);
    });