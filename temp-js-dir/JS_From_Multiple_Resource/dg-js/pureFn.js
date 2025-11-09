/**
 * pure functions
 * 
 * A part of the functional programming paradigm
 * 
 * why to write pure function?
 * 1. clean code
 * 2. easy to test
 * 3. easy to debug
 * 4. decoupled and independent
 * 5. could be added to your utility functions
 * 
 * 
 * Rules for pure functions:
 * 1. the same input ALWAYS give the same output
 * 2. no side effects
 */


// rule-1
const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (fname, lname) => `${fname} ${lname}`;
console.log(fullName("musharruf", "nawaz"));


// we can replace the function with the output
// this is called "referential transparency"

// A pure function should have at least one parameter.
// Otherwise, it is the same as a constant because they
// can only work with their input.

const firstName = () => "musharruf";

const firstname = "musharruf";


// rule-2
// pure function cannot:
// Access a database, API, file system, storage, etc.
// Modify the DOM
// Or even log to the console

// That said, clearly "impure" functions are necessary
// but they are harder to test and debug

// Further, no input state can be modified
// That is, no data should be "mutated".
// Consider all input data to be immutable

// Impure Example 1:
let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);

// Impure Example 2:
const myArr = [2, 3, 4];
const addToArray = (array, item) => {
    array.push(item);
    return array;
}
console.log(addToArray(myArr, 5));
console.log(myArr);

// Refactored Example 1:
x = 1;
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(x));
console.log(x);

// Refactored Example 2:
const pureAddToArray = (array, element) => [...array, element];
console.log(pureAddToArray(myArr, 10));
console.log(myArr);


// Note: if you have a nested data structure, the above example 2's output will be same

// Also notice how pure functions always return someting.
// No return means you definitely do not have a pure function.


// These common higher order functions are pure function: map(), reduce(), filter()
// because they do not modify the original variable and return new value/s
