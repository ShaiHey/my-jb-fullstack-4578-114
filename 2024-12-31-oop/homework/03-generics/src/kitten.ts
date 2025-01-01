export default class Kitten {
    constructor(
        public name: string,
        public age: number,
        public color: string
    ) {}

    toString(): string {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}`;
    }
}