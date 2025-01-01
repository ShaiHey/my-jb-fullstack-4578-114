import Piano from "./piano.js";
export default class GrandPiano extends Piano {
    constructor(model, manufacturer, color, numberOfKeys, length) {
        super(model, manufacturer, color, numberOfKeys);
        this.length = length;
    }
    display() {
        super.display();
        console.log(`Length: ${this.length} m`);
    }
    makeSound() {
        console.log("Making Grand Piano Sound");
    }
}
