"use strict";
class Circle22 {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * this.radius * Math.PI;
    }
    calculatePerimeter() {
        return this.radius * 3.14;
    }
}
class Rectangle22 {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.height * this.width;
    }
    calculatePerimeter() {
        return (this.height + this.width) * 2;
    }
}
const check = new Rectangle22(5, 6);
console.log(check.calculateArea());
