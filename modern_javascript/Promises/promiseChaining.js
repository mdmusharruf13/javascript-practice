/**
 * Promise Chaining
 * -> for promise chaining you have to use multiple `then`.
 * -> you can either write `return` or not use curly brackets for direct return. 
 * 
 * */

const myPromise = new Promise((resolve, reject) => {
    resolve("A");
})

myPromise
    .then(result => {
        return result + "B";
    })
    .then(result => result + "C")
    .then(finalResult => {
        console.log(finalResult);
    })
    .catch(error => {
        console.log(error);
    })

// chained computation
new Promise((resolve, reject) => {
    resolve(2);
})
    .then((num) => {
        console.log(`step 1: ${num}`);
        return num * 2;
    })
    .then((result) => {
        console.log(`step 2: ${result}`);
        return result + 3;
    })
    .then(finalResult => {
        console.log(`step 3: ${finalResult}`);
    })
    .catch(error => console.log(error));