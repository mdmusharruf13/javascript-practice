let x = 2;

const parentFn = () => {
    // local scope
    let myVal = 5;
    console.log(myVal, x);

    let childFn = () => {
        console.log(x += 2);
        console.log(myVal += 5);
    }
    return childFn;
}

const resultFn = parentFn();
resultFn();
resultFn();
console.log(x)


// closure with IIFE
const privateCounter = (() => {
    let count = 0;
    console.log("initial count value: ", count);
    return () => {
        count++;
        console.log("count: ", count);
    }
})();

privateCounter();
privateCounter();
privateCounter();

// with parameters

const credits = ((num) => {
    let credits = num;
    console.log(`initial credits value: `, num);

    return () => {
        credits -= 1;
        if (credits > 0)
            console.log("credits remaining: ", credits);
        else
            console.log("not enough credits");
    }
})(3);

credits();
credits();
credits();