Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + " cannot be bound as it's not callable");
    }

    context.fn = this;
    return function (...params) {
        context.fn(...args, ...params);
    }
}

function getDetails(name, age, roll, ...args) {
    console.log(`${name} is ${age}years old`);
    console.log(`${roll} got ${this.percentage}%`);
}

const std1 = {
    percentage: 85
};

const details = getDetails.myBind(std1);
details("mush", 30, 598);