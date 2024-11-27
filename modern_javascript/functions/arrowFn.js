// traditional function
function print(msg) {
    console.log(msg);
}

// Arrow function
const logMsg = (msg) => {
    console.log(msg);
}

print("javascript is awesome!")


const sumOfTwo = (num1, num2) => {
    return num1 + num2;
}

logMsg(sumOfTwo(2, 3));



/**
 * In regular functions the 'this' keyword represents the object that called the function, which could be the window, the document, a button or whatever.
 * with arrow function the 'this' keyword always represents the object that defined the arrow function
 */

const fn1 = () => {
    name = "musharruf";
    age = 45;
    console.log(this.name);
}

fn1();

