import { NavLink } from 'react-router-dom';
import './Header.css'
import logoImage from '../../../assets/images/logo.png'
import { useContext, useMemo } from 'react';
import { AuthContext } from '../../auth/auth/Auth';
import { jwtDecode } from 'jwt-decode';
import User from '../../../models/user/User';

function Header(): JSX.Element {

    const { jwt } = useContext(AuthContext)!

    const name = useMemo(() => {
        const { name } = jwtDecode<User>(jwt)
        return name
    }, [ jwt ])

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
                Hello {name} | <button>Logout</button>
            </nav>
        </div>
    )
}

export default Header;