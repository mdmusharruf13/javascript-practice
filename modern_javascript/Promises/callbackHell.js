function firstAction(params, callbackFn) {
    console.info("first  work started");
    callbackFn(params);
}

function secondAction(params, callbackFn) {
    console.info("second work started");
    callbackFn(params);
}

function thirdAction(params, callbackFn) {
    console.info("third work started");
    callbackFn(params);
}

function fourthAction(params, callbackFn) {
    console.info("fourth work started");
    callbackFn(params);
}

function fifthAction(params, callbackFn) {
    console.info("fifth work started");
    callbackFn(params);
}

const work = firstAction("first Work completed", function (msg) {
    console.log(msg);
    secondAction("second work completed", function (msg) {
        console.log(msg);
        thirdAction("third work completed", function (msg) {
            console.log(msg);
            fourthAction("fourth work completed", function (msg) {
                console.log(msg);
                fifthAction("fifth work completed", function (msg) {
                    console.log(msg);
                });
            });
        });
    });
});