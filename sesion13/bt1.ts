abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract getSize(): void;
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }

    getName(): string {
        return super.getName();
    }
}


const rectangle = new Rectangle("Rectangle", 5, 10);
console.log("Shape Name:", rectangle.getName());

console.log("Shape Size:");
rectangle.getSize();
