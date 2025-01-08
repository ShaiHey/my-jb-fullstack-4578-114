import { useEffect, useState } from 'react';
import './Following.css'
import Follow from '../../../models/follow/Follow';
import followingList from '../../../services/following';

function Following(): JSX.Element {
    const [following, setFollowing] = useState<Follow[]>([]);

    useEffect(() => {
        followingList.getFollowing()
            .then(setFollowing)
            .catch(alert)
    }, [])

    return (
        <div className='Following'>
            <ul>
                {following.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Following;