const user = {
    name: "mush",
    age: 25,
    updateName: name => {
        this.name = name;
        console.log(this.name);
    }
}

this.age = 30;

user.updateName("musharruf");
console.log(user.name);
console.log(this.name);
console.log(this);

const person = {
    name: "nawaz",
    address: {
        homeNo: '127.0.0.1',
        area: "localhost",
        updateHomeNo: (num) => {
            this.homeNo = num;
            console.log(this.homeNo);
        },
        get getAddress() {
            return `${this.area} : ${this.homeNo} `
        }
    }
}

console.log("second object-----------------")
console.log(this);
console.log(person.address.getAddress);
person.address.updateHomeNo("127.0.0.2");
console.log(person.address.getAddress);

console.log("global: ", this)