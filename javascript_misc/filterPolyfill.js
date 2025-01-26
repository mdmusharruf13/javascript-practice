Array.prototype.myFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        let isTrue = callback(this[i], i, this);
        isTrue ? result.push(this[i]) : null;
    }

    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.myFilter(num => num % 2 !== 0);
console.log(newArr);

const evenNums = arr.myFilter(num => num % 2 == 0);
console.log(evenNums);