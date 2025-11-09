const std1 = {
    fname: "musharruf",
    lname: "nawaz",
}

let printDetails = function (city, state, country) {
    console.log(this.fname, this.lname + " from " + city + " " + state, country);
}

let myPrintMethod = printDetails.bind(std1, "hyderabad", "telangaga");
myPrintMethod("india");

Function.prototype.myBind = function (...args) {
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let print = printDetails.myBind(std1, "hyderabad", "telangana");
print("india");