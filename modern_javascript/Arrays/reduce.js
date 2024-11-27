const nums = [1, 3, 5, 7, 9];

const sumOfArray = nums.reduce((total, current) => {
    console.log(total, current);
    return total + current;
}, 0);

console.log(sumOfArray);


function sumOfTwo(num1, num2) {
    return num1 + num2;
}

const sum = nums.reduce(sumOfTwo);
console.log(sum);

