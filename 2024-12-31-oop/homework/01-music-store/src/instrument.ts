export default abstract class Instrument {
    public constructor(
        protected model: string,
        protected manufacturer: string,
        protected color: string
    ) {}

    public abstract makeSound(): void;
    
    public display() {
        console.log(`Model: ${this.model}`)
        console.log(`Manufacturer: ${this.manufacturer}`)
        console.log(`Color: ${this.color}`)
    }
}