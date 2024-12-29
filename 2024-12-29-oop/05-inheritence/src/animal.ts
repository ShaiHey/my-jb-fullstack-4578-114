export default class Animal {
    public constructor(
        private readonly color: string,
        private readonly breed: string,
        private price: number
    ) {}

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