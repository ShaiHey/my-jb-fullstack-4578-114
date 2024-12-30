export default class Speaker {
    public constructor(
        public readonly color: string,
        public volume: number,
    ) {}

    public turnOn() {
        console.log(`Speaker turn on....`)
    }

    public turnOff() {
        console.log(`Speaker turn off....`)
    }

    public playback() {
        console.log(`Speaker play....`)
    }
    
    public displaySpeakerInfo() {
        console.log(`Speaker color is : ${this.color}, volume is : ${this.volume}`)
    }
}