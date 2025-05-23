import User from '../../../models/user/User';
import './Follow.css'
import picImage from '../../../assets/images/pic.jpg'
import following from '../../../services/following';
import { useState } from 'react';
import LoadingButton from '../../common/loading-button/LoadingButton';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { unfollow, follow as followAction } from '../../../redux/followingSlice';

interface FollowProps {
    follow: User
}

function Follow({ follow }: FollowProps): JSX.Element {
    const { id, name } = follow
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch()

    const isFollowing = useAppSelector(state => state.following.following.find(f => f.id === id))

    async function unfollowMe() {
        if(confirm(`Are you sure you want to unfollow "${name}" ?`)) {
            try {
                setLoading(true)
                await following.unfollow(id)
                dispatch(unfollow({userId: id}))
            } catch (error) {
                alert(error)
            } finally {
                setLoading(false);
            }
        }
    }

    async function followMe() {
        try {
            setLoading(true)
            await following.follow(id)
            dispatch(followAction(follow))
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className='Follow'>
            <div><img src={picImage} alt="picUser"/></div>
            <div>{name}</div>
            {isFollowing &&
                <LoadingButton
                    isSubmitting={loading}
                    buttonText="Unfollow"
                    loadingText='Unfollowing'
                    onClick={unfollowMe}
                />
            }

            {!isFollowing &&
                <LoadingButton
                    isSubmitting={loading}
                    buttonText="Follow"
                    loadingText='Following'
                    onClick={followMe}
                />
            }
        </div>
    )
}

export default Follow;