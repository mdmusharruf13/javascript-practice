function findSecondMax(nums) {
    let maxNumber = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNumber) {
            maxNumber = nums[i];
        }
    }
    return secondMax(nums, maxNumber);
}

function secondMax(array, maxNum) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max && array[i] < maxNum) {
            max = array[i];
        }
    }
    return max;
}


const arr = [5, 10, 3, 20, 99, 100];

console.log(findSecondMax(arr));