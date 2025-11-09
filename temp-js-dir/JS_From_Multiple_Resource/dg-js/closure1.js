let x = 2;

const parentFn = () => {
    // local socpe
    let myVal = 5;
    console.log(x);
    console.log(myVal);

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
    console.log(`initial value ${count}`);
    return () => {
        count += 1;
        console.log(count);
    }
})();

privateCounter();
privateCounter();


// with parameters

const credits = ((num) => {
    let credits = num;
    console.log(`initial credits value: ${credits}`);
    return () => {
        credits -= 1;
        if (credits > 0) console.log(`remaining credits: ${credits}`);
        else console.log(`not enough credits`);
    }
})(3);

credits();
credits();
credits();