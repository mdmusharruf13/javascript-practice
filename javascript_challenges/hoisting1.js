sayOtherName();
console.log(sayName);
// sayName();  // throw's error

var sayName = () => {
    console.log('javascript');
}

function sayOtherName() {
    console.log(`typescript`);
}