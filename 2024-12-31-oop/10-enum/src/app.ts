import CoffeeMakerInterface from "./coffee-maker-interface.js";
import Voltage from "./voltage.js";

const coffeeMaker: CoffeeMakerInterface = {
    numberOfMilkHotters: 2,
    numberOfPins: 4,
    make: "Lavaza",
    voltage: Voltage.V240 // Voltage.V240 or 240
}

console.log(coffeeMaker);