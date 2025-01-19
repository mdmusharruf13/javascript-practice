var count = 0;

function demo() {
    function test() {
        if (count === 0) {
            let count = 1;
            console.log(count);
        }
        console.log(count);
    }

    test()
}

demo();


function createBase(num1) {
    return function (num2) {
        console.log(num1 + num2);
    }
}

const addSix = createBase(6);
addSix(10);
addSix(15);

// not optimised
function find(index) {
    let arr = [];
    for (let i = 0; i < 1000000; i++) {
        arr[i] = i * i;
    }

    return arr[index];
}

console.time('6');
console.log(find(6));
console.timeEnd('6');

console.time('12');
console.log(find(2));
console.timeEnd('12');

// optimising the above example
function calculate() {
    let arr = [];
    for (let i = 0; i < 1000000; i++) {
        arr[i] = i * i;
    }

    return function (index) {
        console.log(arr[index]);
    }
}

console.time('calculate');
const closure = calculate();
console.timeEnd('calculate');

console.time('10');
closure(10);
console.timeEnd('10');

console.time('50');
closure(50);
console.timeEnd('50')