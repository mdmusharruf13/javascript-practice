Array.prototype.myReduce = function (callback, initialValue) {
    let total = initialValue;
    for (let i = 0; i < this.length; i++) {
        total = total ? callback(total, this[i], i, this) : this[i];
    }
    return total;
}

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const result = arr.myReduce((total, curr) => total + curr);
console.log(result);


let newResult = arr.reduce((acc, curr) => acc + curr);
console.log(newResult)