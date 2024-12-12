// https://codedamn.com/problem/QdWynxRGXeSbWmrmlhD_e?previous=%2Fproblem-list%2Fjavascript-logic-building%3Fpage%3D1
function moveZeroes(nums) {
    if (nums.length > 1) {
        let zeroIdx = 0,
            numIdx = 0;
        console.log(nums.length)
        while (numIdx < nums.length) {
            console.log(`numIdx: ${nums[numIdx]} zeroIdx: ${nums[zeroIdx]}`);
            if (nums[zeroIdx] !== 0 && nums[numIdx] !== 0) {
                zeroIdx++;
            }
            else if (nums[numIdx] != 0) {
                nums[zeroIdx] = nums[numIdx]
                nums[numIdx] = 0
                zeroIdx++
            }
            numIdx++
            console.log(`numIdx: ${nums[numIdx]} zeroIdx: ${nums[zeroIdx]}`);
        }
    }
}

const nums = [0, 1, 0, 3, 12];
console.log(nums);
moveZeroes(nums);
console.log(nums)

const nums2 = [1, 0, 0, 4, 5];
console.log(nums2);
moveZeroes(nums2);
console.log(nums2);

const nums3 = [0];
console.log(nums3);
moveZeroes(nums3);
console.log(nums3);
