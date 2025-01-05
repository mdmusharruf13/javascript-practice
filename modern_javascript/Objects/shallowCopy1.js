const p1 = {
    name: "musharruf",
    address: {
        line1: "Hyderabad",
        line2: "Telangana"
    }
}

const p2 = { ...p1 };
p1.name = "nawaz";
p1.address.line1 = "Bangalore"

p2.address.line2 = "Karnatak"

console.log(p1);
console.log(p2)