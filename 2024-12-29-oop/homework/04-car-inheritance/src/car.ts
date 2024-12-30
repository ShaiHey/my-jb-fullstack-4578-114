export default class Car {
    public constructor(
        private readonly vehicleNumber: string,
        private readonly manufacturer: string,
        private readonly model: string,
        private color: string,
        private readonly engineCapacity: number
    ) {}

    public display() {
        console.log(`Vehicle Number: ${this.vehicleNumber}`)
        console.log(`Manufacturer: ${this.manufacturer}`)
        console.log(`Model: ${this.model}`)
        console.log(`Color: ${this.color}`)
        console.log(`Engine Capacity: ${this.engineCapacity} litre`)
    }
}