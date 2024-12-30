export default class Book {
    private static readonly vat: number = 0.17

    public constructor(
        public readonly bookName: string,
        public readonly writer: string,
        public readonly publisher: string,
        public price: number,
    ) {}

    public displayBookInfo() {
        console.log(`Book name: ${this.bookName}, Writer: ${this.writer}, Publisher: ${this.publisher}, Price: ${this.price}`)
    }

    public displayVatPrice() {
        return this.price * Book.vat
    }
}