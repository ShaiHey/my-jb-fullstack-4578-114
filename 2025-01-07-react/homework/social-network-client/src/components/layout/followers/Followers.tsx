import { useEffect, useState } from 'react';
import './Followers.css'
import followersList from '../../../services/followers';
import User from '../../../models/user/User';

function Followers(): JSX.Element {
    const [followers, setFollowers] = useState<User[]>([]);

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