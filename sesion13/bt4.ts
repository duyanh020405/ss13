interface Geometry{
    calculateArea():number
    calculatePerimeter():number
}
class Circle22 implements Geometry{
    private radius:number
    constructor(radius:number){
        this.radius=radius
    }
    calculateArea(): number {
        return this.radius*this.radius*Math.PI
    }
    calculatePerimeter(): number {
        return this.radius*3.14
    }
}
class Rectangle22 implements Geometry{
    private width:number
    private height:number
    constructor(width:number,height:number){
        this.height=height
        this.width=width
    }
    calculateArea(): number {
        return this.height*this.width
    }
    calculatePerimeter(): number {
        return (this.height+this.width)*2
    }
}
const check = new Rectangle22(5,6)
console.log(check.calculateArea());
