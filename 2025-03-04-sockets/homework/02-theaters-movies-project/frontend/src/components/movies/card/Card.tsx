import Movie from '../../../models/movie/Movie'
import movieService from '../../../services/movie'
import './Card.css'

interface PropsCard {
    movie: Movie,
    deleteMovie: (id: string) => void;
}

function Card({ movie, deleteMovie }: PropsCard): JSX.Element {

    async function deleteMe() {
        await movieService.deleteMovie(movie.id)
        deleteMovie(movie.id)
    }

    return (
        <div className='Card'>
            <h3>Movie Name: {movie.movieName}</h3>
            <h6>Date & Time: {movie.dateTimeScreening.toLocaleString()}</h6>
            <h6>Movie Duration: {movie.movieDuration} Minutes</h6>
            <h6>Cinema Name: {movie.cinema.name}</h6>
            <button onClick={deleteMe}>Delete movie</button>
        </div>
    )
}

export default Card;