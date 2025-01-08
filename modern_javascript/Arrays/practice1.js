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

console.log(arr.includes(5));

let strs = "javascript is awesome";
console.log(strs.includes("ip"));
console.log(strs.indexOf('e'));

console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(2));

console.log(arr.join("|"));
console.log(arr)

for (let [key, value] of [arr3.keys(), arr3.values()]) {
    console.log(`arr3[${key}] = ${value}`);
}

console.log(arr3);
console.log(arr3.pop());
console.log(arr3.push("25"));
console.log(arr3);

console.log(arr3.unshift(33));
console.log(arr3);
console.log(arr3.shift());
console.log(arr3);

let newArr = [1, 2, 3, 4, 5];
console.log(newArr.reduce((sum, num) => sum + num, 10));

console.log(newArr.reduceRight((total, current, index) => {
    console.log(total, current, index);
    return total + current;
}));

console.log(['a', 'b', 'c', 'd'].reduce((str, curr) => str + curr));

console.log(newArr.reverse());
console.log(newArr);

console.log(["1", "2", "11"].sort());
console.log(["1", "2", "11"].sort((a, b) => a - b));