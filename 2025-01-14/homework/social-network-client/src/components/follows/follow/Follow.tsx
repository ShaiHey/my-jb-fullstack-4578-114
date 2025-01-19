import User from '../../../models/user/User';
import './Follow.css'
import picImage from '../../../assets/images/pic.jpg'
import following from '../../../services/following';
import { useState } from 'react';
import LoadingButton from '../../common/loading-button/LoadingButton';

interface FollowProps {
    follow: User
    remove?(userId: string): void; 
}

function Follow({ follow, remove }: FollowProps): JSX.Element {
    const { id, name } = follow
    const [loading, setLoading] = useState<boolean>(false);

    async function unfollowMe() {
        if(remove && confirm(`Are you sure you want to unfollow "${name}" ?`)) {
            try {
                setLoading(true)
                await following.unfollow(id)
                remove(id)
            } catch (error) {
                alert(error)
            } finally {
                setLoading(false);
            }
        }
    }
    
    return (
        <div className='Follow'>
            <div><img src={picImage} alt="picUser"/></div>
            <div>{name}</div>
            <LoadingButton
                isSubmitting={loading}
                buttonText='Unfollow'
                loadingText='Unfollowing...'
                onClick={unfollowMe}
            />
        </div>
    )
}

export default Follow;