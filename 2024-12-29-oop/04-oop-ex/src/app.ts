import Mobile from "./mobile.js";

console.log(Mobile.totalMobilesCreated)

const apple = new Mobile("iPhone 16 Pro", 6.5, 4700, 4);

console.log(Mobile.totalMobilesCreated)

const samsung = new Mobile("Galaxy Z Flip6", 6.7, 3600, 3);

console.log(Mobile.totalMobilesCreated)

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