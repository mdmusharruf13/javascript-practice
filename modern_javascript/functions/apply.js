var obj = { name: "musharruf" };

function sayHello(age) {
    console.log(`hello ${this.name}, my age is ${age}`);
}

sayHello(35);

sayHello.apply(obj, [30]);


var obj = { name: "mush" };

function getMarks(marks) {
    let totalMarks = marks.reduce((total, current) => {
        return total + current;
    });
    return `${this.name} scored ${totalMarks} marks`;
}

let result = getMarks([15, 18, 20, 16, 15], 2);
console.log(result);


const std1 = { name: "musharruf" };
let result2 = getMarks.apply(std1, [[16, 19, 13, 20, 20]]);
console.log(result2);