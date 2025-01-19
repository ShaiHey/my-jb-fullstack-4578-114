import './Loading.css'
import loadingSource from '../../../assets/images/loading.webp'

function Loading(): JSX.Element {
    return (
        <div className='Loading'>
            <img src={loadingSource} alt="Loading..."/>
        </div>
    )
}

export default Loading;