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
