import { useEffect, useState } from 'react';
import './Followers.css'
import FollowersService from '../../../services/followers';
import User from '../../../models/user/User';
import Follow from '../../follows/follow/Follow';
import Loading from '../../common/loading/Loading';
import useService from '../../../hooks/useService';

function Followers(): JSX.Element {
    const [followers, setFollowers] = useState<User[]>([]);
    const followersService = useService(FollowersService)

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