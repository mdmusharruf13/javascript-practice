Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + " is not callable");
    }

    context.fn = this;
    context.fn(...args);
}

function purchaseCar(currency, price) {
    console.log(`i purchased ${this.color} - ${this.car} car for ${currency}${price}`);
}

let car1 = {
    color: "red",
    car: "ferrari"
}

purchaseCar.myCall(car1, "$", 5000);