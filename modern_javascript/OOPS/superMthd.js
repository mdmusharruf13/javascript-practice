class Bike {
    constructor(speed, gear) {
        this.speed = speed;
        this.gear = gear;
    }

    getCurrentSpeed() {
        return `Bike is running at ${this.speed}kmph`;
    }
}

class SuperBike extends Bike {
    constructor() {
        super();
    }
    getMaxSpeed() {
        return `SuperBike max speed is ${this.speed}kmph.`;
    }
}

const myBike = new SuperBike(110, 6);
console.log(myBike.getCurrentSpeed());
console.log(myBike.getMaxSpeed());


/** 
 * Note: 
 * In JavaScript, when a subclass is created using the extends keyword, the parent class's constructor must be invoked explicitly using super() if the sub class has a constructor. Failing to do so will result in an error, as the this keyword cannot be used before calling super().
 * If the subclass has an empty constructor, calling super() is still required to properly initialize the object.
 * If the parent constructor expects parameters, you must pass them through super().
 * The this keyword cannot be used in a subclass constructor untill super() is called.
 */