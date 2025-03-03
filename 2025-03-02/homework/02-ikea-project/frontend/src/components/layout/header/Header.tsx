import { NavLink } from 'react-router-dom';
import './Header.css'

function Header(): JSX.Element {
    return (
        <div className='Header'>
            <h1>IKEA Website</h1>
            <div>
                <nav>
                    <NavLink to="/furniture">Furniture List</NavLink>
                    <NavLink to="/add-furniture">Add Furniture</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;