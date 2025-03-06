import Header from '../header/Header';
import Routing from '../routing/Routing';
import './Layout.css';

function Layout(): JSX.Element {
    return (
        <div className='Layout'>
            <header>
                <Header />
            </header>
            <main>
                <Routing />
            </main>
        </div>
    )
}

export default Layout;