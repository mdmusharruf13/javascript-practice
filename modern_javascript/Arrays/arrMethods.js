const name = "musharruf";

const letters = name.split("");
console.log(letters);

letters.push(".");
console.log(letters);

const chatAtLast = name.at(-1);
console.log(chatAtLast);

const reverseName = "java".split("").reverse().join("");
console.log(reverseName);

const lastLetters = "nawaz".split("");
// also accepts negative indexing
const newName = letters.splice(-1, 1, ...lastLetters);
console.log(letters);

// destructuring
const values = [10, 20, 30];
const [m1, m2, m3] = values;
console.log(m1);
console.log(m2);
console.log(m3);

for (let index = 0; index < values.length; index++) {
    console.log(values[index]);
}