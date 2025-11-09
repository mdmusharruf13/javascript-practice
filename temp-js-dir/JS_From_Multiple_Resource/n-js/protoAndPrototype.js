let arr = [1, 2, 3];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

function printDetails() {
    console.log("inside printDetails");
}
console.log(printDetails.__proto__)
console.log(printDetails.__proto__.__proto__)
console.log(printDetails.__proto__.__proto__.__proto__)
