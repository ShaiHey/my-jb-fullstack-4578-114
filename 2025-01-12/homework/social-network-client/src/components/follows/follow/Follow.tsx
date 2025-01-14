import User from '../../../models/user/User';
import './Follow.css'
import picImage from '../../../assets/images/pic.jpg'
import following from '../../../services/following';

interface FollowProps {
    follow: User
    remove?(id: string): void; 
}

function Follow({ follow, remove }: FollowProps): JSX.Element {
    const { id, name } = follow

    async function unfollowMe() {
        if(remove && confirm(`Are you sure you want to unfollow "${name}" ?`)) {
            try {
                await following.unfollow(id)
                remove(id)
            } catch (error) {
                alert(error)
            }
        }
    }
    
    return (
        <div className='Follow'>
            <div><img src={picImage} alt="picUser"/></div>
            <div>{name}</div>
            <button onClick={unfollowMe}>Unfollow</button>
        </div>
    )
}

export default Follow;