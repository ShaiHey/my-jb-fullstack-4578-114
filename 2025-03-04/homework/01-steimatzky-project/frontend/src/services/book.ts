import axios from "axios";
import Book from "../models/book/Book";
import Draft from "../models/book/Draft";

class BookService {
    async getAllBooks(): Promise<Book[]> {
        const response = await axios.get<Book[]>(`${import.meta.env.VITE_REST_SERVER_URL}/books`);
        return response.data;
    }

    async createBook(draft: Draft): Promise<Book> {
        const response = await axios.post<Book>(`${import.meta.env.VITE_REST_SERVER_URL}/books`, draft);
        return response.data;
    }

    async deleteBook(bookId: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/books/${bookId}`);
        return response.data;
    }
}

const bookService = new BookService();
export default bookService;