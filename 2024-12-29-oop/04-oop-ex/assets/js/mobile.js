class Mobile {
    constructor(type, sizeScreen, price, numberOfCamera) {
        this.type = type;
        this.sizeScreen = sizeScreen;
        this.price = price;
        this.numberOfCamera = numberOfCamera;
        this.pinCode = Math.floor(1000 + Math.random() * 9000);
        Mobile.totalMobilesCreated++;
    }
    takePicture() {
        console.log(`${this.type} take picture...`);
    }
    turnOn() {
        console.log(`${this.type} turning on...`);
    }
    turnOff() {
        console.log(`${this.type} turning off...`);
    }
    saleAds() {
        console.log(`${this.type} with screen ${this.sizeScreen} for sale for ${this.price}`);
    }
    getPinCode() {
        return this.pinCode;
    }
}
Mobile.totalMobilesCreated = 0;
export default Mobile;
