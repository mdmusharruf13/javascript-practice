// Functional Programming
// Often uses pipe and compose = higher order fn

// A higher order fn is any fn which takes a fn as an argument, returns a fn, or both.

// here how compose fn works

// starts with small unary (1 param) fn;
const add2 = num => num + 2;
const subtract1 = num => num - 1;
const multiplyBy5 = num => num * 5;

// notice how the fn's execute from inside to outside & right to left
const result = multiplyBy5(subtract1(add2(4)));
console.log(result);

// the above is NOT a compose fn - let's make one

// Note: randa.js and lodash libs have their own built-in pipe and compose fn's.

// higher order fn "reduce" takes a list of values and applies a fn to each of those values, accumulating a single result.


// to get the compose order from right to left as we see with nested fn calls in our example above, we need reduceRight().
const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyBy5, subtract1, add2)(4);
console.log(compResult);


// to do the same but read from left to right...we use pipe
// it is the same except uses reduce instead of reduceRight.

const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);
console.log(pipe(add2, subtract1, multiplyBy5)(5))

// you will often see the fn's on seperate lines
const pipeResult2 = pipe(
    add2,
    subtract1,
    multiplyBy5
)(6);
console.log(pipeResult2);


// this is a "pointer free" style where you do not see the unary param passed b/w each fn.

// example with a 2nd parameter
const divideBy = (divisor, num) => num / divisor;

const pipeResult3 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    x => divideBy(2, x)
)(5);
console.log(pipeResult3);


// or you could curry the dividedBy fn for a custom unary fn:
const divBy = (divisor) => (num) => num / divisor;
const divideBy2 = divBy(2);

const pipeResult4 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    divideBy2
)(5);
console.log(pipeResult4);


// let look at some examples beyond math function

const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, in cumque molestiae eveniet hic perferendis aperiam incidunt eligendi cupiditate deleniti aut. Quae asperiores maxime omnis totam provident fugiat, minima ipsam quo eligendi molestias, voluptates quasi quisquam ipsum ipsa alias, velit ratione nisi quaerat. Dolore mollitia consectetur totam facilis iste officiis.";

const splitOnSpace = (str) => str.split(" ");
const count = (arr) => arr.length;

const wordCount = pipe(
    splitOnSpace,
    count,
);
console.log(wordCount(lorem))
// console.log(count(splitOnSpace(lorem)));
