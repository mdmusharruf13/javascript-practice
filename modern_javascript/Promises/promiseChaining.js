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