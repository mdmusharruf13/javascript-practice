const data1 = {
    fname: "md",
    lname: "musharruf",
    printFullName: function () {
        console.log(this.fname, this.lname);
    },
};

// data1.printFullName();

const data2 = {
    fname: "musharruf",
    lname: "nawaz",
};

// data1.printFullName.call(data2);

// alternative and the correct way we generally write functions

const std1 = {
    name: "musharruf",
    rollNo: 98,
}
const std2 = {
    name: "nawaz",
    rollNo: 100,
}

let printDetails = function (city, state) {
    console.log(this.name + " rollno:" + this.rollNo + " from " + city + " " + state);
}

// call
printDetails.call(std1, "hyderabad", "telangana");

// apply
printDetails.apply(std2, ["mumbai", "maharashtra"]);

// bind
const returnedMthd = printDetails.bind(std1, "kolkata", "west bengal");

returnedMthd();