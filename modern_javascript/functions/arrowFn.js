// traditional function
function print(msg) {
    console.log(msg);
}

// Arrow function
const logMsg = (msg) => {
    console.log(msg);
}

print("javascript is awesome!")


const sumOfTwo = (num1, num2) => {
    return num1 + num2;
}

logMsg(sumOfTwo(2, 3));