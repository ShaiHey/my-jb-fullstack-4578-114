import Instrument from "./instrument.js";

export default class Guitar extends Instrument {
    constructor(
        model: string,
        manufacturer: string,
        color: string,
        private numberOfString: number
    ) {
        super(model, manufacturer, color)
    }

    public display(): void {
        super.display()
        console.log(`Number of strings: ${this.numberOfString}`)
    }

    public makeSound(): void {
        console.log("Making Guitar Sound")
    }
}