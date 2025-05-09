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


function todoFn(state) {
    return new Promise((callbackSuccess, callbackReject) => {
        if (state) {
            callbackSuccess("success");
        }
        else {
            callbackReject("reject");
        }
    });
}

let promiseResult = todoFn(true);

promiseResult
    .then((result) => {
        console.log(result);

        return todoFn(false);
    })
    .catch((err) => {
        console.error(err);

        return "Error caught";
    })
    .then((result) => {
        console.info(result);
    })
    .catch((error) => {
        console.error(error);
    })


// // // example 3
function work() {
    return new Promise((res, rej) => {
        res();
    });
}

work()
    .then(() => {
        console.info("success 1");
        throw new Error("new error");
    }, () => {
        console.error("error 0");
    })
    .then((res) => {
        console.info("success 2", res);
    })
    .then(() => {
        console.info("success 3");
    })
    .catch(() => {
        console.error("error 1");
    })
    .then(() => {
        console.info("success 4");
    })