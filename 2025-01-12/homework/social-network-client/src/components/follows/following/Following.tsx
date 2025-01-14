import { useEffect, useState } from 'react';
import './Following.css'
import followingList from '../../../services/following';
import User from '../../../models/user/User';
import Follow from '../../follows/follow/Follow';

function Following(): JSX.Element {
    const [following, setFollowing] = useState<User[]>([]);

    useEffect(() => {
        followingList.getFollowing()
            .then(setFollowing)
            .catch(alert)
    }, [])

    function remove(id: string): void {
        const index = following.findIndex(following => following.id === id);
        if(index > -1) {
            const followingAfterRemoval = [...following]
            followingAfterRemoval.splice(index, 1)
            setFollowing(followingAfterRemoval)
        }
    }

    return (
        <div className='Following'>
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
        </div>
    )
}

export default Following;