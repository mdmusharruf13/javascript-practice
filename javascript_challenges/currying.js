function calculate(n1) {
    return (n2) => {
        if (!n2) return n1;
        return calculate(n1 * n2);
    }
}

const multiply = calculate(5)(2)(2)(2)();

console.log(multiply);
