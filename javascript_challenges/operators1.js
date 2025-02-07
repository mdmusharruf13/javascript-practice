console.log(1 < 2 < 3);  // 1 < 2 = true = 1,  1 < 3 = true

console.log(3 > 2 > 1);  // 3 > 2 = true = 1,  1 > 1 = true 

console.log(NaN == NaN);
console.log(NaN === NaN);


// Nullish Assignment Operator
let n1 = null;
n1 ??= 15;

let n2 = 10;
n2 ??= 20;

console.log(n1, n2);


// Bitwise AND Assignment Operator
let num = 5;
num &= 3;
console.log(num);


// Bitwise OR Assignment Operator
let a = 5;
a |= 3;
console.log(a);


// Double NOT Bitwise Operator
let decimal = 4.3;
let integer = ~~decimal;
console.log(integer);


// Logical OR Assignment Operator
let b = 1;
b ||= 12;
console.log(b);