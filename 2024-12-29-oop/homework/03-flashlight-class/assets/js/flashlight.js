export default class Flashlight {
    constructor(color, length, intensity, numberOfBatteries) {
        this.color = color;
        this.length = length;
        this.intensity = intensity;
        this.numberOfBatteries = numberOfBatteries;
    }
    turnOn() {
        console.log(`Flashlight turn on....`);
    }
    turnOff() {
        console.log(`Flashlight turn off....`);
    }
    changeBatteries() {
        console.log(`Flashlight change batteries....`);
    }
    displayFlashlightInfo() {
        console.log(`
            Flashlight Info:
            - Color: ${this.color}
            - Length: ${this.length} cm
            - Intensity: ${this.intensity} lumens
            - Number of Batteries: ${this.numberOfBatteries}
        `);
    }
}
