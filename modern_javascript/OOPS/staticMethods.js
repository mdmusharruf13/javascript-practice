class MathUtils {
    // static method
    static add(n1, n2) {
        return n1 + n2;
    }

    static multiply(n1, n2) {
        return n1 * n2;
    }
}

// calling static methods directly on the class
console.log(MathUtils.add(10, 50));

console.log(MathUtils.multiply(9, 5));