// https://codedamn.com/problem/iXBIFTtNGFmL8LoDCoiyJ?previous=%2Fproblem-list%2Fjavascript-logic-building%3Fpage%3D1

const findPoisonedDuration = function (timeSeries, duration) {
    const set = new Set()
    for (let index = 0; index < timeSeries.length; index++) {
        let newDuration = duration
        let newTime = timeSeries[index]
        while (newDuration--) {
            set.add(newTime++)
        }
    }
    const iterator = set.values();
    const poisonedDuration = [];
    iterator.forEach(num => {
        poisonedDuration.push(num);
    });

    return set.size;
}


let timeSeries = [1, 4];
let duration = 2;

const result = findPoisonedDuration(timeSeries, duration);
console.log(result);