console.log("start")

function stayBussy() {
    let seconds = new Date().getSeconds();
    const bussyTime = 2;
    let newSeconds;
    for (let i = 1; i < 9000; i++) {
        newSeconds = new Date().getSeconds();
        if (Math.abs(seconds - newSeconds) >= bussyTime) break;
        console.count(`${Math.abs(seconds - newSeconds)}: `);
        console.log(`${i}th iteration`)
    }
}

stayBussy();

console.log("end");