const obj = {
    a: 10,
    x: function () {
        console.log(this);
    },
    y: () => {
        console.log(this);
    },
    z: {
        age: 100,
        getContext: () => {
            console.log("context", this);
        }
    }
}

this.name = "this";
obj.x();
obj.y();
obj.z.getContext();