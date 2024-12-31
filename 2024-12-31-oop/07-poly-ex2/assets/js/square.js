import Shape from "./shape.js";
export default class Square extends Shape {
    constructor(lengthRib) {
        super();
        this.lengthRib = lengthRib;
    }
    getArea() {
        return this.lengthRib ** 2;
    }
}
