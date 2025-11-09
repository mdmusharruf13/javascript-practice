
const promises = [
    new Promise((resolve, reject) => setTimeout(() => resolve("one"),))
];

Promise.all(promises).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});