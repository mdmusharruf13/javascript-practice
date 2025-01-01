/**
 * Promises
 * In Javascript, a Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * States: A Promise can be in one the three states:
 * -> Pending: The inital state, neither fulfilled nor rejected.
 * -> Fulfilled: The operation completed succesfully.
 * -> Rejectee: The operation failed.
 */

const proceed = true;

const promise = new Promise((resolve, reject) => {
    if (proceed) {
        resolve("proceed");
    }
    else {
        reject(new Error("cannot proceed"));
    }
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
