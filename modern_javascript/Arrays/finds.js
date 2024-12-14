const nums = [1, 10, 20, 40, , 50, 80];

const result = nums.find(num => num > 40);
console.log(result);

const map = new Map();
map.set("name", "mush");
map.set("age", 25);

const age = map.find(obj => {
    console.log(obj);
});