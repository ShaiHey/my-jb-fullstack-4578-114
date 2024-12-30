export default class Speaker {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    turnOn() {
        console.log(`Speaker turn on....`);
    }
    turnOff() {
        console.log(`Speaker turn off....`);
    }
    playback() {
        console.log(`Speaker play....`);
    }
    displaySpeakerInfo() {
        console.log(`Speaker color is : ${this.color}, volume is : ${this.volume}`);
    }
}
