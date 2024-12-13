// substring(): start index is required, if end index not provided considered as last index
let language = "JavaScript";

console.log(language.substring(0, 4));
console.log(language.substring(4));


// at() - it will also accepts negitive indexing
for (let index = 0; index < 4; index++) {
    console.log(language.at(index));
}
for (let index = -1; index >= -6; index--) {
    console.log(language.at(index));
}


// length
console.log(language.length);


// replace and replaceAll
const newLang = language.replace("a", "A");
console.log(newLang);

const lang = language.replaceAll("a", "A");
console.log(lang);


// startsWith and endsWith
console.log(language.startsWith("java"));
console.log(language.startsWith("Java"));

console.log(language.endsWith("t"));
console.log(language.endsWith("s"));


// split
const charArray = language.split("");
console.log(charArray);

console.log(language.split("a"));


// includes
const isPresent = language.includes("va");
console.log(isPresent);

console.log(language.includes("scr"));
