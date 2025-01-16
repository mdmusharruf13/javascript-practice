function dummy() {
    console.log("function executed");
}

const value = new dummy();
console.log(value);


function Student(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
}

const std1 = new Student("mush", 598);

Student.prototype.getName = function () {
    return `My name is ${this.name}`
}

console.log(std1.getName());

const std2 = new Student("nawaz", 98);

console.log(std2.getName());

// similar mimic
function createObj(name, age) {
    const obj = { name, age };
    return obj;
}

const obj1 = createObj("superman", 45);
console.log(obj1);
console.log(std1);

function getDetails() {
    return `${this.name} is ${this.age} years old.`;
}

console.log(getDetails.call(obj1));