const obj = {
    a: "one",
    b: "two",
    a: "three",
};

console.log(obj);

const a = {};
const b = { key: "b" };
const c = { key: "c" };

console.log(a[b]);


console.log([..."javascript"]);


delete obj.a;
delete obj.b;

console.log(obj);

const setting = {
    username: "musharruf",
    level: 19,
    health: 99
};

const data = JSON.stringify(setting, ["health", "level"]);
console.log(data);
console.log(JSON.parse(data));


const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => {
        console.log(this.radius);
        return 2 * Math.PI * this.radius;
    }
}

console.log(shape.diameter());
console.log(shape.perimeter());