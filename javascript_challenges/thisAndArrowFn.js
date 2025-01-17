// example 1
console.log("example 1:")
const obj1 = {
    value: "outer",
    arrowMethod: () => {
        console.log(`outer arrow function's this: `, this);

        const innerObj = {
            value: "inner",
            regularFn: function () {
                console.log(`Regular function's this: `, this);

                const arrowFn = () => {
                    console.log(`nested arrow function's this: `, this);
                }

                arrowFn();
            }
        }

        innerObj.regularFn();
    }
}

obj1.arrowMethod();


// example 2
console.log("example 2:")
const obj2 = {
    value: "outer value",
    arrowFn: () => {
        console.log("outer arrow function's this: ", this);

        function regularOuterFn() {
            console.log("regular outer function's this: ", this);

            function regularInnerFn() {
                console.log("regular inner function's this: ", this);
                const nestedArrowFn = () => {
                    console.log("nested arrow function's this: ", this);
                }

                nestedArrowFn();

            }

            regularInnerFn();
        }

        regularOuterFn();
    }
}

obj2.arrowFn();


// example 3
console.log("example 3:");
const obj3 = {
    value: "third object",
    arrowFn: () => {
        console.log("arrow function this: ", this);

        const innerArrowFn = () => {
            console.log("inner arrow function this: ", this);

            function regularFn() {
                console.log("regular function this: ", this);

                const nestedArrowFn = () => {
                    console.log("nested arrow function this: ", this);
                }

                nestedArrowFn();
            }

            regularFn();
        }

        innerArrowFn();
    }
}

obj3.arrowFn();