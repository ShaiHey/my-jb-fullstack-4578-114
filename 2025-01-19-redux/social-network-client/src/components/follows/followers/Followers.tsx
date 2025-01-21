import { useEffect, useState } from 'react';
import './Followers.css'
import followersService from '../../../services/followers';
import User from '../../../models/user/User';
import Follow from '../../follows/follow/Follow';
import Loading from '../../common/loading/Loading';

function Followers(): JSX.Element {
    const [followers, setFollowers] = useState<User[]>([]);

    useEffect(() => {
        followersService.getFollowers()
            .then(setFollowers)
            .catch(alert)
    }, [])

    return (
        <div className='Followers'>

            { followers.length === 0 && <Loading />}

            {
                followers.length > 0 && <>
                    <h2>My followers :</h2>
                    <div className='boxContainer'>
                        {followers.map(followers =>
                            <Follow
                                key={followers.id}
                                follow={followers}
                            >
                            </Follow>)}
                    </div>
                </>
            }
        </div>
    )
}

export default Followers;