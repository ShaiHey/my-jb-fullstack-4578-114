import Instrument from "./instrument.js";
export default class Piano extends Instrument {
    constructor(model, manufacturer, color, numberOfKeys) {
        super(model, manufacturer, color);
        this.numberOfKeys = numberOfKeys;
    }
    test() {
        console.log("Testing a piano...");
    }
    tune() {
        console.log("Tuning a piano...");
    }
    display() {
        super.display();
        console.log(`Number of keys: ${this.numberOfKeys}`);
    }
    makeSound() {
        console.log("Making Piano Sound");
    }
}
