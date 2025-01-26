const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
    this.logData = function () {
        console.log(this.species + " : " + this.name);
    }
    this.logData();
}

for (let obj of animals) {
    printAnimals.call(obj);
}

// concatenating array using apply()
const arr = ['a', 'b'];
const elements = [0, 1, 2, 3];

arr.push.apply(arr, elements);

console.log(arr);


// find min/max number in an array using apply()
const nums = [5, 6, 2, 3, 7];
console.log(Math.max(5, 9));
console.log(Math.max(2, 3, 4, 1));
console.log(Math.max(...nums));
console.log(Math.max(nums)); // NaN

console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));


// bound function
function fn() {
    console.log(this);
}

let user = {
    method: fn.bind(null)
}

user.method();


// bind chaining
function logName() {
    console.log(this.name);
}

func = fn.bind({ name: "mush" }).bind({ name: "musharruf" });
func();


// bind a callback function
function checkPswd(success, failure) {
    const pswd = prompt("enter password");
    if (pswd == "321") success();
    else failure();
}

const user1 = {
    name: "musharruf",
    loginSuccessful() {
        console.log(`${this.name} has logged in`);
    },
    loginFailure() {
        console.log(`${this.name} enter correct password`);
    }
}

checkPswd(user1.loginSuccessful, user1.loginFailure);

checkPswd(user1.loginSuccessful.bind(user1), user1.loginFailure.bind(user1));

checkPswd(() => { user1.loginSuccessful() }, () => { user1.loginFailure() });


const user2 = {
    name: "mush",
    login(check) {
        console.log(check ? `${this.name} logged in` : `${this.name} enter correct password`);
    }
}


checkPswd(user2.login.bind(user2, true), user2.login.bind(user2, false));