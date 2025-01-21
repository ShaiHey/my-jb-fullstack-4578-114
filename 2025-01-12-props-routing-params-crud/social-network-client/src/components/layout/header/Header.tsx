import { NavLink } from 'react-router-dom';
import './Header.css'
import logoImage from '../../../assets/images/logo.png'

function Header(): JSX.Element {
    return (
        <div className='Header'>
            <div><img src={logoImage} alt="" /></div>
            <div>
                <nav>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/feed">Feed</NavLink>
                    <NavLink to="/search">Search</NavLink>
                </nav>
            </div>
            <nav>
                Hello Shay
                <a href="">Logout</a>
            </nav>
        </div>
    )
}

export default Header;