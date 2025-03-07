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

console.log(set);
for (let k of set) {
    console.log(k, "sss")
}

const map = new Map();
map.set('a', 1);
map.set('b', 2);

// parameters order is (value, key, map)
map.forEach((value, key) => {
    console.log(`${key} : ${value}`);
});

for (let key of map) {
    console.log(key);
}

console.log(map.entries())

console.log(map.values());
console.log(Array.from(map.values()));