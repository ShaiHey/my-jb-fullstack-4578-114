import Book from '../../../models/book/Book';
import bookService from '../../../services/book';
import './Card.css';

interface PropsCard {
    book: Book
    deleteBookState: (bookId: string) => void;
}

function Card({ book, deleteBookState }: PropsCard): JSX.Element {

    async function deleteMe() {
        try {
            await bookService.deleteBook(book.id)
            deleteBookState(book.id)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='Card'>
            <h6>Book Name: {book.bookName} | Genre: {book.genre.name}</h6>
            <small>{book.summary}</small>
            <p>Price: {book.bookPrice}</p>
            <p>Stock: {book.stock}</p>
            <button onClick={deleteMe}>Delete Book</button>
        </div>
    )
}

export default Card;