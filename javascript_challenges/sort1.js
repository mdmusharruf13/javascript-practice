const arr = [1, 2, 3, 4];

console.log(arr);

console.log(arr.sort((a, b) => b - a));

// sorts based on first character
const strArr = ['ac', 'b', 'z', 'ca', 'bm'];

console.log(strArr);

console.log(strArr.sort());

const mixedArr = [1, '6', 60, '45', 11, 9];

// sorting based on first character
console.log(mixedArr.sort());

// solution 
console.log(mixedArr.sort((n1, n2) => n1 - n2));

