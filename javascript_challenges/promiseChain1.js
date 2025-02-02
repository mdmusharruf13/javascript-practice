function job() {
    return new Promise((res, rej) => {
        rej();
    });
}

let promise = job();

promise
    .then(() => {
        console.info("success 1");
    })
    .then(() => {
        console.info("success 2");
    })
    .catch(() => {
        console.error("error 1");
    })
    .then(() => {
        console.info("success 3");
    })

// Note: Any `.then()` chained after a `.catch()` will always run if the `.catch() handles the error properly.