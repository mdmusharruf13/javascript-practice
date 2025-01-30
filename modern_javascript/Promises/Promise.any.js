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