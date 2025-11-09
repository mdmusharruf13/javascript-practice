// normal function
function printDate() {
    let date = new Date();
    console.log(date);
}
printDate();


// Arrow functions
// multi line arrow function
const printDay = () => {
    let date = new Date();
    let day = date.getDay();
    console.log(day);
}
printDay();

// slingle line arrow function
const printYear = () => console.log(new Date().getDate());
printYear();

const add = (a,b) => a+b;
add(2,3);


/**
 * In regular functions the 'this' keyword represents the object that called the function, which could be the window, the document, a button or whatever.
 * with arrow function the 'this' keyword always represents the object that defined the arrow function
 */

const fn1 = () => {
    name = "musharruf";
    age = 45;
    console.log(this.name);
}

fn1();

const fn2 = () => {
    name = "md musharruf";
    age = 50;
    const fn = () => {
        console.log(this.name+", "+this.age);
    }
    fn()
}

fn2();