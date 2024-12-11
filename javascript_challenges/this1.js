const obj = {
    a: 10,
    x: function () {
        console.log(this);
    }
}

this.name = "this";
obj.x();