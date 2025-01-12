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

    return (
        <div className='Following'>
            <h2>Yours following :</h2>
            {following.map(following =>
                <Follow
                    key={following.id}
                    follow={following}
                >
                </Follow>)}
        </div>
    )
}

export default Following;