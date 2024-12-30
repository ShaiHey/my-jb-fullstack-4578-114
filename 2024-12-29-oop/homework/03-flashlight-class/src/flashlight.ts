export default class Flashlight {
    public constructor(
        public readonly color: string,
        public readonly length: number,
        public intensity: number,
        public readonly numberOfBatteries: number,
    ) {}

    public turnOn() {
        console.log(`Flashlight turn on....`);
    }

    public turnOff() {
        console.log(`Flashlight turn off....`);
    }

    public changeBatteries() {
        console.log(`Flashlight change batteries....`);
    }
    
    public displayFlashlightInfo() {
        console.log(`
            Flashlight Info:
            - Color: ${this.color}
            - Length: ${this.length} cm
            - Intensity: ${this.intensity} lumens
            - Number of Batteries: ${this.numberOfBatteries}
        `);
    }
}