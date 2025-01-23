/**
 * What is Throttle?
 * Unlike debounce, the throttle is firing event between intervals, so when we click on a button for the first time it will execute the action and if we keep clicking on that button, it will not fire event untill time interval has passed and if you keep clicking it will fire every time interval it completes.
 */

function Throttle(callback, delay) {
    let lastTime = 0;

    return () => {
        let currTime = new Date();
        if (currTime - lastTime < delay) {
            return;
        }

        lastTime = currTime;
        return callback();
    }
}

document.getElementById("btn").addEventListener(
    "click",
    Throttle(() => {
        console.count("throttle...");
    }, 2000)
);