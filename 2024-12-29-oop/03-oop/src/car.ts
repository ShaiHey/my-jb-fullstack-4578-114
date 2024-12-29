export default class Car {
    // Data members / Class fields
    // public make: string
    // public model: string
    // public diesel: boolean
    // public year: number
    // public price: number
    private serialNumber: number = Math.floor(Math.random() * 1000000)
    private static vat: number = 1.17
    private hornVolume: number = Math.random()

    // public constructor(make: string, model: string, diesel: boolean, year: number, price: number) {
    //     this.make = make
    //     this.model = model
    //     this.diesel = diesel
    //     this.year = year
    //     this.price = price
    // }

    // Methods
    // public init(make: string, model: string, diesel: boolean, year: number, price: number) {
    //     this.make = make
    //     this.model = model
    //     this.diesel = diesel
    //     this.year = year
    //     this.price = price
    // }

    // Shorten constructor
    public constructor(
        public make: string,
        public model: string,
        public diesel: boolean,
        public year: number,
        public price: number,
    ) {}

    public drive() {
        console.log(`I am driving my ${this.make} ${this.model}....`)
    }

    public displaySerialNumber() {
        console.log(`Serial number is : ${this.serialNumber}`)
    }

    public displaySaleInfo() {
        console.log(`A ${this.year} ${this.make} ${this.model} for sale for ${this.getFullPrice()}`)
    }

    public getFullPrice() {
        return this.price * Car.vat
    }

    public static horn() {
        console.log(`Tutututututu`)
    }

    public hornSpecific() {
        console.log(`Tutututututu volume: ${this.hornVolume}`)
    }
}