import Instrument from "./instrument.js";

export default class Drum extends Instrument {
    constructor(
        model: string,
        manufacturer: string,
        color: string,
        private diameter: number
    ) {
        super(model, manufacturer, color)
    }

    public display(): void {
        super.display()
        console.log(`Diameter: ${this.diameter} inches`)
    }

    public makeSound(): void {
        console.log("Making Drum Sound")
    }
}