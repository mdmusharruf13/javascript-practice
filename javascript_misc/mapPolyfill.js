Array.prototype.myMap = function (callback) {
    let result = [];

    for (let index = 0; index < this.length; index++) {
        let returnValue = callback(this[index], index, this);
        result.push(returnValue);
    }

    return result;
}

const arr = [1, 2, 3, 4, 5];

const incArr = arr.myMap(num => num * 10);
console.log(incArr);

const newArr = arr.myMap(num => num + 1);
console.log(newArr);
