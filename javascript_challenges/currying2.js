/**
 * Currying is a function which takes one argument and return a function which expect another argument.
 */

// currying - sum(6)(5)(2)
function sum(n1) {
    return function (n2) {
        return function (n3) {
            console.log(n1 + n2 + n3);
        }
    }
}

const func1 = sum(6);
const func2 = func1(2);
func2(1);

sum(4)(5)(1);
