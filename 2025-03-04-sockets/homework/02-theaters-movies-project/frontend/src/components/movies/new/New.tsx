import { useEffect, useState } from 'react'
import './New.css'
import Cinema from '../../../models/cinema/Cinema'
import cinemaService from '../../../services/cinema';
import { useForm } from 'react-hook-form';
import Draft from '../../../models/movie/Draft';
import movieService from '../../../services/movie';
import { useNavigate } from 'react-router-dom';

function New(): JSX.Element {

    const [ cinemas, setCinemas ] = useState<Cinema[]>([]);
    const { register, handleSubmit, formState } = useForm<Draft>()
    const navigate = useNavigate()

    useEffect(() => {
        cinemaService.getAllCinemas()
            .then(setCinemas)
            .catch(alert)
    }, [])
    
    async function submit(draft: Draft) {
        try {
            await movieService.createMovie(draft)
            alert("Movie successful created")
            navigate('/movies')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='New'>
            <form onSubmit={handleSubmit(submit)}>
                <select {...register('cinemaId', {
                    required: {
                        value: true,
                        message: "Missing Cinema"
                    }
                })}>
                    <option value="" selected disabled>Please select cinema</option>
                    {cinemas.map(c => <option value={c.id}>{c.name}</option>)}
                </select>
                <span className='error'>{formState.errors.cinemaId?.message}</span>

                <label htmlFor="movieName">Movie Name:</label>
                <input type="text" {...register('movieName', {
                    required: {
                        value: true,
                        message: "Missing Movie Name"
                    }
                })} />
                <span className='error'>{formState.errors.movieName?.message}</span>

                <label htmlFor="dateTimeScreening">Movie Screening:</label>
                <input type='datetime-local' {...register('dateTimeScreening', {
                    required: {
                        value: true,
                        message: "Missing Movie Screening"
                    }
                })} />
                <span className='error'>{formState.errors.dateTimeScreening?.message}</span>

                <label htmlFor="movieDuration">Movie Duration:</label>
                <input type="number" {...register('movieDuration', {
                    required: {
                        value: true,
                        message: "Missing Movie Duration"
                    },
                    min: {
                        value: 60,
                        message: "Minimum movie duration is 60 minute (1hrs)"
                    }
                })} />
                <span className='error'>{formState.errors.movieDuration?.message}</span>

                <button>Add Movie</button>
            </form>
        </div>
    )
}

export default New;