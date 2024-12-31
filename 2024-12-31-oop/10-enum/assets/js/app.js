import Maker from "./makers.js";
import Voltage from "./voltage.js";
const coffeeMaker = {
    numberOfMilkHotters: 2,
    numberOfPins: 4,
    make: Maker.NESPRESSO,
    voltage: Voltage.V240 // Voltage.V240 or 240
};
console.log(coffeeMaker);
