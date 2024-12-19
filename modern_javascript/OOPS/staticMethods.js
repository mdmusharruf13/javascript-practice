/**
 * A static method in JavaScript is a method that belongs to the class itself, rather than to instance of the class. The methods are defined using the static keyword and are called on the class directly, not on a instance of the class.
 * cannot access instance variables or instance methods.
 * can access other static methods and static properties of the class.
 */

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


// static variables - 

class Counter {
    static count = 0;

    static increment() {
        this.count++;
        return this.count;
    }

    static decrement() {
        this.count--;
        return this.count--;
    }
}

console.log(Counter.decrement());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());