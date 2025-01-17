const obj = {
    value: "object's value",
    regularMethod: function () {
        console.log("`this` inside object's method: ", this);

        const arrowFn = () => {
            console.log("`this` inside arrow function: ", this);

            const innerObj = {
                value: "inner object's value",
                arrowMethod: () => {
                    console.log("`this` inside object's arrow method: ", this);

                    const nestedArrowFn = () => {
                        console.log("`this` inside arrow function: ", this);
                    }
                    const nestedRegularFn = function () {
                        console.log("`this` inside nested regular function: ", this);
                    }

                    nestedArrowFn();
                    nestedRegularFn();
                }
            }

            innerObj.arrowMethod();
        }

        arrowFn();
    }
}

obj.regularMethod();