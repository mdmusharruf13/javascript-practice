const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 3000);
    // setTimeout(() => reject("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('p2 success'), 1000);
    setTimeout(() => reject('p2 rejected'), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 2000);
    // setTimeout(() => reject('p3 success'), 1000);
});


Promise.allSettled([p1, p2, p3])
    // Promise.allSettled([p1, "one", p3])
    // Promise.allSettled(["one", "two", "three"])
    // Promise.allSettled([])
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.warn(error);
    });
