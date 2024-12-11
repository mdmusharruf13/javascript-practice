// IIFE - Immediately invoked function expression

// variations 

// with anonymous arrow function inside
(() => {
    // do something
})();

// with function keyword
(function myIIFE() {
    num++;
    console.log(num);
    return num < 5 ? myIIFE(num) : console.log("finished");
})(num = 0);

// reason to use 
// Reason 1. Does not pollute the global object namespace.

const x = "whatever";

const helloWorld = () => "helloworld!!";

// isolate declarations within the function

(() => {
    const x = "IIFE whatever";
    const helloWorld = () => "helloworld";
    console.log(x);
    console.log(helloWorld());
})();

console.log(x);
console.log(helloWorld());


// Reason 2. Private variables and methods from closure

const increment = (() => {
    let counter = 0;
    return () => {
        counter++;
        console.log(counter);
    }
})()

increment();
increment();
increment();


// Reason 3.Module pattern

const Score = (() => {
    let count = 0;

    return {
        current: () => count,
        increment: () => count++,
        decrement: () => count--
    }
})();

Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.decrement();
console.log(Score.current());
