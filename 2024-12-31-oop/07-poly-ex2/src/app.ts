import Circle from "./circle.js";
import Rectangle from "./rectangle.js";
import Shape from "./shape.js";
import Square from "./square.js";

const shapeInput: number = +prompt("Please enter a number between 1 - 3");

function getShape(shape: number): Shape {
    switch(shape) {
        case 1:
            return new Square(5)
        case 2:
            return new Circle(5)
        case 3:
            return new Rectangle(10, 5)
    }
}

const shape: Shape = getShape(shapeInput)
console.log(`Area is ${shape.getArea()}`)