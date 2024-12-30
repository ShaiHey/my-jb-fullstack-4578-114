import Car from "./car.js";
export default class SportCar extends Car {
    constructor(vehicleNumber, manufacturer, model, color, engineCapacity, maxSpeed, numberOfRaces) {
        super(vehicleNumber, manufacturer, model, color, engineCapacity);
        this.maxSpeed = maxSpeed;
        this.numberOfRaces = numberOfRaces;
    }
    display() {
        super.display();
        console.log(`Max Speed: ${this.maxSpeed}`);
        console.log(`Number of races the car has participated is: ${this.numberOfRaces}`);
    }
}
