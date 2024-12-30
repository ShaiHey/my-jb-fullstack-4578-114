import Car from "./car.js"

export default class SportCar extends Car {
    public constructor(
        vehicleNumber: string,
        manufacturer: string,
        model: string,
        color: string,
        engineCapacity: number,
        private maxSpeed: number,
        private numberOfRaces: number
    ) {super(vehicleNumber, manufacturer, model, color, engineCapacity)}

    public display() {
        super.display()
        console.log(`Max Speed: ${this.maxSpeed}`)
        console.log(`Number of races the car has participated is: ${this.numberOfRaces}`)
    }
}