function dummy() {
    console.log("function executed");
}

const value = new dummy();
console.log(value);


function Student(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
}

const std = new Student("mush", 598);

Student.prototype.getName = function () {
    return `My name is ${this.name}`
}

console.log(std.getName());

const std2 = new Student("nawaz", 98);

console.log(std2.getName());