import { useEffect, useState } from 'react';
import './Following.css'
import followingList from '../../../services/following';
import User from '../../../models/user/User';

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
            <ul>
                {following.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Following;