export default class Kitten {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}`;
    }
}
