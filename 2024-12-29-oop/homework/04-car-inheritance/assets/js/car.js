export default class Car {
    constructor(vehicleNumber, manufacturer, model, color, engineCapacity) {
        this.vehicleNumber = vehicleNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.engineCapacity = engineCapacity;
    }
    display() {
        console.log(`Vehicle Number: ${this.vehicleNumber}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Color: ${this.color}`);
        console.log(`Engine Capacity: ${this.engineCapacity} litre`);
    }
}
