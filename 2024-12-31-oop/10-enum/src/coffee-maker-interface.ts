import Voltage from "./voltage.js";

export default interface CoffeeMakerInterface {
    numberOfPins: number,
    numberOfMilkHotters: number,
    make: string,
    voltage: Voltage
}