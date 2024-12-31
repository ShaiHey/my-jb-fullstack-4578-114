import Shape from "./shape.js";

export default class Square extends Shape {
    constructor(
        private lengthRib: number
    ) {
        super()
    }
    
    getArea(): number {
        return this.lengthRib ** 2
    }
}