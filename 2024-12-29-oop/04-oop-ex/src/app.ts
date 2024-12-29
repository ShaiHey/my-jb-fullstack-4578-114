import Mobile from "./mobile.js";

const apple = new Mobile("iPhone 16 Pro", 6.5, 4700, 4);
const samsung = new Mobile("Galaxy Z Flip6", 6.7, 3600, 3);

apple.turnOn()
apple.takePicture()
apple.turnOff()

apple.saleAds()
console.log(`PinCode is: ${apple.getPinCode()}`)

//

samsung.turnOn()
samsung.takePicture()
samsung.turnOff()

samsung.saleAds()
console.log(`PinCode is: ${samsung.getPinCode()}`)