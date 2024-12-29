export default class Mobile {
    type: string
    sizeScreen: number
    price: number
    numberOfCamera: number

    // Methods
    takePicture() {
        console.log(`${this.type} take picture...`)
    }

    turnOn() {
        console.log(`${this.type} turning on...`)
    }

    turnOff() {
        console.log(`${this.type} turning off...`)
    }
}