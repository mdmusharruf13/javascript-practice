const nums = [1, 10, 20, 40, 80]

nums.forEach(num => {
    console.log(num);
});

const set = new Set();

set.add(20);
set.add(40);
set.add(30);
set.add(40);

set.forEach((value) => {
    console.log(value)
});

const map = new Map();
map.set('a', 1);
map.set('b', 2);

// parameters order is (value, key, map)
map.forEach((value, key) => {
    console.log(`${key} : ${value}`);
});