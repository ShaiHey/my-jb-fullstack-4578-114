export default class Mobile {
    private pinCode: number = Math.floor(1000 + Math.random() * 9000)
    public static totalMobilesCreated: number = 0

    public constructor(
        private type: string,
        private sizeScreen: number,
        private price: number,
        private numberOfCamera: number
    ) {
        Mobile.totalMobilesCreated++
    }

    public takePicture() {
        console.log(`${this.type} take picture...`)
    }

    public turnOn() {
        console.log(`${this.type} turning on...`)
    }

    public turnOff() {
        console.log(`${this.type} turning off...`)
    }

    public saleAds() {
        console.log(`${this.type} with screen ${this.sizeScreen} for sale for ${this.price}`)
    }

    public getPinCode() {
        return this.pinCode
    }
}