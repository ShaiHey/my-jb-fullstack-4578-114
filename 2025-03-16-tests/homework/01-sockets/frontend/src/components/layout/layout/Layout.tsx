import { useContext } from 'react';
import Login from '../../auth/login/Login';
import Followers from '../../follows/followers/Followers';
import Following from '../../follows/following/Following';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Routing from '../routing/Routing';
import './Layout.css'
import { AuthContext } from '../../auth/auth/Auth';

function Layout(): JSX.Element {

    const { jwt } = useContext(AuthContext)!
    const isLoggedIn: boolean = !!jwt

    return (
        <>
            {isLoggedIn ? <div className='Layout'>
                <header>
                    <Header />
                </header>
                <aside>
                    <Following />
                </aside>
                <aside>
                    <Followers />
                </aside>
                <main>
                    <Routing />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div> : <div className='LoginDiv'>
                <Login />
            </div>}
        </>
    )
}

export default Layout;