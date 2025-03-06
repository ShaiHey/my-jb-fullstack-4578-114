import { ChangeEvent, useEffect, useState } from 'react';
import './List.css'
import Cinema from '../../../models/cinema/Cinema';
import Movie from '../../../models/movie/Movie';
import cinemaService from '../../../services/cinema';
import movieService from '../../../services/movie';
import Card from '../card/Card';

function List(): JSX.Element {

    const [ cinemas, setCinemas ] = useState<Cinema[]>([]);
    const [ movies, setMovies ] = useState<Movie[]>([]);

    useEffect(() => {
        cinemaService.getAllCinemas()
            .then(setCinemas)
            .catch(alert)
    }, [])

    async function changeCinema(event: ChangeEvent<HTMLSelectElement>) {
        movieService.getMoviesPerCinema(event.currentTarget.value)
            .then(setMovies)
            .catch(alert)
    }

    function deleteMovieState(id: string) {
        setMovies(movies.filter(m => m.id !== id))
    }

    return (
        <div className='List'>
            <h2>Theaters & Movies</h2>

            <div className='Select'>
                <select onChange={changeCinema}>
                    <option value="" selected disabled>Please select cinema</option>
                    {cinemas.map(c => <option value={c.id}>{c.name}</option>)}
                </select>
            </div>

            <div className='CardsContainer'>
                {movies.map(m => <Card key={m.id} movie={m} deleteMovie={deleteMovieState} />)}
            </div>
        </div>
    )
}

export default List;