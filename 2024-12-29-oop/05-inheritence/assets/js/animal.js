import LivingCreature from "./livingCreature.js";
export default class Animal extends LivingCreature {
    constructor(color, breed, price) {
        super();
        this.color = color;
        this.breed = breed;
        this.price = price;
    }
    display() {
        console.log(`Color: ${this.color}`);
        console.log(`Breed: ${this.breed}`);
        console.log(`Price: ${this.price}`);
    }
    getColor() {
        return this.color;
    }
    getBreed() {
        return this.breed;
    }
    getPrice() {
        return this.price;
    }
}
