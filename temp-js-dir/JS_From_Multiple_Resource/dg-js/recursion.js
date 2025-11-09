// official definition
// in computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instance of the same problem.

// unofficial definition
// any situation where you do something, and depending on the results, you might do it again.

// In programming, recursion occurs when a function calls itself.

const recurToTen = (num = 1) => {
    if (num > 10) return;
    console.log(num);
    recurToTen(num += 1);
}

recurToTen();


// With Great Power Comes Great Responsibility
// reason to use recursion : 
/**
 * 1. Less Code
 * 2. Elegant Code
 * 3. Increased Responsibility
 */

// Reason to NOT use recursion:
/**
 * 1. Performance
 * 2. Possibly more difficult to debug
 * 3. Is the readability improved ?
 */

// fibonacci sequence without recursion
const fibonacci = (num, arr = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = arr.slice(-2);
        arr.push(nextToLast + last);
        num--;
    }
    return arr;
}

const fibArr = fibonacci(12);
console.log(fibArr);


const fibPos = (pos) => {
    if (pos <= 1) return pos;
    const seq = [0, 1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
}

console.log(fibPos(8));


// with recursion
const fibPosition = (pos) => {
    if (pos < 2) return pos;
    return fibPosition(pos - 1) + fibPosition(pos - 2);
}
console.log(fibPosition(8));
