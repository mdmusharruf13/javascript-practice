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