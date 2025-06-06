import Flashlight from "./flashlight.js";

const flashlight1 = new Flashlight("Red", 50, 800, 4);
const flashlight2 = new Flashlight("Blue", 100, 600, 3);

flashlight1.displayFlashlightInfo();
flashlight1.turnOn();
flashlight1.changeBatteries();
flashlight1.turnOff();

flashlight2.displayFlashlightInfo();
flashlight2.turnOn();
flashlight2.changeBatteries();
flashlight2.turnOff();