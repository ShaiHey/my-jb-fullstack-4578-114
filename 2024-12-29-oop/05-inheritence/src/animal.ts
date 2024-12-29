import LivingCreature from "./livingCreature.js";

export default class Animal extends LivingCreature {
    public static totalAnimalsCreated: number = 0
    public constructor(
        private readonly color: string,
        private readonly breed: string,
        private price: number
    ) {
        Animal.totalAnimalsCreated++
        super()
    }

    public display() {
        console.log(`Color: ${this.color}`)
        console.log(`Breed: ${this.breed}`)
        console.log(`Price: ${this.price}`)
    }

    public getColor() {
        return this.color;
    }

    public getBreed() {
        return this.breed;
    }

    public getPrice() {
        return this.price;
    }
}