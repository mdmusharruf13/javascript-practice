const demoFn = () => {
    name = "md musharruf";
    age = 50;
    const func1 = () => {
        console.log(this.name + ", " + this.age);
        const nestedFunc = () => {
            console.log(this.age, " not available");
        }
        nestedFunc()
    }
    function func2() {
        console.log(this.name + ", " + this.age);
    }
    func1()
    func2()
    console.log(this)
}

demoFn();

function callFn() {
    lang = "javascript";
    age = 25;
    const func1 = () => {
        console.log(this.lang, "is language");
    }
    function func2() {
        console.log(this.age, "years old");
    }
    func1();
    func2();
    console.log(this);
}
callFn();

/**
 * Arrow function don't have their own 'this' they borrow it from their parent.
 * Normal function 'this' points to the object where the function is called.
 * if you want to have arrow function their own 'this', then assign variables using this.variable = value.
 */
