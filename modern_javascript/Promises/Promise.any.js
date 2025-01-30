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


/**
 * case 4: One Promise already resolved
 * If one of the promise is already resolved, Promise.any() resolves immediately with its value.
 */
const resolvedPromise = Promise.resolve("Already resolved");

Promise.any([promise2, resolvedPromise])
    .then(result => {
        console.log(result);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 5: One Promise already rejected
 * If one of the promises is already rejected but the others resolve, Promise.any() resolves with the first resolved value.
 */

const rejectedPromise = Promise.reject("Already rejected");

Promise.any([rejectedPromise, promise2])
    .then(result => {
        console.log(result);
    })
    .catch(errorMsg => {
        console.error(errorMsg);
    });


/**
 * case 6: Empty Array
 * If Promise.any() is passed an empty array, it immediately rejects with an AggreagteError.
 */
Promise.any([])
    .then(() => { }, (error) => {
        console.log(error instanceof AggregateError);
        console.log(error.errors);
    });