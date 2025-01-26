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