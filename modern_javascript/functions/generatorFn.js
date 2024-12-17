// A generator function is a special type of function that can pause its execution at any point and resume later. They are defined using the function* syntax and use the 'yield' keyword to pause the execution and retuan a value.

function* generatorFunction() {
    yield "Hello";
    yield "i'm";
    yield "generator function";
    yield "done";
}

const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next());


// example: custom iterators

function* fibonacci(limit) {
    let [prev, current] = [0, 1];

    while (limit--) {
        yield current;
        [prev, current] = [current, prev + current];
    }
}

const fib = fibonacci(5);
console.log([...fib]);