export default class Animal {

    // This is a stateful class
    // meaning, it holds its own data
    // state = data

    constructor(
        public numberOfLungs: number
    ) {}

    breath() {
        console.log(`Breathing  with my ${this.numberOfLungs} lungs`)
    }
}