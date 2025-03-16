import { NavLink } from 'react-router-dom';
import './Header.css'

function Header(): JSX.Element {

    return (
        <div className='Header'>
            <div>
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                    <NavLink to="/add-movie">Add Movie</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;