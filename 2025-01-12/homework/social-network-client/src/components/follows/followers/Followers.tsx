import { useEffect, useState } from 'react';
import './Followers.css'
import followersList from '../../../services/followers';
import User from '../../../models/user/User';
import Follow from '../../follows/follow/Follow';

function Followers(): JSX.Element {
    const [followers, setFollowers] = useState<User[]>([]);

    useEffect(() => {
        followersList.getFollowers()
            .then(setFollowers)
            .catch(alert)
    }, [])

    return (
        <div className='Followers'>
            <h2>My followers :</h2>
            <div className='boxContainer'>
                {followers.map(followers =>
                    <Follow
                        key={followers.id}
                        follow={followers}
                    >
                    </Follow>)}
            </div>
        </div>
    )
}

export default Followers;