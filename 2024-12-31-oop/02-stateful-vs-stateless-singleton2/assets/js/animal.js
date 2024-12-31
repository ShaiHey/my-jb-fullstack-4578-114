export default class Animal {
    // This is a stateful class
    // meaning, it holds its own data
    // state = data
    constructor(numberOfLungs) {
        this.numberOfLungs = numberOfLungs;
    }
    breath() {
        console.log(`Breathing  with my ${this.numberOfLungs} lungs`);
    }
}
