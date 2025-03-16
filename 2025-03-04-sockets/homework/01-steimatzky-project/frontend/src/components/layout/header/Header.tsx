import { NavLink } from 'react-router-dom';
import './Header.css'
import logoImage from '../../../assets/images/logo.png'

function Header(): JSX.Element {
    return (
        <div className='Header'>
            <div><img src={logoImage} alt="" /></div>
            <div>
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/create">Create Book</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;