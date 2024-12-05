function add(a, b) {
    this.a = a;
    this.b = b;
    console.log(this.a + this.b);
}

add.prototype.assignA = function (a) {
    this.a = a;
    console.log(this.a + this.b);
}
add.prototype.assignB = (b) => {
    this.b = b;
    console.log(this.a + this.b);
}

const obj = new add(10, 10);
obj.assignA(20);
obj.assignB(30);