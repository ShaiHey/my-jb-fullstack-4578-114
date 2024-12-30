class Book {
    constructor(bookName, writer, publisher, price) {
        this.bookName = bookName;
        this.writer = writer;
        this.publisher = publisher;
        this.price = price;
    }
    displayBookInfo() {
        console.log(`Book name: ${this.bookName}, Writer: ${this.writer}, Publisher: ${this.publisher}, Price: ${this.price}`);
    }
    displayVatPrice() {
        return this.price * Book.vat;
    }
}
Book.vat = 0.17;
export default Book;
