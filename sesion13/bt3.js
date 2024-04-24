"use strict";
// Định nghĩa: Abstract method là một phương thức trong một abstract class 
// mà không có cơ thể (body) được cung cấp. Nó chỉ có khai báo phương thức mà các 
// lớp con cần phải triển khai.
// Sử dụng: Khi bạn muốn có một phương thức mà các lớp con phải triển khai theo 
// cách riêng của chúng.
// Ví dụ:
// typescript
// Copy code
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
console.log("Area of Circle:", circle.calculateArea());
const rectangle = new Rectangle(4, 6);
console.log("Area of Rectangle:", rectangle.calculateArea());
// Method:
// Định nghĩa: Method là một phương thức trong một class có cơ 
// thể (body) được cung cấp. Nó thực hiện một tác vụ cụ thể khi được gọi.
// Sử dụng: Khi bạn muốn thực hiện một tác vụ cụ thể hoặc tính toán mà 
// không cần các lớp con phải triển khai lại.
// Ví dụ:
// typescript
// Copy code
class MathHelper {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
console.log("Sum:", MathHelper.add(5, 3));
console.log("Difference:", MathHelper.subtract(10, 4));
