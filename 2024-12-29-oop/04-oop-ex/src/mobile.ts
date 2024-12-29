export default class Mobile {
    private type: string
    private sizeScreen: number
    private price: number
    private numberOfCamera: number
    private pinCode: number = Math.floor(1000 + Math.random() * 9000)

    public constructor(type: string, sizeScreen: number, price: number, numberOfCamera: number) {
        this.type = type
        this.sizeScreen = sizeScreen
        this.price = price
        this.numberOfCamera = numberOfCamera
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