const nums = [2, 5, 9, 7, 10];
console.log(nums)

function incrementOne(num) {
    return num + 1;
}

const incrementNums = nums.map(incrementOne);

console.log(incrementNums);