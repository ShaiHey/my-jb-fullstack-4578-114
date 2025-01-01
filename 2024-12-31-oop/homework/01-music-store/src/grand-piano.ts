import Piano from "./piano.js";

export default class GrandPiano extends Piano {
    constructor(
        model: string,
        manufacturer: string,
        color: string,
        numberOfKeys: number,
        private length: number
    ) {
        super(model, manufacturer, color, numberOfKeys)
    }

    public display(): void {
        super.display()
        console.log(`Length: ${this.length} m`)
    }

    public makeSound(): void {
        console.log("Making Grand Piano Sound")
    }
}