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


/**
 * evaluate("sum")(4)(2);
 * evaluate("multiply")(4)(2);
 * evaluate("divide")(4)(2);
 * evaluate("subtract")(4)(2);
 */

function evaluate(operator) {
    switch (operator) {
        case "sum": return function (n1) {
            return function (n2) {
                return n1 + n2;
            }
        }
        case "multiply": return function (n1) {
            return function (n2) {
                return n1 * n2;
            }
        }
        case "divide": return function (n1) {
            return function (n2) {
                return n1 / n2;
            }
        }
        case "subtract": return function (n1) {
            return function (n2) {
                return n1 - n2;
            }
        }
    }
};

console.log(evaluate("sum")(10)(3));
console.log(evaluate("multiply")(10)(3));
console.log(evaluate("divide")(10)(5));
console.log(evaluate("subtract")(10)(3));


// optimised code for above example
const calc = {
    sum: (a, b) => a + b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    subtract: (a, b) => a - b
}
function optimisedEvaluate(operator) {
    return function (n1) {
        return function (n2) {
            return calc[operator](n1, n2);
        }
    }
}

console.log(optimisedEvaluate("sum")(10)(3));
console.log(optimisedEvaluate("multiply")(10)(3));
console.log(optimisedEvaluate("divide")(10)(5));
console.log(optimisedEvaluate("subtract")(10)(3));

const multiply = optimisedEvaluate("multiply"); // reusuable

console.log(multiply(2)(3));
console.log(multiply(4)(5));
