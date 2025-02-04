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


const obj1 = {
    num: 45,
    arrowMethod: () => {
        console.log('Arrow function\'s this', this);

        function regularFn() {
            console.log('Regular function\'s this:', this);
        }

        regularFn();
    }
};

obj1.arrowMethod();


// `this` value inside method and regular function
var myObject = {
    name: "mush",
    func: function () {
        var self = this;
        console.log("outer func: this.name:", this.name);
        console.log("outer func: self.name:", self.name);
        (function () {
            console.log("inner func: this.name:", this.name);
            console.log("inner func: self.name:", self.name);
        })()
    }
}

myObject.func();