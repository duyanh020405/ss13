"use strict";
class Vehicle2 {
    constructor(speed) {
        this.speed = speed;
    }
    slowDown(item) {
        return this.speed -= item;
    }
    speedUp(item) {
        return this.speed += item;
    }
    stop() {
        return this.speed = 0;
    }
}
const chay = new Vehicle2(6);
console.log(chay.speedUp(6));
