function PromisePolyfill(executor) {
    let onResolve,
        onReject,
        isFulfilled = false,
        isRejected = false,
        isCalled = false,
        value;

    function resolve(param) {
        isFulfilled = true;
        value = param;

        if (typeof onResolve === "function") {
            onResolve(value);
            isCalled = true;
        }
    }

    function reject(param) {
        isRejected = true;
        value = param;

        if (typeof onReject === "function") {
            onReject(param);
            isCalled = true;
        }
    }

    this.then = function (callback) {
        onResolve = callback;

        if (isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this;
    }
    this.catch = function (callback) {
        onReject = callback;

        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}


const myPromise = new PromisePolyfill((resolve, reject) => {
    resolve(15);
    // setTimeout(() => {
    //     resolve(15);
    // }, 1000);

    // reject("error");
    // setTimeout(() => {
    //     reject("error");
    // }, 1000);
})

myPromise
    .then((res) => {
        console.info(res);
    })
    .catch((err) => console.error(err));