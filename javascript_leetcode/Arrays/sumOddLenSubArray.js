const sumOddLengthSubArray = function (arr) {
    let sum = 0;
    for (let i = 1; i <= arr.length; i += 2) {
        for (let j = i; j <= arr.length; j++) {
            sum += arr.slice(j - i, j).reduce((sum, curr) => sum + curr);
        }
    }
    return sum;
}

console.log(sumOddLengthSubArray([1, 4, 2, 5, 3]));

console.log(sumOddLengthSubArray([1, 2]));

console.log(sumOddLengthSubArray([10, 11, 12]));