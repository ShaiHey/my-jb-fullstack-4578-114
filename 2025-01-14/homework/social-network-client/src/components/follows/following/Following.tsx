import { useEffect, useState } from 'react';
import './Following.css'
import followingService from '../../../services/following';
import User from '../../../models/user/User';
import Follow from '../../follows/follow/Follow';
import Loading from '../../common/loading/Loading';

function Following(): JSX.Element {
    const [following, setFollowing] = useState<User[]>([]);

    useEffect(() => {
        followingService.getFollowing()
            .then(setFollowing)
            .catch(alert)
    }, [])

    function remove(userId: string): void {
        const newFollowing = following.filter(follow => follow.id !== userId)
        setFollowing(newFollowing);
    }

    return (
        <div className='Following'>

            { following.length === 0 && <Loading />}

            { following.length > 0 && <>
                <h2>I'm following :</h2>
                <div className='boxContainer'>
                    {following.map(following =>
                        <Follow
                            key={following.id}
                            follow={following}
                            remove={remove}
                        >
                        </Follow>)}
                </div>
            </>}
        </div>
    )
}

export default Following;