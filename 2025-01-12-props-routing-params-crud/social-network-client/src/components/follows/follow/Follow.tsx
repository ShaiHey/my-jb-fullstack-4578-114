import User from '../../../models/user/User';
import './Follow.css'
import picImage from '../../../assets/images/pic.jpg'

interface FollowProps {
    follow: User
}

function Follow({ follow }: FollowProps): JSX.Element {
    const { name } = follow
    
    return (
        <div className='Follow'>
            <div><img src={picImage} alt="picUser"/></div>
            <div>{name}</div>
        </div>
    )
}

export default Follow;