import { useEffect, useState } from 'react';
import './Followers.css'
import Follow from '../../../models/follow/Follow';
import followersList from '../../../services/followers';

function Followers(): JSX.Element {
    const [followers, setFollowers] = useState<Follow[]>([]);

    useEffect(() => {
        followersList.getFollowers()
            .then(setFollowers)
            .catch(alert)
    }, [])

    return (
        <div className='Followers'>
            <h2>Yours followers :</h2>
            <ul>
                {followers.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Followers;