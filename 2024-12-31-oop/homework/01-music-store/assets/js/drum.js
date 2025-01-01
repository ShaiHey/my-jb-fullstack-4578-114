import Instrument from "./instrument.js";
export default class Drum extends Instrument {
    constructor(model, manufacturer, color, diameter) {
        super(model, manufacturer, color);
        this.diameter = diameter;
    }
    display() {
        super.display();
        console.log(`Diameter: ${this.diameter} inches`);
    }
    makeSound() {
        console.log("Making Drum Sound");
    }
}
