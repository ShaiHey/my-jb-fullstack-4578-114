import { Link } from 'react-router-dom';
import './Header.css'

function Header(): JSX.Element {
    return (
        <div className='Header'>
            <div>Logo</div>
            <div>
                <nav>
                    <Link to="/profile">Profile</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;