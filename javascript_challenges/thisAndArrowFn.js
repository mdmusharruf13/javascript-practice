// example 1
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