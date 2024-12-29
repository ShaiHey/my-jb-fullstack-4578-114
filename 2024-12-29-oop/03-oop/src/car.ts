export default class Car {
    // Data members / Class fields
    make: string
    model: string
    diesel: boolean
    year: number
    price: number

    // Methods
    drive() {
        console.log(`I am driving my ${this.make} ${this.model}....`)
    }
}