const user = {
    name: "musharruf",
    age: 20,
    updateName: name => {
        this.name = name;
        console.log(this.name);
    }
}

user.updateName("mush");
console.log(user.name);
console.log(this.name);
console.log(this);

