export default class Instrument {
    constructor(model, manufacturer, color) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
    }
    display() {
        console.log(`Model: ${this.model}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Color: ${this.color}`);
    }
}
