// IIFE - Immediately-Invoked Function Expression

// Variations:

// with anonymous arrow function inside:
(() => {
    // do something
})();


// with the function keyword
(function () {
    // do something
})();


// with a function name (allows for recursion):
(function myIIFE() {
    num++;
    console.log(num);
    return num !== 5 ? myIIFE(num) : console.log("finished");
})(num = 0);


// Reason to use
// Reason 1) Does not pollute the global object namespace

// global
const x = "whatever";

const helloWorld = () => "hello world!!";

// isolate declarations within the function
(() => {
    const x = "iife whatever";
    const helloWorld = () => "helloworld";
    console.log(x);
    console.log(helloWorld());
})();

console.log(x);
console.log(helloWorld());


// Reason 2) Private variables and methods from closure

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`i have ${counter} credits`);
    return () => {
        counter++;
        credits(counter);
    };
})();

increment();
increment();


// Reason 3) The module pattern

const Score = (() => {
    let count = 0;

    return {
        current: () => count,
        increment: () => count++,
        reset: () => count = 0
    }
})();

Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.reset();
console.log(Score.current());


// injecting a namespace object
// note: run it on browser not on any code editor

((namespace) => {
    namespace.count = 0;
    namespace.current = function () { return `App count is ${this.count}` };
    namespace.increment = function () { this.count++ };
    namespace.reset = function () { this.count = 0 };
})(window.App = window.App || {});

App.increment();
console.log(App.current());

