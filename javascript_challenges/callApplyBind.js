const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
    this.logData = function () {
        console.log(this.species + " : " + this.name);
    }
    this.logData();
}

for (let obj of animals) {
    printAnimals.call(obj);
}

// concatenating array using apply()
const arr = ['a', 'b'];
const elements = [0, 1, 2, 3];

arr.push.apply(arr, elements);

console.log(arr);


// find min/max number in an array using apply()
const nums = [5, 6, 2, 3, 7];
console.log(Math.max(5, 9));
console.log(Math.max(2, 3, 4, 1));
console.log(Math.max(...nums));
console.log(Math.max(nums)); // NaN

console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));