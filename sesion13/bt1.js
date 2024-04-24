"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
    getName() {
        return super.getName();
    }
}
const rectangle = new Rectangle("Rectangle", 5, 10);
console.log("Shape Name:", rectangle.getName());
console.log("Shape Size:");
rectangle.getSize();
