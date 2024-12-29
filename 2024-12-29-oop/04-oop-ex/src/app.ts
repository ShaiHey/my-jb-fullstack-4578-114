import Mobile from "./mobile.js";

const apple = new Mobile();
const samsung = new Mobile();

apple.type = "iPhone 16 Pro"
apple.sizeScreen = 6.5
apple.price = 4700
apple.numberOfCamera = 4;

apple.turnOn()
apple.takePicture()
apple.turnOff()

//

samsung.type = "Galaxy Z Flip6"
samsung.sizeScreen = 6.7
samsung.price = 3600
samsung.numberOfCamera = 3;

samsung.turnOn()
samsung.takePicture()
samsung.turnOff()