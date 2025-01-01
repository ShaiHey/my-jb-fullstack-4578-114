import Instrument from "./instrument.js";
export default class Guitar extends Instrument {
    constructor(model, manufacturer, color, numberOfString) {
        super(model, manufacturer, color);
        this.numberOfString = numberOfString;
    }
    display() {
        super.display();
        console.log(`Number of strings: ${this.numberOfString}`);
    }
    makeSound() {
        console.log("Making Guitar Sound");
    }
}
