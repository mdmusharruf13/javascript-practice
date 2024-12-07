const nums = [2, 4, 6, 7, 8, 9];

function isEven(num) {
    return num && 2 === 0;
}

const result = nums.some(isEven);
console.log(result)