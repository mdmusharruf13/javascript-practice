// currying takes a function that recieves more than one parameter and breaks it into a series of unary (one parameter) function

// therefore, a curried function only takes one parameter at a time.

let makeSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const mySandwich = makeSandwich("bacon")("lettuce")("tomato");
console.log(mySandwich);

const sandwich1 = makeSandwich("break");
const sandwich2 = sandwich1("vegetables");
const sandwich3 = sandwich2("sauce");
console.log(sandwich3);


const curriedMultiply = x => y => x * y;
const timesTen = curriedMultiply(10);
console.log((timesTen(8)));