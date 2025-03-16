import './Home.css'
import imageMovie from '../../assets/images/movie.png'

function Home(): JSX.Element {
    return (
        <div className='Home'>
            <h2>Theaters & Movies</h2>
            <img src={imageMovie} />
        </div>
    )
}

export default Home;