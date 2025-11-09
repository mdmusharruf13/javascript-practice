// // one way is using bind()

// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyBy2 = multiply.bind(this, 2);
// multiplyBy2(3);

// let multiplyBy3 = multiply.bind(this, 3);
// multiplyBy3(5);



// alternative way (closure)

let add = function (x) {
    return function (y) {
        console.log(x + y);
    }
}

let addition = add(2);
addition(5);