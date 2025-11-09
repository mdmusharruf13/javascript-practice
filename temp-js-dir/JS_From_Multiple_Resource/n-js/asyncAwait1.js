const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("first promise"), 4000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("first promise"), 2000);
})

async function handlePromise() {
    console.log("started fn");

    const val1 = await p1;
    console.log("below first promise");
    console.log(val1);

    const val2 = await p2;
    console.log("below second promise");
    console.log(val2);
}

handlePromise();
console.log("outside the handlePromise()")