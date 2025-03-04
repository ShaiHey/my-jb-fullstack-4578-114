import { NavLink } from 'react-router-dom';
import './Header.css'
import logoImage from '../../../assets/images/logo.png'

function Header(): JSX.Element {
    return (
        <div className='Header'>
            <div><img src={logoImage} alt="" /></div>
            <div>
                <nav>
                    <NavLink to="/products/list">List</NavLink>
                    <NavLink to="/products/add">Add Product</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;