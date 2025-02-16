const arr = [1, 2, 3];

arr[4] = 10;

console.log(arr);

const [a, b] = [10, "hii"];

console.log(a, b);

const [, , , num] = [10, 20, 30, 40, 50];
console.log(num);

const [n1, n2] = [10, 20, 30, 50, 100];
console.log(n1);
console.log(n2);

const { 3: n } = [11, 12, 13, 45, 55];
console.log(n);

let arr1 = [2, 6, 8, 9, 1, 2, 5];
console.log(arr1.sort((a, b) => a - b));


// duplicating array elements
// find issue in the code below
function duplicate(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr.push(arr[i]);
    }
    return arr;
}

let array = [1, 2, 3];
const newArr = duplicate(array);
console.log(newArr);

let arr2 = [1, 2, 3];
arr2[10] = 99;
console.log(arr2.length);