// function declaration

function print(params) {
    console.log(params);
}

// function expression - anonymous
const print2 = function (params) {
    console.log(params);
}

// function expression - named
const print3 = function logs(params) {
    console.log(params);
}

print("printing starts...");
print2("first print");
print3("second print");


// closure
function getCount() {
    let count = 0;

    return () => {
        count++;
        console.log(count);
    }
}
const printCount = getCount();
printCount();
printCount();


// function hoisting
myFn();
function myFn() {
    console.log("function hoisting");
}
myFn();


// passing function
function greet() {
    console.log("hi...");
}

function greeting(greetFn, name) {
    greetFn();
    console.log(name);
}

greeting(greet, "musharruf");


// Implicit return
const square = num => num * num;

console.log(square(4));


// Default parameters
function greet2(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet2();
greet2("Musharruf");
