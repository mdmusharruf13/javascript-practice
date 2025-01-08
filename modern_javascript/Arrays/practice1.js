// Arrays

let arr1 = [1, 2];
let arr2 = [3, 4];

console.log(arr1.concat(arr2));
console.log(arr1);
console.log(arr2);


let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
console.log(arr.copyWithin(1, 3));
console.log(arr);

let arr3 = ["a", "b", "c"];
for (let [index, value] of arr3.entries()) {
    console.log(index, value);
}

for (let key in arr) {
    console.log(arr[key]);
}

console.log(arr);
console.log(arr.fill(2, 3));
console.log(arr);

console.log(arr.find(n => n % 2 == 0));
console.log(arr.findIndex(n => n % 2 == 0));

let multiDim = [1, [2, [3, [4, 5, [6, 7, [8]]]]]];
console.log(multiDim);
console.log(multiDim.flat());
console.log(multiDim.flat(4));

console.log(arr1.flatMap(n => [n, n * 2]));
