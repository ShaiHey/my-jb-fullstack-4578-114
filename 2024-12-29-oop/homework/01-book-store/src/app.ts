import Book from "./book.js";

const book1 = new Book("The Little Prince", "Antoine de Saint-Exupéry", "Gallimard", 9.90);
const book2 = new Book("1984", "George Orwell", "Secker & Warburg", 12.99);
const book3 = new Book("The Alchemist", "Paulo Coelho", "HarperOne", 14.50);

book1.displayBookInfo()
console.log(`Vat Value : ${book1.displayVatPrice()}`)

book2.displayBookInfo()
console.log(`Vat Value : ${book2.displayVatPrice()}`)

book3.displayBookInfo()
console.log(`Vat Value : ${book3.displayVatPrice()}`)