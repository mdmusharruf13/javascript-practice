const nums = [2, 4, 6, 7, 8, -19];

function positive(num) {
    return num > 0 ? true : false;
}

const isPositiveArray = nums.every(positive);
console.log(isPositiveArray);