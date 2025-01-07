import './Footer.css'

function Footer(): JSX.Element {
    return (
        <div className='Footer'>
            <p>Server is: {import.meta.env.VITE_REST_SERVER_URL}</p>
        </div>
    )
}

export default Footer;