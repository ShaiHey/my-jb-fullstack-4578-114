import { useEffect, useState } from 'react';
import './NewBook.css';
import Genre from '../../../models/genre/Genre';
import genreService from '../../../services/genre';
import { useForm } from 'react-hook-form';
import Draft from '../../../models/book/Draft';
import bookService from '../../../services/book';
import { useNavigate } from 'react-router-dom';

function NewBook(): JSX.Element {
    const [ genres, setGenres ] = useState<Genre[]>([]);
    const { register, formState, handleSubmit } = useForm<Draft>();
    const navigate = useNavigate()

    useEffect(() => {
        genreService.getAllGenres()
            .then(setGenres)
            .catch(alert)
    }, [])

    async function submit(draft: Draft) {
        try {
            await bookService.createBook(draft)
            alert("Book create successful")
            navigate('/home')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='NewBook'>
            <form onSubmit={handleSubmit(submit)}>

                <select {...register('genreId', {
                    required: {
                        value: true,
                        message: "Missing genre"
                    }
                })}>
                    <option value="" disabled selected>Please select genre</option>
                    {genres.map(g => <option value={g.id}>{g.name}</option>)}
                </select>
                <span className='error'>{formState.errors.genreId?.message}</span>

                <label htmlFor="bookName">Book Name:</label>
                <input type="text" placeholder='Please enter a book name' {...register('bookName', {
                    required: {
                        value: true,
                        message: "Missing book name"
                    }
                })}/>
                <span className='error'>{formState.errors.bookName?.message}</span>

                <label htmlFor="summary">Book Summary:</label>
                <textarea {...register('summary', {
                    required: {
                        value: true,
                        message: "Missing book summary"
                    }
                })}></textarea>
                <span className='error'>{formState.errors.summary?.message}</span>

                <label htmlFor="bookPrice">Book Price:</label>
                <input type="number" placeholder='Please enter a book price' {...register('bookPrice', {
                    required: {
                        value: true,
                        message: "Missing book price"
                    },
                    min: {
                        value: 1,
                        message: "Negative price not allowed"
                    }
                })}/>
                <span className='error'>{formState.errors.bookPrice?.message}</span>

                <label htmlFor="stock">Book Stock:</label>
                <input type="number" placeholder='Please enter a book stock' {...register('stock', {
                    required: {
                        value: true,
                        message: "Missing Book Stock"
                    },
                    min: {
                        value: 0,
                        message: "Negative stock not allowed"
                    }
                })}/>
                <span className='error'>{formState.errors.stock?.message}</span>

                <button>Add Book</button>
            </form>
        </div>
    )
}

export default NewBook;