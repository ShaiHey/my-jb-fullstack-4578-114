import Animal from "./animal.js";
export default class Cat extends Animal {
    constructor(color, breed, price, numberOfSoulsLeft) {
        super(color, breed, price);
        this.numberOfSoulsLeft = numberOfSoulsLeft;
    }
    display() {
        super.display();
        console.log(`Number of souls left: ${this.numberOfSoulsLeft}`);
    }
}
