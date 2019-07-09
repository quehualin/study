/**
 * 有两个维度发展
 */
abstract class Color {
    static _color: string;
	constructor(color: string) {
		Color._color = color;
	}
    display(): void {
        console.log('color is ', Color._color);
    }
}

class Green extends Color {
	constructor(color: string) {
		super(color);
	}
}

abstract class Shape {
    protected _color: Color;
    static _shapeType: string
    constructor(color: Color) {
        this._color = color;
    }
    draw(): void {
        console.log('shape is ', Circle._shapeType);
        this._color.display();
    }
}

class Circle extends Shape{
    static _shapeType = 'Circle'
    constructor(color: Color) {
        super(color);
    }
}

class Rectangle extends Shape {
    static _shapeType = 'Rectangle';
    constructor(color: Color) {
        super(color);
    }
}

function main() {
    let shape: Rectangle = new Rectangle(new Green('green'));
    shape.draw();
}

main();
