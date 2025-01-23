/**
 * Debouncing:
 * If we click on the button many times, there are going to be chances of inresponsive(freezed) UI and there will be too many request API calls.
 * 
 * Debouncing is a programming practice that we use to ensure that certain task don't fire too often.
 * A Debounce function is a higher-order function that returns another function, to create closure around the function parameters(func, timeout) and the timer variable.
 * 
 * How does debouncing works?
 * So if we click on the button many times, we will not execute the action that the button is firing untill we stop clicking on it, and the delay we set has passed.
 * When delay passes, we execute the action. Here is how we can write that in JS.
 */

function debounce(callback, delay) {
    let timerId;

    return () => {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            callback();
        }, delay);
    }
}

const btn = document.getElementById("btn-submit");

btn.addEventListener(
    "click",
    debounce(() => {
        console.count("Submitted...");
    }, 1000)
);