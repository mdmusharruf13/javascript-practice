/**
 * Primitive vs Structural
 * 
 * primitive:
 * 1.undefined
 * 2.Boolean
 * 3.Number
 * 4.String
 * 5.BigInt
 * 6.Symbol
 * 
 * Structural:
 * 1.Objects: (new) Objects, Array, Map, Set, WeakMap, Date
 * 2.Function
 */


// Value vs Reference
// primitive pass value:
let x = 2;
let y = x;
y++;
console.log(y);
console.log(x);

// Structural types use references:
let xArr = [2, 4, 9];
let yArr = xArr;
yArr.push(10);
console.log(yArr);
console.log(xArr);


// Mutable vs Immutable

// primitives are mutable
let myName = "mush";
myName[0] = "M";
console.log(myName);

// Reassignment is not the same as mutable
myName = "Musharruf";
console.log(myName);

// Structures constain mutable data
yArr[0] = 50;
console.log(xArr);
console.log(yArr);

// pure fn require you to avoid mutating the data.

// impure fn that mutates the data.
const addToScore = (arr, score) => {
    arr.push(score);
    return arr;
}

const scoreArr = [44, 50, 51];
console.log(addToScore(scoreArr, 14));


// shallow copy
const zArr = [...yArr, 10]
console.log(zArr);
console.log(yArr);

const myArr = Object.assign([], zArr);
console.log(myArr);
myArr.push(100);
console.log(myArr);
console.log(zArr);


// but if there are nested arrays of objects...
yArr.push([8, 9, 10]);
const vArr = [...yArr];
console.log(vArr);
vArr[4].push(5);
console.log(vArr);
console.log(yArr);
// nested structural data types still share a reference! 
// Note: Array.from() and slice() create shallow copies too.

// when it comes to objects...

const scoreObj = {
    "first": 44,
    "second": 12,
    "third": { "a": 1, "b": 2 },
};
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj)
// Object.freeze() is a shallow freeze



// Deep copy is needed to avoid this
// several libs like lodash, ramda, and others have this feature built-in.

// here is a one line vanilla Js solution
// but it does not work with Dates, functions, undefined, Infinity, RegExps,
// Map, Sets, Blobs, FileLists, ImageDatas, and other complex data types

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));

console.log(newScoreObj === scoreObj);


// deepclone using vanilla JS, instead of using libs
const deepClone = (obj) => {

    if (typeof obj !== "object" || obj === null) return obj;

    // create new array or object to hold the values
    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];
        // recursive call for nested object & arrays
        newObj[key] = deepClone(value);
    }

    return newObj;
}

const newScoreArr = deepClone(scoreArr);
console.log(newScoreArr);
console.log(newScoreArr === scoreArr);

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
console.log(myScoreObj === scoreObj);