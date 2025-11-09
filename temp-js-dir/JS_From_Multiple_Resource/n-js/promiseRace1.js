const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("p1 success"), 3000);
    setTimeout(() => reject("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('p2 success'), 1000);
    setTimeout(() => reject('p2 error'), 1000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("p3 success"), 2000);
    setTimeout(() => reject('p3 success'), 1000);
});


Promise.race([p1, p2, p3])
    // Promise.race([p1, "one", p3])
    // Promise.race(["one", "two", "three"])
    // Promise.race([])
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.warn(error);
    });
