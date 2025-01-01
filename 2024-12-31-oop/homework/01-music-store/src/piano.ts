import Instrument from "./instrument.js";
import Tester from "./tester.js";

export default class Piano extends Instrument implements Tester {
    constructor(
        model: string,
        manufacturer: string,
        color: string,
        private numberOfKeys: number
    ) {
        super(model, manufacturer, color)
    }

    test(): void {
        console.log("Testing a piano...")
    }

    tune(): void {
        console.log("Tuning a piano...")
    }

    public display(): void {
        super.display()
        console.log(`Number of keys: ${this.numberOfKeys}`)
    }

    public makeSound(): void {
        console.log("Making Piano Sound")
    }
}