function test() {
    let a = "hello";

    if (true) {
        let a = "hi"; // shadowing the outer `a` variable
        console.log(a);
    }

    console.log(a)
}

// test();

/**
 * Note: 
 * while shadowing a variable it should not cross the boundary of scope.
 * we can shadow var using let but not opposite.
 * if we shadow let variable by var variable it is known as illegal shadowing.
 * if we do so it throws error that variable is already defined.
 */

// illegal shadowing
function check() {
    var a = "hello";
    let b = "hi";

    if (true) {
        let a = "Hello...";
        var b = "Hi...";  // throws error
        console.log(a);
        console.log(b);
    }
    console.log(this);
}

check();