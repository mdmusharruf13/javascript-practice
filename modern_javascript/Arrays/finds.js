const nums = [1, 10, 20, 40, , 50, 80];

const result = nums.find(num => num > 40);
console.log(result);

const map = new Map();
map.set("name", "mush");
map.set("age", 25);

console.log(map);

const mapResult = Array.from(map);
console.log(mapResult);

const res = mapResult.find(arr => arr[1] == 25);
console.log(res);


const obj = [
    { name: 'mush', age: 20 },
    { name: 'nawaz', age: 50 },
    { name: 'habibi', age: 70 }
];

const objResult = obj.find((singleObj) => singleObj.age > 50);
console.log(objResult);