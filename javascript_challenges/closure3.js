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
