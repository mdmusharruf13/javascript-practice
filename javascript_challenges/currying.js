// infinite currying
function calculate(n1) {
    return (n2) => {
        if (!n2) return n1;
        return calculate(n1 * n2);
    }
}

const multiply = calculate(5)(2)(2)(2)();

console.log(multiply);


// convert f(a,b,c,d) => f(a)(b)(c)(d)
function curry(func) {
    return function curriedFun(...args) {
        if (args.length >= func.length) {
            return func(...args);
        }
        else {
            return function (...next) {
                return curriedFun(...args, ...next);
            }
        }
    }
}

const sum = (a, b, c, d) => a + b + c + d;

const curryFn = curry(sum);

console.log(curryFn(1)(2)(2)(10));