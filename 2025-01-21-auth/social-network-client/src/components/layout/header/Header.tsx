import { NavLink } from 'react-router-dom';
import './Header.css'
import logoImage from '../../../assets/images/logo.png'
import useUsername from '../../../hooks/useUsername';
import { useContext } from 'react';
import { AuthContext } from '../../auth/auth/Auth';

function Header(): JSX.Element {

    const name = useUsername()
    const { logout } = useContext(AuthContext)!

    function logoutMe() {
        if(confirm("Are you sure to logout ?")){
            logout()
        }
    }

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
                Hello {name} | <button onClick={logoutMe}>Logout</button>
            </nav>
        </div>
    )
}

export default Header;