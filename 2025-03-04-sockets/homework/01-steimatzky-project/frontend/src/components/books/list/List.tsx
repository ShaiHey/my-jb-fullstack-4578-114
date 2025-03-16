import { useEffect, useState } from 'react';
import './List.css';
import Book from '../../../models/book/Book';
import bookService from '../../../services/book';
import Card from '../card/Card';

function List(): JSX.Element {

    const [ books, setBooks ] = useState<Book[]>([]);

    useEffect(() => {
        bookService.getAllBooks()
            .then(setBooks)
            .catch(alert)
    }, [])

    function deleteBook(bookId: string) {
        setBooks(books.filter(b => b.id !== bookId))
    }

    return (
        <div className='List'>
            {books.map(b => <Card key={b.id} book={b} deleteBookState={deleteBook} />)}
        </div>
    )
}

export default List;