// [] character access
const str = "javascript";

for (let index = 0; index < str.length; index++) {
    console.log(str[index]);
}

// Template strings
const greet = name => `hello, ${name}`;

console.log(greet("musharruf"));

// Concatenation
const firstName = "Musharruf";
const lastName = "Nawaz";
const fullName = firstName + lastName;

console.log(fullName);

// trim()
let name = "     Musharruf    ";

console.log("Before Trim:" + name + ".");
console.log("After Trim:" + name.trim() + ".");

// uppercase and lowercase
const myName = "MdMusharruf";

console.log(myName);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
