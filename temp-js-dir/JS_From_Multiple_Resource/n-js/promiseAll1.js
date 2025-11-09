/*
to make parallel api
input: array of promises
output: array

promise.all([p1,p2,p3]);
            [3s,1s,2s]
after 3 sec get all there results

but p2 will wait for all of them to finish
*/

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("p1 success"), 3000);
    setTimeout(() => reject("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('p2 success'), 1000);
    setTimeout(() => reject('p2 success'), 1000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("p3 success"), 2000);
    setTimeout(() => reject('p3 success'), 1000);
});


Promise.all([p1, p2, p3])
    // Promise.all([p1, "one", p3])
    // Promise.all(["one", "two", "three"])
    // Promise.all([])
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.warn(error);
    });
